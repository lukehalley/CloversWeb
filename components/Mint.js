import React, {useEffect, useState, useRef} from 'react'
import {ethers} from 'ethers'
import {hasEthereum, requestAccount} from '../utils/ethereum'
import Web3 from 'web3';
// import 'tw-elements';
import Contract from "../src/artifacts/contracts/F0.sol/F0.json";
import {Transition} from "@headlessui/react";

export default function Mint(
    {
        currentMintType,
        connected, updateConnectedState,
        loading, updateLoadingState,
        hasMetamask, updateHasMetamaskState,
        walletText, updateWalletTextState,
        hasCorrectNetwork, updateHasCorrectNetworkState,
        switchToCorrectNetwork,
        handleConnectWallet,
        installMetamask,
        fetchConnectedAccount,
        requestConnection
    }) {

    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('enter the amount of Clover(s) you would like to mint.');
    const [popupTitle, setPopupTitle] = useState('Clover');
    const [popupIsError, setPopupIsError] = useState('Msg');

    // Minting state
    const [mintQuantity, setMintQuantity] = useState(1);
    const [MintSumTotal, setMintSumTotal] = useState(0.025);
    const [mintActive, setMintActive] = useState(false);
    const [mintPerWalletLimit, setMintPerWalletLimit] = useState(5);
    const [totalMinted, setTotalMinted] = useState(0);
    const [totalSupply, setTotalSupply] = useState(5);
    const [mintPrice, setMintPrice] = useState(0.025);
    const [mintResult, setMintResult] = useState([]);

    const [hasWhitelist, setHasWhitelist] = useState(false);
    const [mintInProgress, setMintInProgress] = useState(false);
    const mintQuantityInputRef = useRef();

    const F0 = require('f0js');

    // Fetch all the data we need from our contract.
    async function fetchTotals() {

        const f0 = new F0();

        try {

            try {

                await f0.init({
                    web3: new Web3(window.ethereum),
                    contract: process.env.NEXT_PUBLIC_MINTER_ADDRESS,
                    network: process.env.NEXT_PUBLIC_NETWORK,
                    currency: process.env.NEXT_PUBLIC_CURRENCY
                });
            } catch (error) {
                console.error(error.message);
            }

            f0.invites().then((inviteValue) => {

                if (Object.keys(inviteValue).length === 0) {
                    setMintActive(false);
                } else {

                    const invite = (Object.keys(inviteValue)[0]);
                    const inviteObj = inviteValue[invite];
                    setMintPrice(Number(inviteObj.condition.converted.eth));

                    setMintPerWalletLimit(inviteObj.condition.converted.limit);

                    f0.config().then((configValue) => {
                        setTotalSupply(Number(configValue.converted.supply));
                        f0.nextId().then((nextIdValue) => {
                            setTotalMinted(Number(nextIdValue - 1));
                        });
                    });


                    if (totalMinted >= totalSupply) {
                        setMintActive(false);
                    } else {
                        setMintActive(true);

                        const mintsRemaining = totalSupply - totalMinted;

                        if (mintsRemaining < mintPerWalletLimit) {
                            setMintPerWalletLimit(mintsRemaining)
                        }
                    }
                }
            });



        } catch (e) {

        }

    }

    // Close The Mint Popup
    function closePopup() {
        setShowPopup(false);
    }

    // Open The Modal
    function openPopup(isError, popupTitle, popupMessage) {
        setPopupTitle(popupTitle);
        setPopupIsError(isError);
        setPopupMessage(popupMessage);
        setShowPopup(true);
        setMintInProgress(false);
    }

    function parseError(error) {
        const errorBeforeParse = (error.message).split('"message": ').pop();

        return errorBeforeParse.substring(
            errorBeforeParse.indexOf('"') + 1,
            errorBeforeParse.lastIndexOf('"')
        );
    }

    // Add or Subtract to the total mint
    const incrementCounter = () => {
        if (mintQuantity < mintPerWalletLimit) {
            setMintQuantity(mintQuantity + 1);
            var sumTotal = ((mintQuantity + 1) * mintPrice).toFixed(3);
            if ((sumTotal.slice(-2)) === "00") {
                setMintSumTotal(sumTotal.substring(0, sumTotal.length - 2));
            }
            else if ((sumTotal.slice(-1)) === "0") {
                setMintSumTotal(sumTotal.substring(0, sumTotal.length - 1));
            } else {
                setMintSumTotal(sumTotal);
            }

        }
    };
    const decrementCounter = () => {
        if (mintQuantity > 1) {
            setMintQuantity(mintQuantity - 1);
            var sumTotal = ((mintQuantity - 1) * mintPrice).toFixed(3);
            setMintSumTotal(sumTotal);
        }
    };

    // Call smart contract to mint NFT(s) from current address
    async function mintNFTs() {
        // Check quantity
        if (mintQuantity < 1) {
            openPopup(true, "Mint Error!",'You need to mint at least 1 NFT.', );
        }
        if (mintQuantity > mintPerWalletLimit) {
            openPopup(true, "Mint Error!", ('You can only mint a maximum of' + mintPerWalletLimit + ' Clovers.'));
        }

        try {

            if (currentMintType !== null) {

                setMintInProgress(true);

                const web3 = new Web3(window.ethereum);

                const f0 = new F0();

                try {
                    await f0.init({
                        web3: web3,                   // (required) an instantiated web3 instance (both browser/node.js supported)
                        contract: process.env.NEXT_PUBLIC_MINTER_ADDRESS,
                        network: process.env.NEXT_PUBLIC_NETWORK,
                        currency: process.env.NEXT_PUBLIC_CURRENCY
                    });
                } catch (error) {
                    openPopup(true, "Mint Error!", error);
                }

                if (hasWhitelist && currentMintType === "private") {

                    let invites = await f0.myInvites();

                    const invite = (Object.keys(invites)[0]);

                    try {

                        f0.mint(invite, mintQuantity)
                            .then((mintResult) => {
                                if (typeof mintResult !== 'undefined' && mintResult.length > 0) {

                                    if (mintQuantity === 1) {
                                        openPopup(false, "Mint Successful!", "You minted a Clover!");
                                    } else {
                                        openPopup(false, "Mint Successful!", "You minted " + mintQuantity + " Clover(s)!");
                                    }

                                    setMintResult(mintResult);
                                    fetchTotals();
                                }
                            })
                            .catch(mintError => {

                                const err = parseError(mintError);

                                if (err === "execution reverted: 10") {
                                    openPopup(true, "Mint Limit Reached!", "You have already minted " + mintPerWalletLimit + " Clovers!");
                                } else {
                                    openPopup(true, "Mint Error!", err);
                                }

                            });

                    } catch (error) {
                        openPopup(true, "Mint Error!", error);
                    }

                } else {

                    if (currentMintType === "public") {

                        if(!hasEthereum()) {
                            updateHasMetamaskState(false);
                            updateLoadingState(false);
                        } else {
                            updateHasMetamaskState(true);
                            try {

                                f0.invite(null).then(() => {

                                    try {

                                        f0.mint(null, mintQuantity)
                                            .then((mintResult) => {
                                                if (typeof mintResult !== 'undefined' && mintResult.length > 0) {

                                                    if (mintQuantity === 1) {
                                                        openPopup(false, "Mint Successful!", "You minted a Clover!");
                                                    } else {
                                                        openPopup(false, "Mint Successful!", "You minted " + mintQuantity + " Clover(s)!");
                                                    }

                                                    setMintResult(mintResult);
                                                    fetchTotals();
                                                }
                                            })
                                            .catch(mintError => {

                                                const err = parseError(mintError);

                                                if (err === "execution reverted: 10") {
                                                    openPopup(true, "Mint Limit Reached!", "You have already minted " + mintPerWalletLimit + " Clovers!");
                                                } else {
                                                    openPopup(true, "Mint Error!", err);
                                                }

                                            });

                                    } catch (error) {
                                        openPopup(true, "Mint Error!", error);
                                    }

                                });

                            } catch (error) {
                                openPopup(true, "Mint Error!", error);
                            }
                        }

                    } else {
                        openPopup(true, "No Whitelist!", "Sorry - you don't have whitelist, please wait for the public mint.");

                    }
                }
            } else {
                openPopup(true, "Mint Error!", "Unknown Error.");
            }

        } catch (error) {
            openPopup(true, "Mint Error!", error);
        }
    }

    // Check if user has the whitelist
    async function checkWalletHasWhitelist() {

        if(! hasEthereum()) {
            updateHasMetamaskState(false);
            updateLoadingState(false);
        } else {
            updateHasMetamaskState(true);
            const web3 = new Web3(window.ethereum);

            const f0 = new F0();

            try {

                await f0.init({
                    web3: web3,
                    contract: process.env.NEXT_PUBLIC_MINTER_ADDRESS,
                    network: process.env.NEXT_PUBLIC_NETWORK,
                    currency: process.env.NEXT_PUBLIC_CURRENCY
                });
            } catch (error) {
                openPopup(true, "Whitelist Check Error!", error);
            }

            let invites = await f0.myInvites();

            setHasWhitelist(Object.getOwnPropertyNames(invites).length !== 0);
        }

    }

    // Network changes - done
    useEffect( function() {
        updateLoadingState(true);
        fetchConnectedAccount();
        checkWalletHasWhitelist();
        fetchTotals();
        updateLoadingState(false);
    },[]);

    return (
        <>

            <div className="pb-4 grid grid-cols-1 gap-y-4 md:gap-4 mt-0 md:grid-rows-1 md:grid-cols-8 sm:px-8 xl:px-0">

                <div
                    className="order-2 md:order-1 relative flex flex-col items-center text-center justify-between col-span-1 lg:col-span-3 md:col-span-3 p-8 space-y-4 overflow-hidden bg-cloverDarkGreen bg-opacity-40 border-dashed border-8 border-cloverBorder rounded-none rounded">
                    <div className="h-full w-full flex flex-col justify-center items-center">
                        <div className="row-span-0">
                            <h1 className="mb-4 text-2xl md:text-3xl">[ Why Mint A Clover? ]</h1>
                        </div>
                        <div className="capitalize lg:md:text-xl lg:text-xl">
                            <p className="p-2">1. Community Driven.</p>
                            <p className="p-2">2. Realistic Roadmap.</p>
                            <p className="p-2">3. Accessible Mint Price.</p>
                            <p className="p-2">4. Innovative Generative Art.</p>
                            <p className="p-2">5. No Hype, Just Hard Work.</p>
                            <p className="p-2">6. Transparent & Doxxed Team.</p>
                        </div>
                    </div>
                </div>

                <div className="h-full order-1 md:order-2  col-span-5">
                    <div className="h-full bg-cloverDarkGreen bg-opacity-40 border-dashed border-8 border-cloverBorder rounded-lg m-0 p-8 mx-auto">
                        <div className="h-full text-center flex flex-col items-center md:flex-row">

                            <div className="w-full md:w-2/5 md:p-4">

                                <div className="grid place-items-center gap-0 grid-cols-1 divide-y-4 divide-green">

                                    <div className="py-4 w-full">

                                        <div className="grid gap-0 grid-cols-2 grid-rows-1 divide-x-4 divide-green">
                                            <div className="place-self-center">
                                                <p className="text-2xl md:text-2xl">
                                                    Minted:
                                                </p>
                                            </div>
                                            <div>
                                                <p className="place-self-center text-cloverWhite text-2xl md:text-2xl">
                                                    {loading
                                                        ?
                                                        <>
                                                            Loading...
                                                        </>
                                                        :
                                                        <>
                                                            {totalMinted}/{totalSupply}
                                                        </>
                                                    }
                                                </p>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="py-4 w-full">

                                        <div className="grid gap-0 grid-cols-2 grid-rows-1 divide-x-4 divide-green">
                                            <div className="place-self-center">
                                                <p className="text-2xl md:text-2xl">
                                                    Price
                                                </p>
                                            </div>
                                            <div>
                                                <p className="place-self-center text-cloverWhite text-2xl md:text-2xl">


                                                    {loading
                                                        ?
                                                        <>
                                                            Loading...
                                                        </>
                                                        :
                                                        <>
                                                            {mintPrice} ETH
                                                        </>
                                                    }

                                                </p>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="py-4 w-full">

                                        <div className="grid gap-0 grid-cols-2 grid-rows-1 divide-x-4 divide-green">
                                            <div className="place-self-center">
                                                <p className="capitalize text-2xl md:text-2xl">
                                                    Mint Per Wallet
                                                </p>
                                            </div>
                                            <div className="flex justify-center items-center h-full">
                                                <p className="p-4 capitalize place-self-center text-cloverWhite text-2xl md:text-2xl">
                                                    {loading
                                                        ?
                                                        <>
                                                            Loading...
                                                        </>
                                                        :
                                                        <>
                                                            <div className="">
                                                                {mintPerWalletLimit} Clovers
                                                            </div>

                                                        </>
                                                    }
                                                </p>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>

                            <div className="bg-cloverLightGreen bg-opacity-5 h-full w-full mt-4 md:mt-0 md:w-3/5">
                                <div
                                    className="h-full relative h-auto p-4 overflow-hidden bg-cloverDarkGreen bg-opacity-40 border-dashed border-8 border-cloverBorder rounded-lg shadow-2xl px-7">

                                    <div className="grid place-items-center gap-0 grid-cols-1">

                                        <div className="py-0 w-full">

                                            <div className="flex justify-center items-center h-full">
                                                <p className="p-4 place-self-center text-cloverWhite text-xl md:text-xl">
                                                    Enter The Amount Of Clover(s) You Would Like To Mint.
                                                </p>
                                            </div>


                                        </div>

                                        <div className="py-0 w-full">
                                            <div className="flex flex-row h-12 w-full rounded-lg relative bg-transparent my-4">
                                                <button onClick={decrementCounter} className="text-cloverLightGreen transition ease-in-out delay-50 duration-500 text-cloverLightGreen hover:bg-cloverLighterGreen bg-cloverDarkGreen h-full w-20 rounded-l cursor-pointer outline-none">
                                                    <span className="m-auto text-2xl">−</span>
                                                </button>
                                                <input type="number"
                                                       className="bg-transparent mx-4 h-12 border border-8 border-cloverBorder focus:outline-none text-center w-full text-md hover:text-cloverLightGreen focus:text-cloverLightGreen md:text-basecursor-default flex items-center text-cloverLightGreen outline-none"
                                                       name="custom-input-number"
                                                       value={mintQuantity}
                                                       placeholder="1"
                                                       type="number"
                                                       min="1"
                                                       max="10"
                                                       ref={mintQuantityInputRef}
                                                >

                                                </input>
                                                <button onClick={incrementCounter} className="text-cloverLightGreen transition ease-in-out delay-50 duration-500 text-cloverLightGreen hover:bg-cloverLighterGreen bg-cloverDarkGreen h-full w-20 rounded-r cursor-pointer outline-none">
                                                    <span className="m-auto text-2xl">+</span>
                                                </button>
                                            </div>
                                        </div>

                                        <div className="py-0 w-full">
                                            <h2 className="text-2xl m-4">Total: {MintSumTotal} ETH</h2>
                                        </div>

                                        <div className="py-0 w-full">
                                            <div className="block">

                                                {loading
                                                    ?
                                                    <>
                                                        <button
                                                            disabled={!hasWhitelist}
                                                            className="w-full px-3 py-4 border border-8 border-cloverBorder md:text-2xltext-cloverLightGreen transition ease-in-out delay-50 duration-500 text-cloverLightGreen hover:bg-cloverLighterGreen bg-cloverDarkGreen rounded-lg disabled"
                                                            onClick={mintNFTs}
                                                        >
                                                            <div
                                                                className="flex items-center justify-center">

                                                                <button
                                                                    type="button"
                                                                    className="inline-flex items-center px-4rounded-md text-cloverLightGreen transition ease-in-out duration-150"
                                                                    disabled="true">
                                                                    <svg
                                                                        className="animate-spin mr-3 h-6 w-6 text-cloverLightGreen"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        fill="none"
                                                                        viewBox="0 0 24 24">
                                                                        <circle
                                                                            className="opacity-25"
                                                                            cx="12"
                                                                            cy="12"
                                                                            r="10"
                                                                            stroke="currentColor"
                                                                            strokeWidth="4"/>
                                                                        <path
                                                                            className="opacity-75"
                                                                            fill="currentColor"
                                                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                                                                    </svg>

                                                                    <p className="text-xl">
                                                                        Loading
                                                                    </p>

                                                                </button>
                                                            </div>

                                                        </button>
                                                    </>
                                                    :
                                                    <>
                                                        {hasMetamask
                                                            ?
                                                            <div>
                                                                {hasCorrectNetwork
                                                                    ?
                                                                    <div>
                                                                        {connected
                                                                            ?
                                                                            <div>
                                                                                {mintActive
                                                                                    ?
                                                                                    <div>
                                                                                        {hasWhitelist
                                                                                            ?
                                                                                            <div>
                                                                                                <button
                                                                                                    disabled={!hasWhitelist}
                                                                                                    className="w-full px-3 py-4 border border-8 border-cloverBorder md:text-2xltext-cloverLightGreen transition ease-in-out delay-50 duration-500 text-cloverLightGreen hover:bg-cloverLighterGreen bg-cloverDarkGreen rounded-lg disabled"
                                                                                                    onClick={mintNFTs}
                                                                                                >
                                                                                                    <div
                                                                                                        className="flex items-center justify-center">

                                                                                                        {mintInProgress
                                                                                                            ?
                                                                                                            <>
                                                                                                                <button
                                                                                                                    type="button"
                                                                                                                    className="inline-flex items-center px-4rounded-md text-cloverLightGreen transition ease-in-out duration-150"
                                                                                                                    disabled={mintInProgress}>
                                                                                                                    <svg
                                                                                                                        className="animate-spin mr-3 h-6 w-6 text-cloverLightGreen"
                                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                                        fill="none"
                                                                                                                        viewBox="0 0 24 24">
                                                                                                                        <circle
                                                                                                                            className="opacity-25"
                                                                                                                            cx="12"
                                                                                                                            cy="12"
                                                                                                                            r="10"
                                                                                                                            stroke="currentColor"
                                                                                                                            strokeWidth="4"/>
                                                                                                                        <path
                                                                                                                            className="opacity-75"
                                                                                                                            fill="currentColor"
                                                                                                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                                                                                                                    </svg>

                                                                                                                    <p className="text-xl">
                                                                                                                        Minting
                                                                                                                    </p>

                                                                                                                </button>
                                                                                                            </>
                                                                                                            :

                                                                                                            <p className="capitalize text-xl">
                                                                                                                {currentMintType} Mint
                                                                                                            </p>

                                                                                                        }
                                                                                                    </div>

                                                                                                </button>
                                                                                            </div>
                                                                                            :
                                                                                            <div>
                                                                                                <button
                                                                                                    disabled="true"
                                                                                                    className="w-full px-3 py-4 border border-8 border-cloverBorder md:text-2xltext-cloverLightGreen bg-cloverDarkGreen rounded-lg disabled"
                                                                                                    onClick={mintNFTs}
                                                                                                >
                                                                                                    <p className="text-xl">
                                                                                                        Account Not Whitelisted
                                                                                                    </p>
                                                                                                </button>
                                                                                            </div>
                                                                                        }
                                                                                    </div>

                                                                                    :
                                                                                    <div>
                                                                                        <button
                                                                                            disabled={!mintActive}
                                                                                            className="w-full px-3 py-4 border border-8 border-cloverBorder md:text-2xltext-cloverLightGreen bg-cloverDarkGreen rounded-lg disabled"
                                                                                            onClick={mintNFTs}
                                                                                        >
                                                                                            <p className="text-xl">
                                                                                                Minting Not Active
                                                                                            </p>
                                                                                        </button>
                                                                                    </div>
                                                                                }
                                                                            </div>
                                                                            :
                                                                            <div>
                                                                                <button
                                                                                    className="w-full px-3 py-4 border border-8 border-cloverBorder md:text-2xltext-cloverLightGreen bg-cloverDarkGreen rounded-lg disabled"
                                                                                    onClick={requestConnection}
                                                                                >
                                                                                    <p className="text-xl">
                                                                                        Connect Wallet
                                                                                    </p>
                                                                                </button>

                                                                            </div>
                                                                        }
                                                                    </div>
                                                                    :
                                                                    <div>

                                                                        <button
                                                                            className="w-full px-3 py-4 border border-8 border-cloverBorder md:text-2xltext-cloverLightGreen bg-cloverDarkGreen rounded-lg disabled"
                                                                            onClick={switchToCorrectNetwork}
                                                                        >
                                                                            <p className="text-xl">
                                                                                Switch Networks
                                                                            </p>
                                                                        </button>

                                                                    </div>
                                                                }
                                                            </div>
                                                            :
                                                            <div>
                                                                <button
                                                                    className="w-full px-3 py-4 border border-8 border-cloverBorder md:text-2xltext-cloverLightGreen bg-cloverDarkGreen rounded-lg disabled"
                                                                    onClick={installMetamask}
                                                                >
                                                                    <p className="text-xl">
                                                                        Install Metamask
                                                                    </p>
                                                                </button>
                                                            </div>
                                                        }
                                                    </>

                                                }

                                            </div>
                                        </div>

                                    </div>









                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

            <Transition
                show={showPopup}
                enter="transition-opacity duration-500"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-500"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                {/* className={`banner large ${active ? "active" : ""} ${ disabled ? "disabled" : "" }`} */}
                {/* cloverLightRed */}
                <div className="modal bg-opacity-50 fixed w-full h-full top-0 left-0 flex items-center justify-center z-50">
                    <div className={`modal-overlay absolute w-full h-full ${popupIsError ? "bg-cloverLightRed opacity-50" : "bg-cloverDarkGreen opacity-75"}`}/>

                    <div className={`modal-container bg-opacity-50 w-11/12 md:max-w-md mx-auto rounded shadow-lg z-40 overflow-y-auto ${popupIsError ? "bg-cloverLightRed" : "bg-cloverDarkGreen"}`}>

                        <div className={`modal-content border-dashed border-4 py-4 text-left px-6 bg-cloverDarkGreen ${popupIsError ? "border-cloverWhite bg-opacity-30" : "bg-opacity-80 border-cloverBorder"}`}>

                            <p className="text-center items-center text-2xl p-4 underline">

                                <i className={`fa-2xl ${popupIsError ? "fa-solid fa-circle-exclamation text-cloverWhite" : "fa-solid fa-circle-check text-cloverLightGreen"}`}>

                                </i>
                            </p>

                            <p className={`text-center items-center text-3xl pt-2 underline ${popupIsError ? "text-cloverWhite" : "text-cloverLightGreen"}`}>{popupTitle}</p>

                            <p className={`text-center items-center text-xl py-2 ${popupIsError ? "text-cloverWhite" : "text-cloverLightGreen"}`}>{popupMessage}</p>

                            {mintResult && (

                                <ol className={`text-center items-center text-sm ${popupIsError ? "text-cloverWhite" : "text-cloverLightGreen"}`}>
                                    {
                                        mintResult.map(token =>
                                            <li key={token.tokenId}>
                                                <p className="py-2 text-cloverLightGreen text-sm text-cloverLightGreen">
                                                    - [Clover #{token.tokenId}] View On <a target="_blank" className="text-cloverWhite underline underline-offset-1" rel="noopener noreferrer" href={token.links.opensea}>OpenSea</a> or <a target="_blank" className="text-cloverWhite underline underline-offset-1" rel="noopener noreferrer" href={token.links.rarible}> Rarible</a>

                                                </p>
                                            </li>
                                        )
                                    }
                                </ol>

                            )}

                            {/*  */}


                            <div className={`text-center items-center pt-2 ${popupIsError ? "text-cloverWhite" : "text-cloverLightGreen"}`}>
                                <button type="button" onClick={closePopup}
                                        className={`transition ease-in-out delay-50 duration-500 text-center border-2 items-center px-8 py-4 rounded-lg  ${popupIsError ? "text-cloverWhite border-cloverWhite bg-cloverDarkRed hover:bg-cloverRedHover" : "text-cloverLightGreen border-cloverBorder bg-cloverDarkGreen hover:bg-cloverHover"}`}>OK</button>
                            </div>

                        </div>
                    </div>
                </div>
            </Transition>

        </>
    )
}