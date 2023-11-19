import React from "react";
import Image from "next/image";
import { Bitcon, Ethereum } from "@images";
import { defaultTextStyle } from "@constants";

type Props = {
    name: string;
    containerClassName?: string;
    textClassName?: string;
};

export const Tittle = (props: Props) => {
    return (
        <div>
            <div className="w-3/4 mx-auto flex flex-row items-center">
                <Image src={Bitcon} alt="bitcoin" className="w-20 h-20 animate-bounce" />
                <div className={`${defaultTextStyle}  text-center text-8xl w-full `}>
                    {props.name.split(" ").slice(0, 3).join(" ")} <span className="bg-gradient-to-r from-blue to-pink text-transparent bg-clip-text"> {props.name.split(" ").slice(3).join(" ")}</span>
                </div>
                <Image src={Ethereum} alt="bitcoin" className=" w-20 h-20 animate-bounce" />
            </div>
        </div>
    );
};
