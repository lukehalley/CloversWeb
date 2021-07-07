import React from "react";
import Image from "next/dist/client/image";

export default function Roadmap() {

    return (

        <>

            <h1 className="mb-0 pt-8 pb-2 md:text-xl lg:text-xl leading-0 tracking-tight text-center text-cloverLightGreen md:text-4xl lg:md:text-xl lg:text-xl">
                <span className="text-3xl leading-tight border-0 border-gray-300 lg:text-5xl md:text-5xl sm:text-1xl">[ Ability ]</span>
            </h1>

            <div
                className="capitalize p-4 text-center text-xl text-cloverLightGreen mx-4 mb-0 sm:lg:text-xl md:text-l md:text-2xl lg:text-2xl lg:text-3xl ">
                When a Clover shape-shifts, its form has said to have the following four properties.
            </div>

            <div className="capitalize p-4 grid grid-cols-1 gap-4 mx-4 mt-0 sm:grid-cols-8 lg:grid-cols-12 sm:px-4 xl:px-0">


                <div className="grid-row-wrapper">
                    {/*--LEFT--*/}

                    {/*BLANK*/}
                    <div
                        className="order-1 md:order-1 lg:block md:block hidden grid-item hidden flex flex-col items-center justify-between col-span-1 lg:col-span-4 md:col-span-3 p-8 space-y-4 rounded-none rounded">
                    </div>

                    {/*IMG*/}
                    <div className="order-2 md:order-2 grid-item flex flex-col items-center justify-between col-span-1 lg:col-span-4 md:col-span-3 space-y-4 border-8 border-cloverBorder rounded-none rounded">
                        <Image width="500" height="500" src="/gif-opt/eskimo.gif"/>
                    </div>

                    {/*TEXT*/}
                    <div
                        className="order-3 md:order-3 relative flex flex-col items-center text-center justify-between col-span-1 lg:col-span-4 md:col-span-3 p-8 space-y-4 overflow-hidden bg-cloverDarkGreen bg-opacity-40 border-dashed border-8 border-cloverBorder rounded-none rounded">
                        <div className="h-full w-full flex flex-col justify-center items-center">
                            <div className="row-span-0">
                                {/*<h1 className="mb-4">THIS WILL BE THE TITLE</h1>*/}
                                <h1 className="mb-4 text-2xl md:text-4xl lg:text-4xl">[ Looks ]</h1>
                            </div>
                            <div className="lg:md:text-xl lg:text-l">
                                <p>
                                    In all forms, the Clover has been known be of great visual appeal.
                                    <br/><br/>
                                    Each has its own never seen before unique traits
                                    but also can use its power to mirror previous generations appearances which have come before them.
                                    <br/><br/>
                                    Regardless of how rare a Clover is said to be, history books document each and every one of them being brilliant in their own way.
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
                            <h1 className="mb-4 text-2xl md:text-4xl lg:text-4xl">[ Variety ]</h1>
                        </div>
                        <div className="md:text-l lg:text-l">
                            <p>
                                In order for a Clover to remain undiscovered and blend in with their surroundings
                                the origin Clover created 27 unique base forms.
                                <br/><br/>
                                Each Clover is blessed with the ability to shape-shift into but one of these forms,
                                which comes with its own unique styles, exclusive traits and variations.
                                <br/><br/>
                                Its said that some Clovers were blessed with the ability to transform into rarer forms!
                            </p>
                        </div>
                    </div>
                </div>

                {/*IMG*/}
                <div className="order-4 md:order-5 flex flex-col items-center justify-between col-span-1 lg:col-span-4 md:col-span-3 px-0 py-0 space-y-4 border-8 border-cloverBorder rounded-none rounded">
                    <Image width="500" height="500" src="/gif-opt/wizard.gif"/>
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
                    <Image width="500" height="500" src="/gif-opt/explorer.gif"/>
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
                            <div className="md:text-l lg:text-l">
                                <p>
                                    Each Clover is not built the same - with up to 18 different layers chosen at random from the 322 available traits.
                                    <br/><br/>
                                    As well as that, each of the 27 Clover forms has three variations.
                                    <br/><br/>
                                    Because of this its said to be impossible to spot Clover in its shifted form.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/*<p className="text-center ">So I started to walk into the water...</p>*/}

                </div>

                {/*--RIGHT--*/}
                {/*TEXT*/}
                <div
                    className="order-11 md:order-10 relative flex flex-col items-center text-center justify-between col-span-1 lg:col-span-4 md:col-span-3 p-8 space-y-4 overflow-hidden bg-cloverDarkGreen bg-opacity-40 border-dashed border-8 border-cloverBorder rounded-none rounded">
                    <div className="h-full w-full flex flex-col justify-center items-center">
                        <div className="row-span-0">
                            <h1 className="mb-4 text-2xl md:text-4xl lg:text-4xl">[ Consistency ]</h1>
                        </div>
                        <div className="md:text-l lg:text-l">
                            <p>
                                The mysterious crystal which floats above the origin Clover, contains a ancient method which generates the Clover
                                from the ground up.
                                <br/><br/>
                                This blesses each Clover with the ability to match each of its traits with each other,
                                all while maintaining the high degree of randomness to ensure they remain under the radar of any predators.
                            </p>
                        </div>
                    </div>
                </div>

                {/*IMG*/}
                <div className="order-10 md:order-11 flex flex-col items-center justify-between col-span-1 lg:col-span-4 md:col-span-3 px-0 py-0 space-y-4 border-8 border-cloverBorder rounded-none rounded">
                    <Image width="500" height="500" src="/gif-opt/warrior.gif"/>
                </div>

                {/*BLANK*/}
                <div
                    className="order-12 md:order-12 lg:block md:block hidden flex flex-col items-center justify-between col-span-1 lg:col-span-4 md:col-span-3 p-8 space-y-4 rounded-none rounded">
                </div>

            </div>

        </>
    )
}