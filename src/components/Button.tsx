import React from "react";
import Link from "next/link";
import { defaultTextStyle } from "@constants";

type Props = {
    name: string;
    href: string;
    onClick?: (e: any) => void;
    target?: string;
};

export const Button = (props: Props) => {
    return (
        <Link href={props.href} target={props.target}>
            <div onClick={props.onClick} className={`${defaultTextStyle} bg-gradient-to-tr from-blue to-pink py-4 px-8 w-fit rounded-3xl text-xl text-white mx-auto mt-20`}>
                {props.name}
            </div>
        </Link>
    );
};
