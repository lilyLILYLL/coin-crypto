"use client";
import { Tittle, CoinCard, Button } from "@components";
import React from "react";
import axios from "axios";
import { CoinModel } from "@shared";
import { useDimensions } from "@hooks";
import { SpinLoader } from "@images";

const Home = () => {
    const [top4Coins, setTop4Coins] = React.useState<CoinModel[] | undefined>();
    const dimensions = useDimensions();

    React.useEffect(() => {
        axios
            .get<Array<any>>("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
            .then((res) => {
                const map = res.data.map((coin) => ({ src: coin.image, name: coin.name, price: coin.current_price, atl: coin.atl } as CoinModel));
                setTop4Coins(map.slice(0, 4));
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <section id="home" className="pt-[200px] min-h-screen w-full text-3xl  bg-gradient-to-t from-black from-30% to-darkPurple lg:p-28 lg:pt-[200px] p-10 ">
            {/* TITTLE */}
            <Tittle name="TRACK AND TRADE CRYPTO CURRENCIES" gradientFrom={3} />

            {/* TOP 4 COINS */}
            {dimensions.width > 768 && (
                <div className="flex flex-row gap-28 justify-center flex-wrap py-20 w-full">
                    {top4Coins?.map((coin, index) => {
                        return <CoinCard coin={coin} key={index} />;
                    })}
                </div>
            )}

            {/* MOBILE SCREEN */}
            {!!dimensions.width && dimensions.width <= 768 && <Button name="See Prices &#8623;" href="#market" />}
        </section>
    );
};

export default Home;
