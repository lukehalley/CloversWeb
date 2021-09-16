import React, {useRef, useState} from "react";

export default function Trailer() {

    return (
        <>

            <div className="capitalize">
                <h1 className="mb-0 pt-4 pb-2 md:text-xl lg:text-xl leading-0 tracking-tight text-center text-cloverLightGreen md:text-4xl lg:md:text-xl lg:text-xl">
                    <span
                        className="text-3xl leading-tight border-0 border-gray-300 lg:text-5xl md:text-5xl sm:text-1xl">[ Trailer ]</span>
                </h1>






                <div className="mx-auto my-2 bg-cloverDarkGreen bg-opacity-40 border-dashed border-8 border-cloverBorder sm:px-8 md:px-12 sm:py-8 sm:shadow border-dashed border-8 border-cloverBorder">
                    <div className="grid place-items-center">
                        <iframe src="https://player.vimeo.com/video/687103626?h=65b7437ec4&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                                allow="autoplay; fullscreen; picture-in-picture"
                                title="Clovers Trailer"
                                width="500" height="500"
                                allowFullScreen/>
                        <script src="https://player.vimeo.com/api/player.js"/>
                    </div>
                </div>
            </div>
        </>
    )
}