
import React, { useState } from 'react'
import Image from 'next/image'

export default function Story() {

    return (

        <>

            <h1 className="capitalize mb-0 pt-8 pb-2 md:text-xl lg:text-xl leading-0 tracking-tight text-center text-cloverLightGreen md:text-4xl lg:md:text-xl lg:text-xl">
                <span className="text-3xl leading-tight border-0 border-gray-300 lg:text-5xl md:text-5xl sm:text-1xl">[ Story ]</span>
            </h1>

            <div
                className="capitalize p-4 text-center text-xl text-cloverLightGreen mx-4 mb-0 sm:lg:text-xl md:text-l md:text-2xl lg:text-2xl lg:text-3xl">
                Read the tale of these mythical creatures.
            </div>

            <div className="pb-4 grid grid-cols-1 gap-4 mx-4 mt-0 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0">

                <div className="grid-row-wrapper">

                    {/*IMG*/}
                    <div className="aspect-w-1 aspect-h-1 order-1 md:order-2 grid-item flex flex-col items-center justify-between col-span-1 lg:col-span-4 md:col-span-4 space-y-4 border-4 border-cloverBorder rounded-none rounded">
                        {/*<img src="/gif-opt/origin.gif"/>*/}

                        <iframe src="https://player.vimeo.com/video/687103626?h=65b7437ec4"
                                allow="autoplay; fullscreen; picture-in-picture"
                                title="Clovers Trailer"
                                allowFullScreen
                                frameborder="0"/>

                        <script src="https://player.vimeo.com/api/player.js"/>
                    </div>



                    {/*TEXT*/}
                    <div
                        className="order-2 md:order-1 relative flex flex-col items-center text-center justify-between col-span-1 lg:col-span-8 md:col-span-4 p-4 overflow-hidden bg-cloverDarkGreen bg-opacity-40 border-dashed border-8 border-cloverBorder rounded-none rounded">
                        <div className="h-full w-full flex flex-col justify-center items-center">
                            <div className="row-span-0">
                                <h1 className="mb-4 text-2xl md:text-4xl">[ The Signal ]</h1>
                            </div>
                            <div className="lg:md:text-xl lg:text-xl">
                                <p className="md:p-8">
                                    Signals originating from billions of light years away were detected by satellites on Earth. Humans discovered that these mysterious signals originated from a distant land known as the Metaverse.
                                    <br/><br/>
                                    Most curiously, it came from a very narrow band of the radio spectrum: 982 megahertz, which typically only comes from transmissions of human-made satellites and spacecraft.
                                    <br/><br/>
                                    This transmission was decoded by humans which led to the discovery of the Clovers.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/*--RIGHT--*/}
                {/*TEXT*/}
                <div
                    className="order-4 md:order-4 relative flex flex-col items-center text-center justify-between col-span-1 lg:col-span-8 md:col-span-8 p-4 md:p-8 md:p-8 md:p-8 md:p-8 overflow-hidden bg-cloverDarkGreen bg-opacity-40 border-dashed border-8 border-cloverBorder rounded-none rounded">
                    <div className="h-full w-full flex flex-col justify-center items-center">
                        <div className="row-span-0">
                            {/*<h1 className="mb-4">THIS WILL BE THE TITLE</h1>*/}
                            <h1 className="mb-4 text-2xl md:text-4xl lg:text-4xl">[ The Clover ]</h1>
                        </div>

                        <div className="lg:md:text-xl lg:text-xl">
                            <p className="md:p-8">
                                Clovers are a cluster of 5,000 otherworldly creatures, hidden in the Metaverse. As distant relatives of the leprechaun, they are a powerful yet peaceful community. Like their predecessors, they have the ability to grant a single wish.
                                <br/><br/>
                                In order to avoid having to do this, each Clover is encoded with the ability to shape-shift on command.
                                <br/><br/>
                            </p>
                        </div>
                    </div>
                </div>

                {/*IMG*/}
                <div className="order-3 md:order-3 flex flex-col items-center justify-between col-span-1 lg:col-span-4 md:col-span-4 px-0 py-0 space-y-4 border-4 border-cloverBorder rounded-none rounded">

                    <Image
                        alt="transform"
                        src="/gif-opt/transform.gif"
                        blurDataURL={"thumbnail/tn_transform.jpg"}
                        placeholder="blur"
                        width={500}
                        height={500}
                    />

                </div>

                <div className="grid-row-wrapper">

                    {/*IMG*/}
                    <div className="order-5 md:order-6 grid-item flex flex-col items-center justify-between col-span-1 lg:col-span-4 md:col-span-4 space-y-4 border-8 border-cloverBorder rounded-none rounded">
                        {/*<img src="/gif-opt/origin.gif"/>*/}

                        <Image
                            alt="Origin"
                            src="/gif-opt/origin.gif"
                            blurDataURL={"thumbnail/tn_origin.jpg"}
                            placeholder="blur"
                            width={500}
                            height={500}
                        />

                    </div>



                    {/*TEXT*/}
                    <div
                        className="order-6 md:order-5 relative flex flex-col items-center text-center justify-between col-span-1 lg:col-span-8 md:col-span-4 p-4 overflow-hidden bg-cloverDarkGreen bg-opacity-40 border-dashed border-8 border-cloverBorder rounded-none rounded">
                        <div className="h-full w-full flex flex-col justify-center items-center">
                            <div className="row-span-0">
                                <h1 className="mb-4 text-2xl md:text-4xl">[ The Origin Clover ]</h1>
                            </div>
                            <div className="lg:md:text-xl lg:text-xl">
                                <p className="md:p-8">
                                    Over 3 billion years ago during the creation of the metaverse, a divine creature was brought to life— the Origin Clover.
                                    <br/><br/>
                                    Drawing immense power from its druid crystal, the Origin Clover created 5,000 other Clovers in its likeness.
                                    <br/><br/>
                                    While the Origin Clover will never hurt any creature of good, it will use whatever power necessary against those which do harm.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>




                {/*IMG*/}
                <div className="order-8 md:order-7 flex flex-col items-center justify-between col-span-1 lg:col-span-4 md:col-span-4 px-0 py-0 space-y-4 border-4 border-cloverBorder rounded-none rounded">

                    <Image
                        alt="anti"
                        src="/gif-opt/anti.gif"
                        blurDataURL={"thumbnail/tn_anti.jpg"}
                        placeholder="blur"
                        width={500}
                        height={500}
                    />

                </div>

                {/*TEXT*/}
                <div
                    className="order-8 md:order-7 relative flex flex-col items-center text-center justify-between col-span-1 lg:col-span-8 md:col-span-8 p-4 md:p-8 md:p-8 md:p-8 md:p-8 overflow-hidden bg-cloverDarkGreen bg-opacity-40 border-dashed border-8 border-cloverBorder rounded-none rounded">
                    <div className="h-full w-full flex flex-col justify-center items-center">
                        <div className="row-span-0">
                            <h1 className="mb-4 text-2xl md:text-4xl lg:text-4xl">[ The Anti-Clover ]</h1>
                        </div>
                        <div className="md:text-xl lg:text-xl">
                            <p className="md:p-8">
                                When the Clovers were being created, one was generated with corrupt metadata. On realising it did not hold the same powers as its siblings, the Anti-Clover became consumed with rage.
                                <br/><br/>
                                Full of anguish and jealousy, its sole purpose in life was to find and capture each and every Clover. Once ensnared, the Anti Clover would force the Clovers to use its one wish against itself thus wiping their very existence from the metaverse.
                            </p>
                        </div>
                    </div>

                </div>


                {/*--LEFT--*/}

                {/*TEXT*/}
                <div
                    className="order-10 md:order-9 relative flex flex-col items-center text-center justify-between col-span-1 lg:col-span-8 md:col-span-8 p-4 md:p-8 md:p-8 md:p-8 md:p-8 overflow-hidden bg-cloverDarkGreen bg-opacity-40 border-dashed border-8 border-cloverBorder rounded-none rounded">
                    <div className="h-full w-full flex flex-col justify-center items-center">

                        {/*</div>*/}
                        <div className="row-span-0">
                            <div className="row-span-0">
                                <h1 className="mb-4 text-2xl md:text-4xl lg:text-4xl">[ The Home ]</h1>
                            </div>
                            <div className="md:text-xl lg:text-xl">
                                <p className="md:p-8">
                                    When the Clovers were created. the Origin Clover also created a home planet. This safe haven became known as Planet Trefoil with rich grasslands, endless forests, and sparkling blue oceans.
                                    <br/><br/>
                                    When the Anti-Clover started to hunt down the Clovers, they were forced to flee Planet Trefoil, shape-shift and inhabit different worlds.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/*<p className="text-center ">So I started to walk into the water...</p>*/}

                </div>


                {/*IMG*/}
                <div className="order-9 md:order-10 flex flex-col items-center justify-between col-span-1 lg:col-span-4 md:col-span-4 px-0 py-0 space-y-4 border-4 border-cloverBorder rounded-none rounded">

                    <Image
                        alt="planet"
                        src="/gif-opt/planet.gif"
                        blurDataURL={"thumbnail/tn_planet.jpg"}
                        placeholder="blur"
                        width={500}
                        height={500}
                    />

                </div>

            </div>

        </>
    )
}