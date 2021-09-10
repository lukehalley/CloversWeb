import React, {useEffect, useState, useRef} from 'react'
import { Transition } from "@headlessui/react";
import {Link} from 'react-scroll'


export default function Nav(
    {
        globalShowMint,
        connected,
        loading,
        hasMetamask,
        walletText,
        hasCorrectNetwork,
        switchToCorrectNetwork,
        handleConnectWallet,
        installMetamask,
        fetchConnectedAccount
    }) {

    // UI state
    const [isOpen, setIsOpen] = useState(false);

    // First load
    useEffect( function() {
        fetchConnectedAccount();
    });

    return (
        <>
            <nav className="">

                <div className="border-b-4 border-green bg-cloverHover bg-opacity-25 md:border-b-0 md:bg-transparent md:bg-opacity-0  mx-auto px-4 sm:px-6">

                    <div className="flex h-16 md:h-24 items-center">

                        {/*LOGO*/}
                        <div className="hidden md:block flex-none w-1/5">
                            <div className="flex justify-center items-center">
                                <div className="text-center">
                                    <span className="text-4xl md:text-xl px-2 md:text-2xl xl:text-3xl 2xl:text-4xl font-cloverLightGreen text-cloverLightGreen">
                                        <span className>[ Clovers. ] </span>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="hidden md:block flex-none w-3/5">
                            <div className="flex justify-center items-center">
                                <div className="text-center">
                                    <div className="hidden md:block">
                                        <div className="flex items-baseline space-x-8">
                                            
                                            <a className="text-1xl px-2 inline-block w-full p-0 font-medium text-left transition ease-in-out delay-50 duration-500 text-cloverDarkGreen hover:text-cloverLighterGreen md:w-auto md:px-0 md:mx-2 lg:mx-3 md:text-center">
                                                <Link to="story" spy={true} smooth={true}>[ Story ]</Link>
                                            </a>

                                            {
                                                globalShowMint
                                                ?
                                                    <>

                                                        <a className="text-1xl px-2 inline-block w-full p-0 font-medium text-left transition ease-in-out delay-50 duration-500 text-cloverDarkGreen hover:text-cloverLighterGreen md:w-auto md:px-0 md:mx-2 lg:mx-3 md:text-center">
                                                            <Link to="mint" spy={true} smooth={true}>[ Mint ]</Link>
                                                        </a>

                                                    </>
                                                :
                                                    <>
                                                    </>
                                            }

                                            <a className="text-1xl px-2 inline-block w-full p-0 font-medium text-left transition ease-in-out delay-50 duration-500 text-cloverDarkGreen hover:text-cloverLighterGreen md:w-auto md:px-0 md:mx-2 lg:mx-3 md:text-center">
                                                <Link to="ability" spy={true} smooth={true}>[ Ability ]</Link>
                                            </a>

                                            <a className="text-1xl px-2 inline-block w-full p-0 font-medium text-left transition ease-in-out delay-50 duration-500 text-cloverDarkGreen hover:text-cloverLighterGreen md:w-auto md:px-0 md:mx-2 lg:mx-3 md:text-center">
                                                <Link to="forms" spy={true} smooth={true}>[ Forms ]</Link>
                                            </a>

                                            {/*<a className="text-1xl px-2 inline-block w-full p-0 font-medium text-left transition ease-in-out delay-50 duration-500 text-cloverDarkGreen hover:text-cloverLighterGreen md:w-auto md:px-0 md:mx-2 lg:mx-3 md:text-center">*/}
                                            {/*    <Link to="roadmap" spy={true} smooth={true}>[ Roadmap ]</Link>*/}
                                            {/*</a>*/}

                                            <a className="text-1xl px-2 inline-block w-full p-0 font-medium text-left transition ease-in-out delay-50 duration-500 text-cloverDarkGreen hover:text-cloverLighterGreen md:w-auto md:px-0 md:mx-2 lg:mx-3 md:text-center">
                                                <Link to="faq" spy={true} smooth={true}>[ FAQ ]</Link>
                                            </a>

                                            <a className="text-1xl px-2 inline-block w-full p-0 font-medium text-left transition ease-in-out delay-50 duration-500 text-cloverDarkGreen hover:text-cloverLighterGreen md:w-auto md:px-0 md:mx-2 lg:mx-3 md:text-center">
                                                <Link to="team" spy={true} smooth={true}>[ Team ]</Link>
                                            </a>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* DESKTOP BAR */}

                        <div className="hidden md:block flex-none w-1/5">
                            <div className="flex justify-center items-center">
                                <div className="border-2 border-cloverLightGreen text-center rounded">
                                    {/*BUTTON*/}
                                    <div className="flex-none">

                                        {hasMetamask
                                            ?
                                            <>
                                                {hasCorrectNetwork
                                                    ?
                                                    <>
                                                        <button
                                                            className="bg-opacity-90 inline-flex shadow-lg items-center w-full px-6 py-3 text-sm font-medium text-cloverLightGreen bg-cloverDarkGreen md:px-3 md:w-auto lg:px-5 hover:bg-cloverDarkGreen"
                                                            onClick={handleConnectWallet}
                                                            disabled={connected}
                                                        >

                                                            {!loading
                                                                ?
                                                                <>
                                                                    {connected
                                                                        ?
                                                                        <span
                                                                            className="animate-pulse rounded-full h-2 w-2 block mr-2 bg-cloverLightGreen"
                                                                        />
                                                                        :
                                                                        <i className="fa-solid fa-wallet pr-2"/>
                                                                    }
                                                                    { walletText }
                                                                </>
                                                                :
                                                                <span>Connecting...</span>
                                                            }
                                                        </button>
                                                    </>
                                                    :
                                                    <>
                                                        <button
                                                            className="bg-opacity-90 inline-flex shadow-lg items-center w-full md:px-6 md:py-3 text-sm font-medium text-cloverLightGreen bg-cloverDarkGreen md:px-3 md:w-auto lg:px-5 hover:bg-cloverDarkGreen"
                                                            onClick={switchToCorrectNetwork}
                                                        >

                                                            {!loading
                                                                ?
                                                                <>
                                                                    <span className="animate-pulse rounded-full h-2 w-2 block mr-2 bg-cloverLightRed"/>
                                                                    Switch Network
                                                                </>
                                                                :
                                                                <span>Connecting...</span>
                                                            }
                                                        </button>
                                                    </>
                                                }
                                            </>
                                            :
                                            <>
                                                <button
                                                    className="bg-opacity-90 inline-flex shadow-lg items-center w-full md:px-6 md:py-3 text-sm font-medium text-cloverLightGreen bg-cloverDarkGreen md:px-3 md:w-auto lg:px-5 hover:bg-cloverDarkGreen"
                                                    onClick={installMetamask}
                                                >
                                                    <span className="p-1 md:p-0 animate-pulse rounded-full h-2 w-2 block mr-2 bg-cloverLightRed"/>
                                                    Install Metamask
                                                </button>
                                            </>
                                        }


                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* MOBILE BAR */}

                        {/*LOGO*/}
                        <div className="flex w-2/4 md:hidden items-center">
                            <div className="flex justify-center items-center">
                                <div className="text-center">
                                    <span className="text-2xl md:text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-cloverLightGreen text-cloverLightGreen">
                                        <span className>[ Clovers ] </span>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="px-6 flex w-1/4 md:hidden items-center">
                            <div className="flex justify-center items-center">
                                <div className="text-center">
                                    <div className="flex-none">

                                        {hasMetamask
                                            ?
                                            <>
                                                {hasCorrectNetwork
                                                    ?
                                                    <>
                                                        <button
                                                            className="border-2 border-cloverLightGreen bg-opacity-90 inline-flex shadow-lg items-center rounded-lg w-full p-2 text-sm font-medium text-cloverLightGreen bg-cloverDarkGreen md:px-3 md:w-auto lg:px-5 hover:bg-cloverDarkGreen"
                                                            onClick={handleConnectWallet}
                                                            disabled={connected}
                                                        >

                                                            {!loading
                                                                ?
                                                                <>
                                                                    {connected
                                                                        ?
                                                                        <>
                                                                <span
                                                                    className="animate-pulse p-1 rounded-full h-2 w-2 block mr-2 bg-cloverLightGreen"
                                                                />
                                                                            Connected
                                                                        </>
                                                                        :

                                                                        <>
                                                                            <i className="fa-solid fa-wallet pr-2"/>
                                                                            <p className="">Connect</p>

                                                                        </>
                                                                    }

                                                                </>
                                                                :
                                                                <span>Connecting...</span>
                                                            }
                                                        </button>
                                                    </>
                                                    :
                                                    <>
                                                        <button
                                                            className="border-2 border-cloverLightGreen bg-opacity-90 inline-flex shadow-lg items-center rounded-lg w-full p-2 text-sm font-medium text-cloverLightGreen bg-cloverDarkGreen md:px-3 md:w-auto lg:px-5 hover:bg-cloverDarkGreen"
                                                            onClick={switchToCorrectNetwork}
                                                        >

                                                            {!loading
                                                                ?
                                                                <>
                                                                    <span className="animate-pulse p-1 rounded-full h-2 w-2 block mr-2 bg-cloverLightRed"/>
                                                                    { "Switch" }
                                                                </>
                                                                :
                                                                <span>Switching...</span>
                                                            }
                                                        </button>
                                                    </>
                                                }
                                            </>
                                            :
                                            <>
                                                <button
                                                    className="border-2 border-cloverLightGreen bg-opacity-90 inline-flex shadow-lg items-center rounded-lg w-full py-1 px-2 text-sm font-medium text-cloverLightGreen bg-cloverDarkGreen md:px-3 md:w-auto lg:px-5 hover:bg-cloverDarkGreen"
                                                    onClick={installMetamask}
                                                >
                                                    <span className="animate-pulse p-1 rounded-full h-2 w-2 block mr-2 bg-cloverLightRed"/>
                                                    Install Metamask
                                                </button>
                                            </>
                                        }


                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex w-1/3 md:hidden items-right">

                            <div className="flex w-full justify-right items-right">
                                <div className="text-right w-full">
                                    <button
                                        onClick={() => setIsOpen(!isOpen)}
                                        type="button"
                                        className="inline-flex items-right justify-right p-0 rounded-md text-cloverLightGreen hover:text-cloverLightGreen"
                                        aria-controls="mobile-menu"
                                        aria-expanded="false"
                                    >
                                        {!isOpen ? (
                                            <svg
                                                className="block h-6 w-6"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M4 6h16M4 12h16M4 18h16"
                                                />
                                            </svg>
                                        ) : (
                                            <svg
                                                className="block h-6 w-6"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M6 18L18 6M6 6l12 12"
                                                />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>



                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="z-50 absolute bg-cloverDarkGreen bg-opacity-95 md:hidden border-b-4 border-green" id="mobile-menu">
                            <div ref={ref} className="px-2 py-2 space-y-1 sm:px-3">
                                <a className="text-xl px-2 inline-block w-full p-0 font-medium text-left text-cloverLightGreen md:w-auto md:px-0 md:mx-2 hover:text-cloverLightGreen lg:mx-3 md:text-center">
                                    <Link to="mint" spy={true} smooth={true}>[ mint ] </Link>
                                </a>

                                <a className="text-xl px-2 inline-block w-full p-0 font-medium text-left text-cloverLightGreen md:w-auto md:px-0 md:mx-2 hover:text-cloverLightGreen lg:mx-3 md:text-center">
                                    <Link to="story" spy={true} smooth={true}>[ story ] </Link>
                                </a>

                                <a className="text-xl px-2 inline-block w-full p-0 font-medium text-left text-cloverLightGreen md:w-auto md:px-0 md:mx-2 hover:text-cloverLightGreen lg:mx-3 md:text-center">
                                    <Link to="ability" spy={true} smooth={true}>[ ability ] </Link>
                                </a>

                                <a className="text-xl px-2 inline-block w-full p-0 font-medium text-left text-cloverLightGreen md:w-auto md:px-0 md:mx-2 hover:text-cloverLightGreen lg:mx-3 md:text-center">
                                    <Link to="forms" spy={true} smooth={true}>[ forms ] </Link>
                                </a>

                                {/*<a className="text-xl px-2 inline-block w-full p-0 font-medium text-left text-cloverLightGreen md:w-auto md:px-0 md:mx-2 hover:text-cloverLightGreen lg:mx-3 md:text-center">*/}
                                {/*    <Link to="roadmap" spy={true} smooth={true}>[ roadmap ] </Link>*/}
                                {/*</a>*/}

                                <a className="text-xl px-2 inline-block w-full p-0 font-medium text-left text-cloverLightGreen md:w-auto md:px-0 md:mx-2 hover:text-cloverLightGreen lg:mx-3 md:text-center">
                                    <Link to="faq" spy={true} smooth={true}>[ faq ] </Link>
                                </a>

                                <a className="text-xl px-2 inline-block w-full p-0 font-medium text-left text-cloverLightGreen md:w-auto md:px-0 md:mx-2 hover:text-cloverLightGreen lg:mx-3 md:text-center">
                                    <Link to="team" spy={true} smooth={true}>[ team ] </Link>
                                </a>
                            </div>
                        </div>
                    )}
                </Transition>
            </nav>
        </>
    )
}