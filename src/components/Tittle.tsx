import React from "react";
import Image from "next/image";
import { Bitcon, Ethereum } from "@images";
import { defaultTextStyle } from "@constants";

type Props = {
    name: string;
    containerClassName?: string;
    textClassName?: string;
    noIcon?: boolean;
    gradientFrom: number;
};

export const Tittle = (props: Props) => {
    return (
        <div>
            <div className={`flex flex-row items-center ${props.containerClassName}`}>
                {!props.noIcon && <Image src={Bitcon} alt="bitcoin" className="w-20 h-20 animate-bounce hidden md:inline-block" />}

                <div className={`${defaultTextStyle}  text-center text-7xl sm:text-8xl w-full ${props.textClassName}`}>
                    {props.name.split(" ").slice(0, props.gradientFrom).join(" ")}
                    <span className="bg-gradient-to-r from-blue to-pink text-transparent bg-clip-text"> {props.name.split(" ").slice(props.gradientFrom).join(" ")}</span>
                </div>

                {!props.noIcon && <Image src={Ethereum} alt="bitcoin" className=" w-20 h-20 animate-bounce hidden md:inline-block" />}
            </div>
        </div>
    );
};
