import React from "react";
import Link from "next/link";
import { defaultTextStyle } from "@constants";
export const Header = () => {
    return (
        <div className="w-full bg-darkPurple fixed">
            <div className="flex flex-row w-3/4 mx-auto  p-6 justify-between sticky top-0">
                <Link href={"/"}>
                    <div className="text-5xl font-noto-sans font-bold text-white">Coinn</div>
                </Link>

                <div className="flex flex-row space-x-10">
                    <Link href={{ hash: "home" }} className={defaultTextStyle}>
                        Home
                    </Link>
                    <Link href={{ hash: "chooseUs" }} className={defaultTextStyle}>
                        Choose Us
                    </Link>
                    <Link href={{ hash: "market" }} className={defaultTextStyle}>
                        Market
                    </Link>
                    <Link href={{ hash: "join" }} className={defaultTextStyle}>
                        Join
                    </Link>
                </div>
            </div>
        </div>
    );
};
