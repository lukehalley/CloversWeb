import React from "react";
import Image from "next/dist/client/image";

export default function Roadmap() {

    return (

        <>

            <h1 className="mb-0 pt-8 pb-2 md:text-xl lg:text-xl leading-0 tracking-tight text-center text-cloverLightGreen md:text-4xl lg:md:text-xl lg:text-xl">
                <span className="text-3xl leading-tight border-0 border-gray-300 lg:text-5xl md:text-5xl sm:text-1xl">[ Collection ]</span>
            </h1>

            <div
                className="p-4 text-center text-xl text-cloverLightGreen mx-4 mb-0 sm:lg:text-xl md:text-l md:text-2xl lg:text-2xl lg:text-3xl ">
                Heres four key points about Clovers and what we did to make it different from all the rest.
            </div>

            <div
                className="p-0 text-center text-xl text-cloverLightGreen mx-4 mb-0 sm:lg:text-xl md:text-l md:text-2xl lg:text-3xl ">
                [ Looks | Forms | Depth | Consistency ]
            </div>

            <div className="py-6 grid grid-cols-1 gap-4 mx-4 mt-0 sm:grid-cols-8 lg:grid-cols-12 sm:px-4 xl:px-0">


                <div className="grid-row-wrapper">
                    {/*--LEFT--*/}

                    {/*BLANK*/}
                    <div
                        className="order-1 md:order-1 lg:block md:block hidden grid-item hidden flex flex-col items-center justify-between col-span-1 lg:col-span-4 md:col-span-3 p-8 space-y-4 rounded-none rounded">
                    </div>

                    {/*IMG*/}
                    <div className="order-2 md:order-2 grid-item flex flex-col items-center justify-between col-span-1 lg:col-span-4 md:col-span-3 space-y-4 border-8 border-cloverBorder rounded-none rounded">

                        <Image
                            alt="eskimo"
                            src="/gif-opt/eskimo.gif"
                            blurDataURL={"thumbnail/tn_eskimo.jpg"}
                            placeholder="blur"
                            width={500}
                            height={500}
                        />

                    </div>

                    {/*TEXT*/}
                    <div
                        className="order-3 md:order-3 relative flex flex-col items-center text-center justify-between col-span-1 lg:col-span-4 md:col-span-3 p-8 space-y-4 overflow-hidden bg-cloverDarkGreen bg-opacity-40 border-dashed border-8 border-cloverBorder rounded-none rounded">
                        <div className="h-full w-full flex flex-col justify-center items-center">
                            <div className="row-span-0">
                                {/*<h1 className="mb-4">THIS WILL BE THE TITLE</h1>*/}
                                <h1 className="mb-4 text-2xl md:text-4xl lg:text-4xl">[ Looks ]</h1>
                            </div>
                            <div className="md:text-xl text-l">
                                <p>
                                    Regardless of how rare a Clover is, we made sure each and everyone looked brilliant.
                                    <br/><br/>
                                    The collection contains some never seen before traits but also come classics from the NFT space.
                                    <br/><br/>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/*--RIGHT--*/}
                {/*TEXT*/}
                <div
                    className="order-5 md:order-4 relative flex flex-col items-center text-center justify-between col-span-1 lg:col-span-4 md:col-span-3 p-8 space-y-4 overflow-hidden bg-cloverDarkGreen bg-opacity-40 border-dashed border-8 border-cloverBorder rounded-none rounded">
                    <div className="h-full w-full flex flex-col justify-center items-center">
                        <div className="row-span-0">
                            {/*<h1 className="mb-4">THIS WILL BE THE TITLE</h1>*/}
                            <h1 className="mb-4 text-2xl md:text-4xl lg:text-4xl">[ Forms ]</h1>
                        </div>
                        <div className="md:text-xl text-l">
                            <p>
                                There are 27 different base forms in the collection.
                                <br/><br/>
                                During the generation process a collection of traits and variations are chosen from - all exclusive to each form.
                            </p>
                        </div>
                    </div>
                </div>

                {/*IMG*/}
                <div className="order-4 md:order-5 flex flex-col items-center justify-between col-span-1 lg:col-span-4 md:col-span-3 px-0 py-0 space-y-4 border-8 border-cloverBorder rounded-none rounded">

                    <Image
                        alt="wizard"
                        src="/gif-opt/wizard.gif"
                        blurDataURL={"thumbnail/tn_wizard.jpg"}
                        placeholder="blur"
                        width={500}
                        height={500}
                    />

                </div>

                {/*BLANK*/}
                <div
                    className="order-6 md:order-6 lg:block md:block hidden flex flex-col items-center justify-between col-span-1 lg:col-span-4 md:col-span-3 p-8 space-y-4 rounded-none rounded">
                </div>

                {/*--LEFT--*/}
                {/*BLANK*/}
                <div
                    className="order-7 md:order-7 lg:block md:block hidden flex flex-col items-center justify-between col-span-1 lg:col-span-4 md:col-span-3 p-8 space-y-4 rounded-none rounded">
                </div>

                {/*IMG*/}
                <div className="order-8 md:order-8 flex flex-col items-center justify-between col-span-1 lg:col-span-4 md:col-span-3 px-0 py-0 space-y-4 border-8 border-cloverBorder rounded-none rounded">

                    <Image
                        alt="explorer"
                        src="/gif-opt/explorer.gif"
                        blurDataURL={"thumbnail/tn_explorer.jpg"}
                        placeholder="blur"
                        width={500}
                        height={500}
                    />

                </div>

                {/*TEXT*/}
                <div
                    className="order-9 md:order-9 relative flex flex-col items-center text-center justify-between col-span-1 lg:col-span-4 md:col-span-3 p-8 space-y-4 overflow-hidden bg-cloverDarkGreen bg-opacity-40 border-dashed border-8 border-cloverBorder rounded-none rounded">
                    <div className="h-full w-full flex flex-col justify-center items-center">
                        {/*<div className="grid grid-cols-1 grid-rows-4 gap-0">*/}

                        {/*</div>*/}
                        <div className="row-span-0">
                            <div className="row-span-0">
                                <h1 className="mb-4 text-2xl md:text-4xl lg:text-4xl">[ Depth ]</h1>
                            </div>
                            <div className="md:text-xl text-l">
                                <p>
                                    Every Clover is not built the same - with up to 18 different layers making up each one.
                                    <br/><br/>
                                    As well as that - there are 322 different traits within the collection.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/*<p className="text-center ">So I started to walk into the water...</p>*/}

                </div>

                {/*--RIGHT--*/}
                {/*TEXT*/}
                <div
                    className="mb-4 md:mb-0 order-11 md:order-10 relative flex flex-col items-center text-center justify-between col-span-1 lg:col-span-4 md:col-span-3 p-8 space-y-4 overflow-hidden bg-cloverDarkGreen bg-opacity-40 border-dashed border-8 border-cloverBorder rounded-none rounded">
                    <div className="h-full w-full flex flex-col justify-center items-center">
                        <div className="row-span-0">
                            <h1 className="mb-4 text-2xl md:text-4xl lg:text-4xl">[ Consistency ]</h1>
                        </div>
                        <div className="md:text-xl text-l">
                            <p>
                                Since we built the algorithm that generates the Clovers from the ground up we added some unique features.
                                <br/><br/>
                                Each form is matched with its complementing traits and variations.
                            </p>
                        </div>
                    </div>
                </div>

                {/*IMG*/}
                <div className="order-10 md:order-11 flex flex-col items-center justify-between col-span-1 lg:col-span-4 md:col-span-3 px-0 py-0 space-y-4 border-8 border-cloverBorder rounded-none rounded">

                    <Image
                        alt="warrior"
                        src="/gif-opt/warrior.gif"
                        blurDataURL={"thumbnail/tn_warrior.jpg"}
                        placeholder="blur"
                        width={500}
                        height={500}
                    />

                </div>

                {/*BLANK*/}
                <div
                    className="order-12 md:order-12 lg:block md:block hidden flex flex-col items-center justify-between col-span-1 lg:col-span-4 md:col-span-3 p-8 space-y-4 rounded-none rounded">
                </div>

            </div>

        </>
    )
}