import React from "react";
import { defaultTextStyle } from "@constants";
import { Icon } from "@components";

const Home = () => {
    return (
        <section id="home" className="pt-[200px] min-h-screen w-full text-3xl  bg-gradient-to-t from-black from-30% to-darkPurple">
            <div className=" w-3/4 mx-auto flex flex-row items-center ">
                <Icon name="bitcoin" iconClassName="lg:w-32 lg:h-20" containerClassName="animate-bounce" />
                <div className={`${defaultTextStyle}  text-center text-8xl w-full`}>
                    TRACK AND TRADE <span className="bg-gradient-to-r from-blue to-pink text-transparent bg-clip-text">CRYPTO CURRENCIES</span>
                </div>
                <Icon name="ethereum" iconClassName="lg:w-32 lg:h-20" />
            </div>
        </section>
    );
};

export default Home;
