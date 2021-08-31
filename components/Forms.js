import React, {useRef, useState} from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// import required modules
import {Pagination, Navigation} from "swiper";
import {error} from "next/dist/build/output/log";

const {useEffect} = React;


export default function Forms() {

    function percentage(num, per) {
        return (num / 100) * per;
    }

    function isWhatPercentOf(numA, numB) {
        return (numA / numB) * 100;
    }

    const collectionSize = 10000;
    const commonPercentage = 60;
    const specialPercentage = 25;
    const rarePercentage = 10;
    const legendaryPercentage = 5;

    var commonImgs = ["basketballer", "farmer", "mexican", "army", "explorer", "police", "cowboy", "pirate", "king", "warrior", "leprechaun", "dude"];
    var specialImgs = ["zombie", "wizard", "caveman", "mushroom", "eskimo"];
    var rareImgs = ["mummy", "explosion", "snake", "robot", "alien"];
    var legendaryImgs = ["ghost", "sun", "devil", "angel", "rainbow"];

    var commonNumInCollection = percentage(commonPercentage, collectionSize);
    var commonRarity = commonPercentage;
    var commonvariations = commonImgs.length;

    var specialNumInCollection = percentage(specialPercentage, collectionSize);
    var specialRarity = specialPercentage;
    var specialvariations = specialImgs.length;

    var rareNumInCollection = percentage(rarePercentage, collectionSize);
    var rareRarity = rarePercentage;
    var rarevariations = rareImgs.length;

    var legendaryNumInCollection = percentage(legendaryPercentage, collectionSize);
    var legendaryRarity = legendaryPercentage;
    var legendaryvariations = legendaryImgs.length;

    const [currentCommonIndex, setCurrentCommonIndex] = useState(1);
    const [currentSpecialIndex, setCurrentSpecialIndex] = useState(1);
    const [currentRareIndex, setCurrentRareIndex] = useState(1);
    const [currentLegendaryIndex, setCurrentLegendaryIndex] = useState(1);
    
    const [currentCommonImg, setCurrentCommonImg] = useState(null);
    const [currentSpecialImg, setCurrentSpecialCommon] = useState(null);
    const [currentRareImg, setCurrentRareImg] = useState(null);
    const [currentLegendaryImg, setCurrentLegendaryImg] = useState(null);

    function onNextImg(val, cat, index) {
        switch (cat) {
            case "Common":
                setCurrentCommonImg(val);
                setCurrentCommonIndex(index + 1);
                break;
            case "special":
                setCurrentSpecialCommon(val);
                setCurrentSpecialIndex(index + 1);
                break;
            case "rare":
                setCurrentRareImg(val);
                setCurrentRareIndex(index + 1);
                break;
            case "legendary":
                setCurrentLegendaryImg(val);
                setCurrentLegendaryIndex(index + 1);
                break;
            default:
                throw "Cannot set slider title to" + val + "with cat " + cat + "!";
        }
    }



    var imgDict = {
        "Common": commonImgs,
        "special": specialImgs,
        "rare": rareImgs,
        "legendary": legendaryImgs
    };

    const sliderSettings = {
        paginationType: "progressbar",
        autoHeight: true,
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: true,
        loop: true,
        clickable: true,
        navigation: true,
        modules: [Pagination, Navigation],
        className: "mySwiper"
    };

    return (
        <>

            <h1 className="mb-0 pt-8 md:text-xl lg:text-xl leading-0 tracking-tight text-center text-cloverLightGreen md:text-4xl lg:md:text-xl lg:text-xl">
                <span className="capitalize text-3xl leading-tight border-0 border-gray-300 lg:text-5xl md:text-5xl sm:text-1xl">[ Forms ]</span>
            </h1>

            <div
                className="capitalize py-4 text-center text-xl text-cloverLightGreen mx-4 mb-0 sm:lg:text-xl md:text-l md:text-2xl lg:text-3xl ">
                Below is all documented forms a Clover has said to be able to shape-shift into.
            </div>

            <div
                className="p-0 text-center text-xl text-cloverLightGreen mx-4 mb-0 sm:lg:text-xl md:text-l md:text-2xl lg:text-3xl ">
                They're is four different Rarity levels for each form.
                <br></br>
                [ Common | Special | Rare | Legendary ]
            </div>

            <div className="capitalize py-6 grid grid-cols-1 gap-4 mx-4 mt-0 sm:grid-cols-8 lg:grid-cols-12 sm:px-4 xl:px-0">


                <div className="grid-row-wrapper">

                    <div
                        className="order-1 md:order-1 lg:block md:block hidden grid-item hidden flex flex-col items-center justify-between col-span-1 lg:col-span-4 md:col-span-3 p-8 space-y-4 rounded-none rounded">
                    </div>


                    <div className="order-2 md:order-2 grid-item flex flex-col items-center justify-between col-span-1 lg:col-span-4 md:col-span-3 space-y-4 border-8 border-cloverBorder rounded-none rounded">
                        <Swiper
                            slidesPerView={sliderSettings.slidesPerView}
                            spaceBetween={sliderSettings.spaceBetween}
                            loop={sliderSettings.loop}
                            onSlideChange={(swiperCore) => {
                                const {
                                    realIndex,
                                } = swiperCore;
                                onNextImg(imgDict["Common"][realIndex], "Common", swiperCore["realIndex"]);
                            }}
                            pagination={{
                                type: sliderSettings.paginationType,
                            }}
                            navigation={sliderSettings.navigation}
                            modules={sliderSettings.modules}
                            className={sliderSettings.className}
                        >
                            {imgDict["Common"].map((item, index) => {
                                return <SwiperSlide>
                                    <img src={"images/common/" + item + ".png"} key={item}
                                         alt="BigCo Inc. logo"/>
                                </SwiperSlide>
                            })}
                        </Swiper>
                    </div>


                    <div
                        className="order-3 md:order-3 relative flex flex-col items-center text-center justify-between col-span-1 lg:col-span-4 md:col-span-3 p-4 space-y-4 overflow-hidden bg-cloverDarkGreen bg-opacity-40 border-dashed border-8 border-cloverBorder rounded-none rounded">
                        <div className="h-full w-full flex flex-col justify-center items-center">
                            <div className="row-span-0">

                                <h1 className="mb-4 text-3xl md:text 5xl lg:text-5xl">{currentCommonImg}</h1>
                            </div>
                            <div className="">
                                <h3 className="mb-4 font text-l md:text-2xl">
                                    [ Category: Common]
                                </h3>
                                <h3 className="mb-4 font text-l md:text-2xl">
                                    [ variations: {currentCommonIndex}/{commonvariations}]
                                </h3>
                                <h3 className="mb-0 font text-l md:text-2xl">
                                    [ Rarity: {commonRarity}%]
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid-row-wrapper">

                    <div
                        className="order-5 md:order-4 relative flex flex-col items-center text-center justify-between col-span-1 lg:col-span-4 md:col-span-3 p-8 space-y-4 overflow-hidden bg-cloverDarkGreen bg-opacity-40 border-dashed border-8 border-cloverBorder rounded-none rounded">
                        <div className="h-full w-full flex flex-col justify-center items-center">
                            <div className="row-span-0">

                                <h1 className="mb-4 text-3xl md:text 5xl lg:text-5xl">{currentSpecialImg}</h1>
                            </div>
                            <div className="">
                                <h3 className="mb-4 font text-l md:text-2xl">
                                    [ Category: Special]
                                </h3>
                                <h3 className="mb-4 font text-l md:text-2xl">
                                    [ variations: {currentSpecialIndex}/{specialvariations}]
                                </h3>
                                <h3 className="mb-0 font text-l md:text-2xl">
                                    [ Rarity: {specialRarity}%]
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="order-4 md:order-5 grid-item flex flex-col items-center justify-between col-span-1 lg:col-span-4 md:col-span-3 space-y-4 border-8 border-cloverBorder rounded-none rounded">
                        <Swiper
                            slidesPerView={sliderSettings.slidesPerView}
                            spaceBetween={sliderSettings.spaceBetween}
                            loop={sliderSettings.loop}
                            onSlideChange={(swiperCore) => {
                                const {
                                    realIndex,
                                } = swiperCore;
                                onNextImg(imgDict["special"][realIndex], "special", swiperCore["realIndex"]);
                            }}
                            pagination={{
                                type: sliderSettings.paginationType,
                            }}
                            navigation={sliderSettings.navigation}
                            modules={sliderSettings.modules}
                            className={sliderSettings.className}
                        >
                            {imgDict["special"].map((item, index) => {
                                return <SwiperSlide>
                                    <img src={"images/special/" + item + ".png"} key={item}
                                         alt="BigCo Inc. logo"/>
                                </SwiperSlide>
                            })}
                        </Swiper>
                    </div>

                    <div
                        className="order-6 md:order-6 lg:block md:block hidden grid-item hidden flex flex-col items-center justify-between col-span-1 lg:col-span-4 md:col-span-3 p-8 space-y-4 rounded-none rounded">
                    </div>

                </div>

                <div className="grid-row-wrapper">

                    <div
                        className="order-7 md:order-7 lg:block md:block hidden grid-item hidden flex flex-col items-center justify-between col-span-1 lg:col-span-4 md:col-span-3 p-8 space-y-4 rounded-none rounded">
                    </div>


                    <div className="order-8 md:order-8 grid-item flex flex-col items-center justify-between col-span-1 lg:col-span-4 md:col-span-3 space-y-4 border-8 border-cloverBorder rounded-none rounded">
                        <Swiper
                            slidesPerView={sliderSettings.slidesPerView}
                            spaceBetween={sliderSettings.spaceBetween}
                            loop={sliderSettings.loop}
                            onSlideChange={(swiperCore) => {
                                const {
                                    realIndex,
                                } = swiperCore;
                                onNextImg(imgDict["rare"][realIndex], "rare", swiperCore["realIndex"]);
                            }}
                            pagination={{
                                type: sliderSettings.paginationType,
                            }}
                            navigation={sliderSettings.navigation}
                            modules={sliderSettings.modules}
                            className={sliderSettings.className}
                        >
                            {imgDict["rare"].map((item, index) => {
                                return <SwiperSlide>
                                    <img src={"images/rare/" + item + ".png"} key={item}
                                         alt="BigCo Inc. logo"/>
                                </SwiperSlide>
                            })}
                        </Swiper>
                    </div>

                    <div
                        className="order-9 md:order-9 relative flex flex-col items-center text-center justify-between col-span-1 lg:col-span-4 md:col-span-3 p-8 space-y-4 overflow-hidden bg-cloverDarkGreen bg-opacity-40 border-dashed border-8 border-cloverBorder rounded-none rounded">
                        <div className="h-full w-full flex flex-col justify-center items-center">
                            <div className="row-span-0">

                                <h1 className="mb-4 text-3xl md:text 5xl lg:text-5xl">{currentRareImg}</h1>
                            </div>
                            <div className="">
                                <h3 className="mb-4 font text-l md:text-2xl">
                                    [ Category: Rare]
                                </h3>
                                <h3 className="mb-4 font text-l md:text-2xl">
                                    [ variations: {currentRareIndex}/{rarevariations}]
                                </h3>
                                <h3 className="mb-0 font text-l md:text-2xl">
                                    [ Rarity: {rareRarity}%]
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid-row-wrapper">

                    <div
                        className="order-11 md:order-10 relative flex flex-col items-center text-center justify-between col-span-1 lg:col-span-4 md:col-span-3 p-8 space-y-4 overflow-hidden bg-cloverDarkGreen bg-opacity-40 border-dashed border-8 border-cloverBorder rounded-none rounded">
                        <div className="h-full w-full flex flex-col justify-center items-center">
                            <div className="row-span-0">

                                <h1 className="mb-4 text-3xl md:text-5xl lg:text-5xl">{currentLegendaryImg}</h1>
                            </div>
                            <div className="">
                                <h3 className="mb-4 font text-l md:text-2xl">
                                    [ Category: Legendary ]
                                </h3>
                                <h3 className="mb-4 font text-l md:text-3xl lg:text-2xl">
                                    [ variations: {currentLegendaryIndex}/{legendaryvariations}]
                                </h3>
                                <h3 className="mb-0 font text-l md:text-3xl lg:text-2xl">
                                    [ Rarity: {legendaryRarity}%]
                                </h3>
                            </div>
                        </div>
                    </div>


                    <div className="order-10 md:order-11 grid-item flex flex-col items-center justify-between col-span-1 lg:col-span-4 md:col-span-3 space-y-4 border-8 border-cloverBorder rounded-none rounded">
                        <Swiper
                            slidesPerView={sliderSettings.slidesPerView}
                            spaceBetween={sliderSettings.spaceBetween}
                            loop={sliderSettings.loop}
                            onSlideChange={(swiperCore) => {
                                const {
                                    realIndex,
                                } = swiperCore;
                                onNextImg(imgDict["legendary"][realIndex], "legendary", swiperCore["realIndex"]);
                            }}
                            pagination={{
                                type: sliderSettings.paginationType,
                            }}
                            navigation={sliderSettings.navigation}
                            modules={sliderSettings.modules}
                            className={sliderSettings.className}
                        >
                            {imgDict["legendary"].map((item, index) => {
                                return <SwiperSlide>
                                    <img src={"images/legendary/" + item + ".png"} key={item}
                                         alt="BigCo Inc. logo"/>
                                </SwiperSlide>
                            })}
                        </Swiper>
                    </div>


                    <div
                        className="order-12 md:order-12 lg:block md:block hidden grid-item hidden flex flex-col items-center justify-between col-span-1 lg:col-span-4 md:col-span-3 p-8 space-y-4 rounded-none rounded">
                    </div>

                </div>

            </div>

        </>
    )
}