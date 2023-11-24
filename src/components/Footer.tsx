import React from "react";
import Image from "next/image";
import { FooterBg } from "@images";
import { IconBrandFacebook, IconBrandTwitter, IconBrandYoutube, IconBrandDiscord } from "@tabler/icons-react";
import { defaultTextStyle } from "@constants";
export const Footer = () => {
    return (
        <div>
            <div className="flex flex-col gap-4 mx-auto w-fit pt-20 bottom-4 z-20 h-fit">
                <div className="flex flex-row gap-4 ">
                    <IconBrandTwitter width={30} height={30} color="white" />
                    <IconBrandFacebook width={30} height={30} color="white" />
                    <IconBrandDiscord width={30} height={30} color="white" />
                    <IconBrandYoutube width={30} height={30} color="white" />
                </div>
                <div className="flex flex-row gap-4">
                    <p className={`${defaultTextStyle} text-base text-light`}>Privacy </p>
                    <p className={`${defaultTextStyle} text-base text-light`}>Terms of Use </p>
                </div>
            </div>
            <Image src={FooterBg} alt="FooterBg" className="w-full  bg-black absolute left-0 " />
        </div>
    );
};
