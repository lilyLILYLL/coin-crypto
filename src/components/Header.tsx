import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { defaultTextStyle } from "@constants";
import { IconBrandTwitter, IconBrandFacebook, IconMenu2 } from "@tabler/icons-react";

export const Header = () => {
    return (
        <div className={`w-full fixed`}>
            <div className="flex flex-row mx-auto  p-6 justify-between sticky top-0 lg:px-28">
                <Link href={"/"}>
                    <div className="text-3xl font-noto-sans font-bold text-white">COINDOM</div>
                </Link>

                <div className="lg:flex lg:flex-row space-x-10 hidden lg:visible">
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
                    <IconMenu2 color="white" width={30} height={30} className="cursor-pointer" />
                </div>
            </div>
        </div>
    );
};
