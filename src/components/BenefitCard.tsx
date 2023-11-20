import React from "react";
import { Benefit, defaultTextStyle } from "@constants";

type Props = {
    benefit: Benefit;
};

export const BenefitCard = (props: Props) => {
    const { icon, title, description } = props.benefit;
    return (
        <div className="flex flex-row gap-6 border border-gray rounded-2xl lg:w-[400px] w-full p-8 bg-darkGray">
            <div className="bg-white p-4 h-fit bg-gradient-to-tr from-blue to-pink rounded-xl ">
                <i className="w-12 h-12 text-white">{icon}</i>
            </div>

            <div className="flex flex-col gap-2 ">
                <div className="text-2xl text-white font-bold">{title}</div>
                <div className="text-lg text-white ">{description}</div>
            </div>
        </div>
    );
};
