import React from "react";
import { Tittle, BenefitCard } from "@components";
import { WHY_CHOOSE_US } from "@constants";
import { ChooseMain } from "@images";
import Image from "next/image";

const ChooseUs = () => {
    return (
        <section id="chooseUs" className="min-h-screen w-full pt-28 bg-black text-3xl p-24">
            <Tittle name="WHY CHOOSE US" noIcon textClassName="text-[60px]" gradientFrom={1} />

            <div className="lg:flex lg:flex-row w-full lg:justify-between mt-10 items-center flex flex-col gap-4 ">
                <div className="flex flex-col gap-6">
                    {WHY_CHOOSE_US.slice(0, 3).map((benefit, index) => (
                        <BenefitCard benefit={benefit} key={index} />
                    ))}
                </div>

                <Image src={ChooseMain} height={400} alt="Choose_Us" />

                <div className="flex flex-col gap-6">
                    {WHY_CHOOSE_US.slice(3, 6).map((benefit, index) => (
                        <BenefitCard benefit={benefit} key={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ChooseUs;
