import React from "react";
import { Button, Footer, Tittle } from "@components";
import { defaultTextStyle } from "@constants";
import { FooterBg } from "@images";
import Image from "next/image";

const Join = () => {
    return (
        <section id="join" className="h-fit w-full text-3xl bg-black p-28 ">
            <Tittle name="JOIN US VIA DISCORD" gradientFrom={3} />
            <p className={`${defaultTextStyle} text-xl font-light text-center mt-6 mb-20`}>Invest and manage all your crypto at one place.</p>

            <Button name="Join via Discord" href="https://discord.com/" target="_blank" />
            <Footer />
        </section>
    );
};

export default Join;
