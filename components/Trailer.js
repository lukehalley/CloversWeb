

import React, {useRef, useState} from "react";

export default function Trailer() {

    return (
        <>

            <div className="capitalize">
                <h1 className="mb-0 pt-4 pb-2 md:text-xl lg:text-xl leading-0 tracking-tight text-center text-cloverLightGreen md:text-4xl lg:md:text-xl lg:text-xl">
                    <span className="text-3xl leading-tight border-0 border-gray-300 lg:text-5xl md:text-5xl sm:text-1xl">[ Trailer ]</span>
                </h1>

                <div className="w-full mx-auto my-2 bg-cloverDarkGreen bg-opacity-40 border-dashed border-8 border-cloverBorder sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3border-dashed border-8 border-cloverBorder">
                    <video controls src={"/vid/trailer.mp4"} style={{ width: "1500px", height: "1500px" }} />
                </div>
            </div>
        </>
    )
}