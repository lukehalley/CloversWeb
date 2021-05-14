import React, {useRef, useState} from "react";

export default function Roadmap() {

    return (

        <>

            <h1 className="capitalize mb-0 pt-8 pb-2 md:text-xl lg:text-xl leading-0 tracking-tight text-center text-cloverLightGreen md:text-4xl lg:md:text-xl lg:text-xl">
                <span className="text-3xl leading-tight border-0 border-gray-300 lg:text-5xl md:text-5xl sm:text-1xl">[ Roadmap ]</span>
            </h1>

            <div
                className="capitalize p-4 text-center text-xl text-cloverLightGreen mx-4 mb-0 sm:lg:text-xl md:text-l md:text-2xl lg:text-2xl lg:text-3xl ">
                We have a lot planned for Clovers!
            </div>

            <div
                className="capitalize p-4 text-center text-xl text-cloverLightGreen mx-4 mb-0 sm:lg:text-xl md:text-l md:text-2xl lg:text-2xl lg:text-3xl ">
                As we grow as a community so will our roadmap - but here is what we have so far.
            </div>

            <div className="capitalize pt-4 pb-6 grid grid-cols-1 gap-4 mx-4 md:grid-cols-3 lg:grid-cols-3 sm:px-8 xl:px-0">
                <div
                    className="relative flex flex-col items-center justify-between col-span-1 px-8 py-12 space-y-4 overflow-hidden bg-cloverDarkGreen bg-opacity-40 border-dashed border-8 border-cloverBorder rounded-none rounded">
                    <div className="grid place-items-center h-screen square text-cloverLightGreen bg-opacity-40 bg-cloverHover rounded-none rounded">
                        <i className="fa-solid fa-user-plus fa-xl"></i>
                    </div>

                    <h4 className="text-xl font-medium ">[ 1. Community ]</h4>
                    <p className="text-base text-center ">
                        A community will be created.
                    </p>
                    <p className="text-base text-center ">
                        Being a community first project, we will gather a group of like minded Clovers.
                    </p>
                </div>
                <div
                    className="flex flex-col items-center justify-between col-span-1 px-8 py-12 space-y-4 bg-cloverDarkGreen bg-opacity-40 border-dashed border-8 border-cloverBorder rounded-none rounded">

                    <div className="grid place-items-center h-screen square text-cloverLightGreen bg-opacity-40 bg-cloverHover rounded-none rounded">
                        <i className="fa-solid fa-list fa-xl"></i>
                    </div>

                    <h4 className="text-xl font-medium ">[ 2. Whitelist ]</h4>
                    <p className="text-base text-center ">
                        A whitelist will be built.
                        <br></br>
                        <br></br>
                        This is to ensure everyone gets a fair chance at minting - regardless of gas.
                    </p>
                </div>
                <div
                    className="flex flex-col items-center justify-between col-span-1 px-8 py-12 space-y-4 bg-cloverDarkGreen bg-opacity-40 border-dashed border-8 border-cloverBorder rounded-none rounded">

                    <div className="grid place-items-center h-screen square text-cloverLightGreen bg-opacity-40 bg-cloverHover rounded-none rounded">
                        <i className="fa-brands fa-ethereum fa-xl"></i>
                    </div>

                    <h4 className="text-xl font-medium ">[ 3. Mint ]</h4>
                    <p className="text-base text-center ">
                        Minting will be enabled.
                        <br></br>
                        <br></br>
                        A limited amount of pre-sale mints will occur, afterwards a public mint.
                    </p>
                </div>

                <div
                    className="flex flex-col items-center justify-between col-span-1 px-8 py-12 space-y-4 bg-cloverDarkGreen bg-opacity-40 border-dashed border-8 border-cloverBorder rounded-none rounded">

                    <div className="grid place-items-center h-screen square text-cloverLightGreen bg-opacity-40 bg-cloverHover rounded-none rounded">
                        <i className="fa-solid fa-eye fa-xl"></i>
                    </div>

                    <h4 className="text-xl font-medium ">[ 4. Reveal ]</h4>
                    <p className="text-base text-center ">
                        Membership will be allocated.
                        <br></br>
                        <br></br>
                        All owners will gain membership to an exclusive area.
                    </p>
                </div>

                <div
                    className="flex flex-col items-center justify-between col-span-1 px-8 py-12 space-y-4 bg-cloverDarkGreen bg-opacity-40 border-dashed border-8 border-cloverBorder rounded-none rounded">

                    <div className="grid place-items-center h-screen square text-cloverLightGreen bg-opacity-40 bg-cloverHover rounded-none rounded">
                        <i className="fa-solid fa-thumbs-up fa-xl"></i>
                    </div>

                    <h4 className="text-xl font-medium ">[ 5. Benefits ]</h4>
                    <p className="text-base text-center ">
                        Membership will be allocated.
                        <br></br>
                        <br></br>
                        All owners will gain membership to an exclusive area.
                    </p>
                </div>

                <div
                    className="flex flex-col items-center justify-between col-span-1 px-8 py-12 space-y-4 bg-cloverDarkGreen bg-opacity-40 border-dashed border-8 border-cloverBorder rounded-none rounded">

                    <div className="grid place-items-center h-screen square text-cloverLightGreen bg-opacity-40 bg-cloverHover rounded-none rounded">
                        <i className="fa-solid fa-rocket fa-xl"></i>
                    </div>

                    <h4 className="text-xl font-medium ">[ 6. Innovate ]</h4>
                    <p className="text-base text-center ">
                        Second roadmap will be revealed.
                        <br></br>
                        <br></br>
                        The projects next moves will be communicated.
                    </p>
                </div>
            </div>

        </>
    )
}