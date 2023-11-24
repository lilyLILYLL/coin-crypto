"use client";
import React from "react";
import Link from "next/link";
import { defaultTextStyle } from "@constants";
import { IconBrandTwitter, IconBrandFacebook, IconMenu2, IconX } from "@tabler/icons-react";
import { useDimensions } from "../hooks/useDimensions";

export const Header = () => {
    const dimensions = useDimensions();
    const [showMobileNav, setShowMobileNav] = React.useState<boolean>(false);
    const handleToggleMobileNav = () => {
        setShowMobileNav((prev) => !prev);
    };

    return (
        <div className={`w-full fixed z-50`}>
            {/* NAV BAR */}
            <div className={`${dimensions.scrollY < 150 ? "" : "bg-black"} flex flex-row mx-auto  p-6 justify-between sticky top-0 lg:px-28  `}>
                <Link href={"/"}>
                    <div className="text-3xl font-noto-sans font-bold text-white">COINDOM</div>
                </Link>

                <div className="md:flex md:flex-row space-x-10 hidden md:visible">
                    <Link href={{ hash: "home" }} className={`${defaultTextStyle}`}>
                        Home
                    </Link>
                    <Link href={{ hash: "market" }} className={`${defaultTextStyle} `}>
                        Market
                    </Link>
                    <Link href={{ hash: "chooseUs" }} className={`${defaultTextStyle}`}>
                        Choose Us
                    </Link>

                    <Link href={{ hash: "join" }} className={`${defaultTextStyle}`}>
                        Join
                    </Link>
                </div>

                <div className="flex flex-row gap-4">
                    <IconBrandFacebook color="white" width={30} height={30} />
                    <IconBrandTwitter color="white" width={30} height={30} />
                    {!!dimensions.width && dimensions.width <= 768 && <IconMenu2 color="white" width={30} height={30} className="cursor-pointer" onClick={handleToggleMobileNav} />}
                </div>
            </div>

            {/* MOBILE SIDE BAR */}
            <div
                className={`${
                    showMobileNav ? "left-0" : "left-[-100%]"
                } fixed top-0  w-full  bg-white  overflow-hidden transition-all duration-300 ease-in-out flex flex-col gap-6 justify-center items-center h-screen`}
            >
                <IconX width={30} height={30} color="black" className="hover:cursor-pointer absolute top-8 right-6" onClick={handleToggleMobileNav} />
                <Link
                    href={{ hash: "home" }}
                    onClick={handleToggleMobileNav}
                    className="font-space-grotesk font-bold text-black text-2xl hover:bg-gradient-to-r from-blue to-pink hover:text-transparent hover:bg-clip-text"
                >
                    Home
                </Link>
                <Link
                    href={{ hash: "market" }}
                    onClick={handleToggleMobileNav}
                    className="font-space-grotesk font-bold text-black text-2xl hover:bg-gradient-to-r from-blue to-pink hover:text-transparent hover:bg-clip-text"
                >
                    Market
                </Link>
                <Link
                    href={{ hash: "chooseUs" }}
                    onClick={handleToggleMobileNav}
                    className="font-space-grotesk font-bold text-black text-2xl hover:bg-gradient-to-r from-blue to-pink hover:text-transparent hover:bg-clip-text"
                >
                    Choose Us
                </Link>
                <Link
                    href={{ hash: "join" }}
                    onClick={handleToggleMobileNav}
                    className="font-space-grotesk font-bold text-black text-2xl hover:bg-gradient-to-r from-blue to-pink hover:text-transparent hover:bg-clip-text"
                >
                    Join
                </Link>
            </div>
        </div>
    );
};
