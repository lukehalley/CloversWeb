import {Transition} from "@headlessui/react";
import React, {useEffect, useState} from "react";
import {Link} from 'react-scroll'

export default function Hero(
    {
        openOpensea,
        openDiscord,
        openTwitter,
    }
) {

    const [scrollDownBtnVisible, setScrollDownBtnVisible] = useState(true);

    const scrollLimit = 300;

    // // Function that we can use to redirect the user to install Metamask
    // function openURL(url) {
    //     var win = window.open(url, '_blank');
    //     win.focus();
    // }

    // Function that we can use to redirect the user to install Metamask
    function buyOnOpensea() {
        console.log("beep")
        var win = window.open(openseaURL, '_blank');
        win.focus();
    }

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled < scrollLimit){
            setScrollDownBtnVisible(true)

        }
        else if (scrolled >= scrollLimit){
            setScrollDownBtnVisible(false)
        }

    };

    useEffect( function() {
        window.addEventListener('scroll', toggleVisible);
    });

    return (
        <>

            <div className="h-full grid grid-rows-8 grid-cols-1 gap-4">
                <div className="z-10 row-span-5">
                    <div className="flex h-full">
                        <div className="m-auto">
                            <h1 className="text-cloverLightGreen px-2 text-4xl leading-10 tracking-tight text-center text-cloverLightGreen md:text-6xl lg:text-7xl">
                                <span className="text-cloverLightGreen m-0 text-center leading-tight border-0 border-gray-300 lg:text-7xl md:text-5xl sm:text-1xl">They're Hiding.</span>
                            </h1>
                            <h2 className="px-2 leading-10 tracking-tight text-center text-cloverLightGreen md:text-center sm:leading-none md:text-6xl lg:text-7xl">
                                <span className="m-0 text-cloverLightGreen text-xl leading-tight border-0 border-gray-300 lg:text-4xl md:text-2xl">Which One Will You Find?</span>
                            </h2>
                            <div
                                className="capitalize px-4 text-center mx-auto mt-2 text-cloverLightGreen md:max-w-lg lg:text-lg">
                                A collection of 10,000 unique beings
                            </div>
                            <div
                                className="capitalize px-4 text-center mx-auto mt-0 text-cloverLightGreen md:max-w-lg lg:text-lg">
                                hiding from the a dark spirit.
                            </div>

                            <div className="flex flex-col items-center mt-4 text-center">

                                <div className="flex flex-row">

                                    <div>
                                        <button
                                            onClick={openDiscord}
                                            className="border-2 border-cloverLightGreen bg-opacity-90 bg-cloverDarkGreen shadow-lg transition ease-in-out delay-50 duration-500 text-cloverLightGreen hover:bg-cloverLighterGreen py-2 px-4 mx-2 rounded inline-flex items-center">
                                            <i  className="fa-brands fa-discord pr-2">
                                            </i>
                                            <span>Discord</span>
                                        </button>
                                    </div>
                                    <div>
                                        <button
                                            onClick={openTwitter}
                                            className="border-2 border-cloverLightGreen bg-opacity-90 bg-cloverDarkGreen shadow-lg transition ease-in-out delay-50 duration-500 text-cloverLightGreen hover:bg-cloverLighterGreen py-2 px-4 mx-2 rounded inline-flex items-center">
                                            <i className="fa-brands fa-twitter pr-2"/>
                                            <span>Twitter</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col items-center mt-4 text-center">

                                <div className="flex flex-row">

                                    <div>
                                        <button
                                            onClick={openOpensea}
                                            className="border-2 border-cloverLightGreen bg-opacity-90 bg-cloverDarkGreen shadow-lg transition ease-in-out delay-50 duration-500 text-cloverLightGreen hover:bg-cloverLighterGreen py-2 px-4 mx-2 rounded inline-flex items-center">
                                            <i className="fa-solid fa-sailboat pr-2"/>
                                            <span>Opensea</span>
                                        </button>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                <div className="row-span-3">
                    <div className="z-0 absolute inset-x-0 bottom-0">
                        <div>
                            {/*<img className="ml-2 h-64 md:h-96 lg:h-136 xl:h-144 2xl:h-152 sticky bottom-0 left-0" src={"images/single/leprechaun.png"} alt="Leppy"/>*/}
                            {/*<img className="ml-2 h-64 md:h-96 lg:h-136 xl:h-144 2xl:h-152 sticky bottom-0 left-0" src={"gif-opt/animation_leprechaun_1000x1000.gif"} alt="Leppy"/>*/}
                            <img className="ml-2 h-64 md:h-96 lg:h-136 xl:h-144 2xl:h-152 sticky bottom-0 left-0" src={"gif-opt/hero.gif"} alt="Leppy"/>

                            <Transition
                                show={scrollDownBtnVisible}
                                enter="transition-opacity duration-1000"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="transition-opacity duration-1000"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="invisible md:visible absolute grid place-items-center w-screen">
                                    <div className="absolute bottom-0 flex pb-4 text-center">
                                        <Link to="story" spy={true} smooth={true}>
                                            <button className="animate-bounce border-2 border-cloverLightGreen transition ease-in-out delay-50 duration-500 text-cloverLightGreen hover:bg-cloverLighterGreen bg-cloverDarkGreen rounded-full text-center h-16 w-16 md:h-20 md:w-20 lg:p-6 cursor-pointer">
                                                <i className="fa-solid fa-arrow-down fa-xl">
                                                </i>
                                            </button>
                                        </Link>

                                    </div>
                                </div>
                            </Transition>





                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}