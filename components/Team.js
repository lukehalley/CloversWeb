import React from "react";

export default function Team() {

    return (

        <>

            <h1 className="capitalize mb-0 pt-8 md:text-xl lg:text-xl leading-0 tracking-tight text-center text-cloverLightGreen md:text-4xl lg:md:text-xl lg:text-xl">
                <span className="text-3xl leading-tight border-0 border-gray-300 lg:text-5xl md:text-5xl sm:text-1xl">[ Team ]</span>
            </h1>

            <div className="capitalize py-8 grid grid-cols-1 gap-4 mx-4 mt-0 lg:grid-cols-2 sm:px-8 xl:px-0">


                <div className="grid-row-wrapper">

                    <div
                        className="order-2 md:order-1 relative flex flex-col items-center text-center justify-between col-span-1 lg:col-span-1 md:col-span-1 p-8 overflow-hidden bg-cloverDarkGreen bg-opacity-40 border-dashed border-8 border-cloverBorder rounded-none rounded">
                        <div className="h-full w-full flex flex-col justify-center items-center">
                            <div className="">
                                <h1 className="p-4 text-2xl md:text-5xl lg:text-5xl">[ LHK ]</h1>
                            </div>
                            <div className="">
                                <h1 className="p-4 text-l md:text-3xl lg:text-3xl">[ Lead Developer & Artist ]</h1>
                            </div>
                            <div className="text-m md:text-xl lg:text-xl">
                                <p>
                                    [ founder + degen + dev ]
                                    <br/><br/>
                                    LHK is the lead developer and artist of Clovers. He has been involved in software development for five years now.
                                    <br/><br/>
                                    when hes not writing code - he is either drinking coffee or going for long runs which he really enjoys for some odd reason.
                                    <br/><br/>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/*IMG*/}
                    <div className="order-1 md:order-2 flex flex-col items-center justify-between col-span-1 lg:col-span-1 md:col-span-1 px-0 py-0 space-y-4 border-8 border-cloverBorder rounded-none rounded">
                        <img className="" src="images/common/dude.png"/>
                    </div>

                </div>
            </div>

        </>
    )
}