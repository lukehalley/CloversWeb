import React from "react";

export default function Footer(
    {
        openOpensea,
        openDiscord,
        openTwitter,
    }
) {

    return (

        <>
            <div
                className="container flex flex-col items-center px-4 py-8 mx-auto max-w-7xl sm:flex-row">
                <a className="text-xl font-black leading-none text-cloverLightGreen select-none logo"
                   href="#_">Clovers.</a>
                <p className="mt-4 text-sm text-cloverLightGreen sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-200 sm:mt-0">
                    NFT Collection.
                </p>
                <span
                    className="inline-flex justify-center mt-4 space-x-5 sm:ml-auto sm:mt-0 sm:justify-start">
                            <a onClick={openDiscord} className="transition ease-in-out delay-50 duration-500 text-cloverHover hover:text-cloverLightGreen" href="#">
                              <span className="sr-only">Discord</span>
                                <i className="fa-brands fa-discord fa-xl"/>
                            </a>
                            <a onClick={openTwitter} className="transition ease-in-out delay-50 duration-500 text-cloverHover hover:text-cloverLightGreen" href="#">
                              <span className="sr-only">Twitter</span>
                                <i className="fa-brands fa-twitter fa-xl"/>
                            </a>
                            <a onClick={openOpensea} className="transition ease-in-out delay-50 duration-500 text-cloverHover hover:text-cloverLightGreen" href="#">
                              <span className="sr-only">OpenSea</span>
                                <i className="fa-solid fa-sailboat fa-xl"/>
                            </a>
                          </span>
            </div>
        </>
    )
}