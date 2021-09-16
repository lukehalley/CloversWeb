import React, {useRef, useState} from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// import required modules
import {Pagination, Navigation} from "swiper";
import {error} from "next/dist/build/output/log";

const {useEffect} = React;

export default function Slider() {

    return (
        <>

            <div className="">
                <h1 className="mb-0 pt-4 pb-2 md:text-xl lg:text-xl leading-0 tracking-tight text-center text-cloverLightGreen md:text-4xl lg:md:text-xl lg:text-xl">
                    <span className="text-3xl leading-tight border-0 border-gray-300 lg:text-5xl md:text-5xl sm:text-1xl">[ FAQ ]</span>
                </h1>

                <div
                    className="w-full mx-auto my-2 bg-cloverDarkGreen bg-opacity-40 border-dashed border-8 border-cloverBorder sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3border-dashed border-8 border-cloverBorder">
                    <h1 className="px-4 pt-4 text-2xl text-green text-center md:px-4 md:py-4 md:text-4xl">
                        What Is The Total Supply?</h1>
                    <p className="p-4 text-center text-base md:p-0 sm:text-lg md:text-normal">
                        A total of 4,000 unique Clovers will be available, split between the pre-sales and public
                        sale.
                        <br/><br/>
                        25 Clovers are reserved for the team with a portion allocated towards future events,
                        giveaways etc.
                    </p>
                </div>
                <div
                    className="w-full py-2 mx-auto m-6 bg-cloverDarkGreen bg-opacity-40 border-dashed border-8 border-cloverBorder sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3border-dashed border-8 border-cloverBorder">
                    <h3 className="px-4 pt-4 text-2xl text-green text-center md:px-4 md:py-4 md:text-4xl">
                        How Many Clovers Can I Buy Per Transaction?</h3>
                    <p className="p-4 text-center text-base md:p-0 sm:text-lg md:text-normal">
                        Up to 10 Clovers can be minted per transaction during the pre-sale.
                        <br/><br/>
                        There is no limit per wallet during the public mint.
                    </p>
                </div>
                <div
                    className="w-full py-2 mx-auto m-6 bg-cloverDarkGreen bg-opacity-40 border-dashed border-8 border-cloverBorder sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3border-dashed border-8 border-cloverBorder">
                    <h3 className="px-4 pt-4 text-2xl text-green text-center md:px-4 md:py-4 md:text-4xl">
                        When Will Clovers Launch?
                    </h3>
                    <p className="p-4 text-center text-base md:p-0 sm:text-lg md:text-normal">
                        Launch date to be confirmed.
                    </p>
                </div>

                <div
                    className="w-full py-2 mx-auto m-6 bg-cloverDarkGreen bg-opacity-40 border-dashed border-8 border-cloverBorder sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3border-dashed border-8 border-cloverBorder">
                    <h3 className="px-4 pt-4 text-2xl text-green text-center md:px-4 md:py-4 md:text-4xl">
                        What Is The Price Of Minting A Clover?
                    </h3>
                    <p className="p-4 text-center text-base md:p-0 sm:text-lg md:text-normal">
                        The price of a Clover from the collection is 0.025 ETH.
                    </p>
                </div>

                <div
                    className="w-full py-2 mx-auto m-6 bg-cloverDarkGreen bg-opacity-40 border-dashed border-8 border-cloverBorder sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3border-dashed border-8 border-cloverBorder">
                    <h3 className="px-4 pt-4 text-2xl text-green text-center md:px-4 md:py-4 md:text-4xl">
                        Where Is The Roadmap?
                    </h3>
                    <p className="p-4 text-center text-base md:p-0 sm:text-lg md:text-normal">
                        From our experiences, we’ve found that roadmaps tend to lead to getting the community's hopes up and expectations are not always met.
                        <br/><br/>
                        We feel the best way we can benefit the community of a project is to incorporate them in any decisions we make regarding the direction of our project.
                    </p>
                </div>

                <div
                    className="w-full py-0 mx-auto m-0 bg-cloverDarkGreen bg-opacity-40 border-dashed border-8 border-cloverBorder sm:px-8 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3border-dashed border-8 border-cloverBorder">
                    <h3 className="px-4 pt-4 text-2xl text-green text-center md:px-4 md:py-4 md:text-4xl">
                        Can I Ask My Own Question, Where Can I Ask It?
                    </h3>
                    <p className="p-4 text-center text-base md:p-0 sm:text-lg md:text-normal">
                        Of course - come join us in the Discord.
                    </p>
                </div>
            </div>
        </>
    )
}