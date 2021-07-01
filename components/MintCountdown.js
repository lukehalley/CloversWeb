import React, {useEffect, useState} from "react";

function Clock (props) {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const leading0 = (num) => {
        return num < 10 ? "0" + num : num;
    };

    const getTimeUntil = (pTime) => {

        const time = Date.parse(pTime) - Date.parse(new Date());

        if (time < 0) {
            setDays(0);
            setHours(0);
            setMinutes(0);
            setSeconds(0);
        } else {
            setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
            setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
            setMinutes(Math.floor((time / 1000 / 60) % 60));
            setSeconds(Math.floor((time / 1000) % 60));
        }
    };

    useEffect(() => {

        setInterval(() => getTimeUntil(props["preSaleMintDate"]), 1000);

        return () => getTimeUntil(props["preSaleMintDate"]);
    }, [props["preSaleMintDate"]]);

    return (
        <div>

            <div
                className="capitalize p-4 text-center text-xl text-cloverLightGreen mx-4 mb-0 sm:lg:text-xl md:text-l md:text-2xl lg:text-2xl lg:text-3xl ">
                {props["countdownMessage"]}
            </div>

            <div className="pb-4 grid grid-rows-2 grid-cols-2 gap-4 md:gap-y-4 md:gap-4 mt-0 md:grid-rows-1 md:grid-cols-4 xl:px-0">

                <div>

                    <div className="p-4 md:p-8 text-center md:text-5xl border-dashed border-4 border-cloverBorder p-2 bg-cloverDarkGreen bg-opacity-40 text-cloverLightGreen rounded-lg">
                        <div className="pb-4 text-4xl md:text-5xl leading-none" >{leading0(days)}</div>
                        <div className="uppercase text-1xl md:text-3xl leading-none">Days</div>
                    </div>

                </div>

                <div>

                    <div className="p-4 md:p-8 text-center border-dashed border-4 border-cloverBorder p-2 bg-cloverDarkGreen bg-opacity-40 text-cloverLightGreen rounded-lg">
                        <div className="pb-4 text-4xl md:text-5xl leading-none" >{leading0(hours)}</div>
                        <div className="uppercase text-1xl md:text-3xl leading-none">Hours</div>
                    </div>

                </div>

                <div>

                    <div className="p-4 md:p-8 text-center md:text-5xl border-dashed border-4 border-cloverBorder p-2 bg-cloverDarkGreen bg-opacity-40 text-cloverLightGreen rounded-lg">
                        <div className="pb-4 text-4xl md:text-5xl leading-none" >{leading0(minutes)}</div>
                        <div className="uppercase text-1xl md:text-3xl leading-none">Minutes</div>
                    </div>

                </div>

                <div>

                    <div className="p-4 md:p-8 text-center md:text-5xl border-dashed border-4 border-cloverBorder p-2 bg-cloverDarkGreen bg-opacity-40 text-cloverLightGreen rounded-lg">
                        <div className="pb-4 text-4xl md:text-5xl leading-none" >{leading0(seconds)}</div>
                        <div className="uppercase text-1xl md:text-3xl leading-none">Seconds</div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Clock;