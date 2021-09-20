import Head from 'next/head'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Forms from '../components/Forms'
import Roadmap from '../components/Roadmap'
import FAQs from '../components/FAQs'
import Ability from '../components/Collection'
import Team from '../components/Team'
import Footer from '../components/Footer'
import Story from '../components/Story'
import Mint from '../components/Mint'
import MintCountdown from '../components/MintCountdown'
import React, { useRef, useEffect, useState } from 'react'
import moment from 'moment';

import { ethers } from 'ethers'
import { hasEthereum, requestAccount } from '../utils/ethereum'
import { Transition } from "@headlessui/react";
import Trailer from "../components/Trailer";

export default function Home() {

    // Env Vars
    const metamaskURL = process.env.NEXT_PUBLIC_METAMASK_LINK;
    const discordURL = process.env.NEXT_PUBLIC_DISCORD_LINK;
    const twitterURL = process.env.NEXT_PUBLIC_TWITTER_LINK;
    const openseaURL = process.env.NEXT_PUBLIC_OPENSEA_LINK;

    // Global Show Mint
    const globalShowMint = (process.env.NEXT_PUBLIC_SHOW_MINT === 'true');

    // Page State
    const [siteIsLoading, setSiteIsLoading] = useState(false);
    const [loading, setLoading] = useState(true);

    // Wallet State Vars
    const [connected, setConnected] = useState(false);
    const [hasMetamask, setHasMetamask] = useState(false);
    const [walletText, setWalletText] = useState('Connect Wallet');
    const [hasCorrectNetwork, setHasCorrectNetwork] = useState(false);

    // Popup State
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('enter the amount of Clover(s) you would like to mint.');
    const [popupTitle, setPopupTitle] = useState('Clover');
    const [popupIsError, setPopupIsError] = useState(false);

    // Mint State
    const [mintResult, setMintResult] = useState([]);

    // State Functions
    const updateHasMetamaskState = (state) => {
        setHasMetamask(state);
    };
    const updateLoadingState = (state) => {
        setLoading(state);
    };
    const updateConnectedState = (state) => {
        setConnected(state);
    };
    const updateWalletTextState = (state) => {
        setWalletText(state);
    };
    const updateHasCorrectNetworkState = (state) => {
        setHasCorrectNetwork(state);
    };

    const updateShowPopupState = (state) => {
        setShowPopup(state);
    };
    const updateSetPopupTitle = (state) => {
        setPopupTitle(state);
    };
    const updateSetPopupMessage = (state) => {
        setPopupMessage(state);
    };
    const updateSetPopupIsError = (state) => {
        setPopupIsError(state);
    };

    const updateMintResultState = (state) => {
        setMintResult(state);
    };

    // Close The Mint Popup
    function closePopup() {
        setShowPopup(false);
    }

    // Open The Modal
    function openPopup(isError, popupTitle, popupMessage) {
        updateSetPopupTitle(popupTitle);
        updateSetPopupIsError(isError);
        updateSetPopupMessage(popupMessage);
        updateShowPopupState(true);

    }

    // Scroll Vars
    const scrollLimit = 300;
    const [scrollToTopBtnVisible, setScrollToTopBtnVisible] = useState(false);

    // Mint Date Vars
    const checkPrivateMintTimeInterval = useRef();
    const checkPublicMintTimeInterval = useRef();
    const [mintDatePassed, setMintDatePassed] = useState(false);
    const [currentMintType, setCurrentMintType] = useState(null);
    const [countdownMessage, setCountdownMessage] = useState("");
    const preSaleMintDate = process.env.NEXT_PUBLIC_WHITELIST_MINT_DATE;
    const publicSaleMintDate = process.env.NEXT_PUBLIC_PUBLIC_MINT_DATE;

    // Mint Date Watchers
    const watchPreMintTime = (whitelistTime) => {

        const time = Date.parse(whitelistTime) - Date.parse(new Date());
        if (time < 0) {
            setMintDatePassed(true);
            clearInterval(checkPrivateMintTimeInterval.current);
            const timeLeftForPublicMint = Date.parse(publicSaleMintDate) - Date.parse(new Date());
            if (timeLeftForPublicMint <= 0) {
                setCountdownMessage("");
                setCurrentMintType("public");
            } else {

                let humanDate = createReadableDateTime(publicSaleMintDate);
                setCountdownMessage("Public Mint Begins  " + humanDate);



                setCurrentMintType("whitelist");
                checkPublicMintTimeInterval.current = setInterval(() => watchPublicMintTime(publicSaleMintDate), 1000);
            }


        } else {
            setMintDatePassed(false)

        }
    };

    const watchPublicMintTime = (publicTime) => {

        const time = Date.parse(publicTime) - Date.parse(new Date());

        if (time <= 0) {
            setCountdownMessage("");
            setCurrentMintType("public");
            clearInterval(checkPublicMintTimeInterval.current);

        }
    };

    // Scroll Helpers
    const toggleScrollToTopBtnVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > scrollLimit) {
            setScrollToTopBtnVisible(true)

        }
        else if (scrolled <= scrollLimit) {
            setScrollToTopBtnVisible(false)
        }

    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // Start The Data Watcher
    function initMintDataWatcher() {
        const timeLeft = Date.parse(preSaleMintDate) - Date.parse(new Date());

        checkPrivateMintTimeInterval.current = setInterval(() => watchPreMintTime(preSaleMintDate), 1000);

        if (timeLeft < 0) {
            setMintDatePassed(true);

            // Check if we are in Public Mint
            const timeLeftForPublicMint = Date.parse(publicSaleMintDate) - Date.parse(new Date());

            if (timeLeftForPublicMint <= 0) {
                setCountdownMessage("");
                setCurrentMintType("public");

            } else {

                let humanDate = createReadableDateTime(preSaleMintDate);
                setCountdownMessage("Whitelist Mint Begins  " + humanDate);

                setCurrentMintType("whitelist");

            }

        } else {

            setMintDatePassed(false);

            let humanDate = createReadableDateTime(preSaleMintDate);
            setCountdownMessage("Whitelist Mint Begins  " + humanDate);
        }
    }

    function createReadableDateTime(dateString) {
        const momentDate = moment(dateString, 'MMM DD, YYYY, h:mm a');

        return moment(momentDate).format('[[]DD/MM/YYYY [at] h:mma[]]');
    }

    // Scroll Up Toggle
    function initScrollUpToggle() {
        window.addEventListener('scroll', toggleScrollToTopBtnVisible);
    }

    // Wallet Helpers
    function generateShortWalletAddress(address) {
        return address.substring(0, 4) + "..." + address.substring(address.length - 8);
    }

    //////////////////////////////////////////////
    // Web 3 Listeners
    //////////////////////////////////////////////
    // Listen to the account in Metamask
    async function listenToMetamaskAccount() {
        if (!hasEthereum()) {
            updateWalletTextState('Install MetaMask');
            updateHasMetamaskState(false);
            updateLoadingState(false);
            return
        } else {
            updateHasMetamaskState(true);
        }
        window.ethereum.on('accountsChanged', async function (accounts) {
            if (accounts && accounts[0]) {
                updateConnectedState(true);
                const msg = generateShortWalletAddress(accounts[0]);
                updateWalletTextState(msg);
            } else {
                updateConnectedState(false);
                updateWalletTextState('Connect Wallet');
            }
        })
    }

    // Init Functions
    async function checkNetwork() {
        if (!hasEthereum()) {
            setWalletText('Install MetaMask');
            updateHasMetamaskState(false);
            updateLoadingState(false);
            return
        } else {
            updateHasMetamaskState(true);
        }

        const provider = new ethers.providers.Web3Provider(window.ethereum);

        provider.getNetwork().then((chain) => {

            let NETWORK = process.env.NEXT_PUBLIC_NETWORK;
            let CHAIN_ID = process.env.NEXT_PUBLIC_CHAIN_ID;

            let chainName = chain.name;

            let chainID = (chain.chainId).toString();

            if (chainName === NETWORK && chainID === CHAIN_ID) {
                updateHasCorrectNetworkState(true);

                listenToMetamaskAccount()

            } else {
                updateHasCorrectNetworkState(false);
            }
        })

    }

    // Watch our Metamask.
    async function reloadOnAccountChange() {
        if (!hasEthereum()) {
            setHasMetamask(false);
            setLoading(false);
        } else {
            setHasMetamask(true);
            window.ethereum.on('accountsChanged', async function (accounts) {
                window.location.reload();
                if (accounts && accounts[0]) {
                    setConnected(true);
                } else {
                    setConnected(false);
                }
            })
        }


    }

    // Reload on network change.
    async function reloadOnNetworkChange() {
        if (!hasEthereum()) {
            setHasMetamask(false);
            setLoading(false);
        } else {
            setHasMetamask(true);
            window.ethereum.on('chainChanged', (_chainId) => {
                window.location.reload();
            });
        }

    }

    // Request connection to wallet
    async function requestConnection() {
        try {
            await requestAccount();
            updateConnectedState(true);
        } catch (error) {
            console.error(error.message);
        }
    }

    // Set address of connected wallet
    async function setConnectedAccount() {
        try {
            if (!hasEthereum()) {
                updateWalletTextState('Install MetaMask');
                updateHasMetamaskState(false);
                updateLoadingState(false);
                return
            } else {
                updateHasMetamaskState(true);
            }

            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const address = await signer.getAddress();

            if (address) {
                updateConnectedState(true);
                const msg = generateShortWalletAddress(address);
                updateWalletTextState(msg);
            }
        } catch {
            updateWalletTextState('Connect Wallet');
        }
    }

    // Function that we can use to redirect the user to install Metamask
    function installMetamask() {
        const win = window.open(metamaskURL, '_blank');
        win.focus();
    }

    // Open Opensea URL
    function openOpensea() {
        const win = window.open(openseaURL, '_blank');
        win.focus();
    }

    function openTwitter() {
        const win = window.open(twitterURL, '_blank');
        win.focus();
    }

    function openDiscord() {
        const win = window.open(discordURL, '_blank');
        win.focus();
    }

    // Fetch the current connected account
    async function fetchConnectedAccount() {
        if (!hasEthereum()) {
            updateWalletTextState('Install MetaMask');
            updateHasMetamaskState(false);
            updateLoadingState(false);
            return
        } else {
            updateHasMetamaskState(true);
        }

        switchToCorrectNetwork();
        updateLoadingState(false)
    }

    // Set address of connected wallet
    async function switchToCorrectNetwork() {
        try {
            let CHAIN_ID = process.env.NEXT_PUBLIC_CHAIN_ID;

            await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: ("0x" + CHAIN_ID) }],
            });
        } catch (switchError) {
            return true;
        }
    }

    // Handle Connect Wallet click
    async function handleConnectWallet() {
        updateLoadingState(true);

        if (!hasEthereum()) {
            updateWalletTextState('Install MetaMask');
            updateHasMetamaskState(false);
            updateLoadingState(false);
            return
        } else {
            updateHasMetamaskState(true);
        }

        await requestConnection();
        await setConnectedAccount();

        updateLoadingState(false);
    }

    // On Load
    useEffect(() => {
        reloadOnAccountChange();
        reloadOnNetworkChange();
        checkNetwork();
        listenToMetamaskAccount();
        setConnectedAccount();
        initScrollUpToggle();
        initMintDataWatcher();
        watchPreMintTime(preSaleMintDate);
    }, []);

    return (

        <div className="">

            <Head>
                <title>Clovers</title>
                <meta name="description" content="Mint an NFT, or a number of NFTs, from the client-side." />
                <link rel="icon" href="favicon.ico" />
            </Head>

            {
                siteIsLoading
                ?
                    <>
                        <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-cloverDarkGreen opacity-100 flex flex-col items-center justify-center">
                            <div className="loader ease-linear rounded-full border-4 border-t-4 border-cloverLighterGreen h-12 w-12 mb-4"/>
                            <h2 className="text-center text-white text-xl">Loading...</h2>
                        </div>
                    </>
                :
                    <>
                        <div className="">

                            <div className="grid grid-cols-1 divide-y-4 divide-green">

                                <div className="bg-repeat bg-blend-overlay binary-bg">
                                    <section className="relative h-screen px-0 pb-0 antialiased">

                                        <div className="h-screen flex flex-col">
                                            <div className="">
                                                <Nav
                                                    globalShowMint={globalShowMint}
                                                    connected={connected} updateConnectedState={updateConnectedState}
                                                    loading={loading} updateLoadingState={updateLoadingState}
                                                    hasMetamask={hasMetamask}
                                                    updateHasMetamaskState={updateHasMetamaskState}
                                                    walletText={walletText}
                                                    updateWalletTextState={updateWalletTextState}
                                                    hasCorrectNetwork={hasCorrectNetwork}
                                                    updateHasCorrectNetworkState={updateHasCorrectNetworkState}
                                                    switchToCorrectNetwork={switchToCorrectNetwork}
                                                    handleConnectWallet={handleConnectWallet}
                                                    installMetamask={installMetamask}
                                                    fetchConnectedAccount={fetchConnectedAccount}
                                                />
                                            </div>
                                            <div className="flex-1  mx-auto h-full">
                                                <Hero
                                                    openOpensea={openOpensea}
                                                    openDiscord={openDiscord}
                                                    openTwitter={openTwitter}
                                                />
                                            </div>
                                        </div>
                                    </section>
                                </div>

                                {/*<div>*/}
                                {/*    <section id="story" className="bg-repeat bg-blend-overlay book-bg">*/}
                                {/*        <div className="container mx-auto">*/}
                                {/*            <Trailer/>*/}
                                {/*        </div>*/}
                                {/*    </section>*/}
                                {/*</div>*/}

                                <div>
                                    <section id="story" className="bg-repeat bg-blend-overlay book-bg">
                                        <div className="container mx-auto">
                                            <Story/>
                                        </div>
                                    </section>
                                </div>

                                {globalShowMint
                                    ?
                                    <>
                                        {mintDatePassed
                                            ?
                                            <>
                                                <div>
                                                    <section id="mint" className="bg-repeat bg-blend-overlay eth-bg">
                                                        <div className="container mx-auto p-4">
                                                            <Mint
                                                                key="minter"
                                                                openPopup={openPopup}
                                                                globalShowMint={globalShowMint}
                                                                currentMintType={currentMintType}
                                                                countdownMessage={countdownMessage}
                                                                preSaleMintDate={publicSaleMintDate}
                                                                connected={connected}
                                                                updateMintResultState={updateMintResultState}
                                                                updateConnectedState={updateConnectedState}
                                                                loading={loading}
                                                                updateLoadingState={updateLoadingState}
                                                                hasMetamask={hasMetamask}
                                                                updateHasMetamaskState={updateHasMetamaskState}
                                                                walletText={walletText}
                                                                updateWalletTextState={updateWalletTextState}
                                                                hasCorrectNetwork={hasCorrectNetwork}
                                                                updateHasCorrectNetworkState={updateHasCorrectNetworkState}
                                                                switchToCorrectNetwork={switchToCorrectNetwork}
                                                                handleConnectWallet={handleConnectWallet}
                                                                installMetamask={installMetamask}
                                                                fetchConnectedAccount={fetchConnectedAccount}
                                                                requestConnection={requestConnection}
                                                            />
                                                            {
                                                                currentMintType === "whitelist"
                                                                    ?
                                                                    <>
                                                                        <MintCountdown
                                                                            globalShowMint={globalShowMint}
                                                                            countdownMessage={countdownMessage}
                                                                            preSaleMintDate={publicSaleMintDate}
                                                                            connected={connected}
                                                                            updateConnectedState={updateConnectedState}
                                                                            loading={loading}
                                                                            updateLoadingState={updateLoadingState}
                                                                            hasMetamask={hasMetamask}
                                                                            updateHasMetamaskState={updateHasMetamaskState}
                                                                            walletText={walletText}
                                                                            updateWalletTextState={updateWalletTextState}
                                                                            hasCorrectNetwork={hasCorrectNetwork}
                                                                            updateHasCorrectNetworkState={updateHasCorrectNetworkState}
                                                                            switchToCorrectNetwork={switchToCorrectNetwork}
                                                                            handleConnectWallet={handleConnectWallet}
                                                                            installMetamask={installMetamask}
                                                                            fetchConnectedAccount={fetchConnectedAccount}
                                                                        />
                                                                    </>
                                                                    :
                                                                    <>
                                                                    </>
                                                            }
                                                        </div>
                                                    </section>
                                                </div>
                                            </>
                                            :
                                            <>
                                                <section id="mint" className="bg-repeat bg-blend-overlay eth-bg">
                                                    <div className="container mx-auto p-4">
                                                        <h1 className="mb-0 pt-4 pb-2 md:text-xl lg:text-xl leading-0 tracking-tight text-center text-cloverLightGreen md:text-4xl lg:md:text-xl lg:text-xl">
                                                            <span
                                                                className="text-3xl leading-tight border-0 border-gray-300 lg:text-5xl md:text-5xl sm:text-1xl">[ Mint ]</span>
                                                        </h1>
                                                        <MintCountdown connected={connected} hasMetamask={hasMetamask}
                                                                       countdownMessage={countdownMessage}
                                                                       preSaleMintDate={preSaleMintDate}/>
                                                    </div>
                                                </section>
                                            </>
                                        }
                                    </>
                                    :
                                    <>
                                    </>
                                }

                                <div>
                                    <section id="ability" className="bg-repeat bg-blend-overlay snowflake-bg">
                                        <div className="container mx-auto">
                                            <Ability/>
                                        </div>
                                    </section>
                                </div>

                                <div>
                                    <section id="forms" className="bg-repeat bg-blend-overlay face-bg">
                                        <div className="container mx-auto">
                                            <Forms/>
                                        </div>
                                    </section>
                                </div>

                                {/*<div>*/}
                                {/*    <section id="roadmap" className="bg-repeat bg-blend-overlay road-bg">*/}
                                {/*        <div className="container mx-auto">*/}
                                {/*            <Roadmap/>*/}
                                {/*        </div>*/}
                                {/*    </section>*/}
                                {/*</div>*/}

                                <div>
                                    <section id="faq" className="bg-repeat bg-blend-overlay question-bg">
                                        <div className="container mx-auto p-4">
                                            <FAQs/>
                                        </div>
                                    </section>
                                </div>

                                <div>
                                    <section id="team" className="bg-repeat bg-blend-overlay bytes-bg">
                                        <div className="container mx-auto p-0">
                                            <Team/>
                                        </div>
                                    </section>
                                </div>

                                <section className="bg-repeat bg-blend-overlay shamrock-bg">
                                    <Footer
                                        openOpensea={openOpensea}
                                        openDiscord={openDiscord}
                                        openTwitter={openTwitter}
                                    />
                                </section>

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
                                <div
                                    className="modal bg-opacity-50 fixed w-full h-full top-0 left-0 flex items-center justify-center z-50">
                                    <div
                                        className={`modal-overlay absolute w-full h-full ${popupIsError ? "bg-cloverLightRed opacity-50" : "bg-cloverDarkGreen opacity-75"}`}/>

                                    <div
                                        className={`modal-container bg-opacity-50 w-11/12 md:max-w-md mx-auto rounded shadow-lg z-40 overflow-y-auto ${popupIsError ? "bg-cloverLightRed" : "bg-cloverDarkGreen"}`}>

                                        <div
                                            className={`modal-content border-dashed border-4 py-4 text-left px-6 bg-cloverDarkGreen ${popupIsError ? "border-cloverWhite bg-opacity-30" : "bg-opacity-80 border-cloverBorder"}`}>

                                            <p className="text-center items-center text-2xl p-4 underline">

                                                <i className={`fa-2xl ${popupIsError ? "fa-solid fa-circle-exclamation text-cloverWhite" : "fa-solid fa-circle-check text-cloverLightGreen"}`}>

                                                </i>
                                            </p>

                                            <p className={`text-center items-center text-3xl pt-2 underline ${popupIsError ? "text-cloverWhite" : "text-cloverLightGreen"}`}>{popupTitle}</p>

                                            <p className={`text-center items-center text-xl py-2 ${popupIsError ? "text-cloverWhite" : "text-cloverLightGreen"}`}>{popupMessage}</p>

                                            {!popupIsError && (

                                                <>
                                                    {mintResult && (

                                                        <ol className={`text-center items-center text-sm ${popupIsError ? "text-cloverWhite" : "text-cloverLightGreen"}`}>
                                                            {
                                                                mintResult.map(token =>
                                                                    <li key={token.tokenId}>
                                                                        <p className="py-2 text-cloverLightGreen text-sm text-cloverLightGreen">
                                                                            - [Clover #{token.tokenId}] View On <a
                                                                            target="_blank"
                                                                            className="text-cloverWhite underline underline-offset-1"
                                                                            rel="noopener noreferrer"
                                                                            href={token.links.opensea}>OpenSea</a> or <a
                                                                            target="_blank"
                                                                            className="text-cloverWhite underline underline-offset-1"
                                                                            rel="noopener noreferrer"
                                                                            href={token.links.rarible}> Rarible</a>

                                                                        </p>
                                                                    </li>
                                                                )
                                                            }
                                                        </ol>

                                                    )}
                                                </>

                                            )}


                                            <div
                                                className={`capitalize text-center items-center pt-2 ${popupIsError ? "text-cloverWhite" : "text-cloverLightGreen"}`}>
                                                <button type="button" onClick={closePopup}
                                                        className={`capitalize transition ease-in-out delay-50 duration-500 text-center border-2 items-center px-8 py-4 rounded-lg  ${popupIsError ? "text-cloverWhite border-cloverWhite bg-cloverDarkRed hover:bg-cloverRedHover" : "text-cloverLightGreen border-cloverBorder bg-cloverDarkGreen hover:bg-cloverHover"}`}>OK
                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </Transition>

                            <Transition
                                show={scrollToTopBtnVisible}
                                enter="transition-opacity duration-1000"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="transition-opacity duration-1000"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div
                                    className="z-40 opacity-95 fixed bottom-0 right-0 text-center p-2 md:lg:p-6 lg:p-6">
                                    <button onClick={scrollToTop}
                                            className="border-2 border-cloverLightGreen text-cloverLightGreen transition ease-in-out delay-50 duration-500 text-cloverLightGreen hover:bg-cloverLighterGreen bg-cloverDarkGreen rounded-full text-center h-16 w-16 md:h-20 lg:h-20 md:w-20 lg:w-20 lg:p-6 cursor-pointer">
                                        <i className="fa-solid fa-arrow-up fa-xl">

                                        </i>
                                    </button>
                                </div>
                            </Transition>

                        </div>
                    </>
            }

        </div>
    )
}
