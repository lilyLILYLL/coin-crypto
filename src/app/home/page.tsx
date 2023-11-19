"use client";
import { Tittle, CoinCard } from "@components";
import React from "react";
import axios from "axios";
import { CoinModel } from "@shared";

const Home = () => {
    const [top4Coins, setTop4Coins] = React.useState<CoinModel[] | undefined>();

    React.useEffect(() => {
        axios
            .get<Array<any>>("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
            .then((res) => {
                const map = res.data.map((coin) => ({ src: coin.image, name: coin.name, price: coin.current_price, atl: coin.atl } as CoinModel));
                setTop4Coins(map.slice(0, 4));
            })
            .catch((err) => console.log(err));
    }, []);

    console.log(top4Coins);
    return (
        <section id="home" className="pt-[200px] min-h-screen w-full text-3xl  bg-gradient-to-t from-black from-30% to-darkPurple">
            {/* TITTLE */}
            <Tittle name="TRACK AND TRADE CRYPTO CURRENCIES" />

            {/* TOP 4 COINS */}
            <div className="flex flex-row gap-28 justify-center">
                {top4Coins?.map((coin, index) => {
                    return <CoinCard coin={coin} key={index} />;
                })}
            </div>
        </section>
    );
};

export default Home;
