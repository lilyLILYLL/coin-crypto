"use client";
import React from "react";
import { CoinModel, numberWithCommas } from "@shared";
import axios from "axios";
import { defaultTextStyle } from "@constants";
import Image from "next/image";

const Market = () => {
    const [coins, setCoins] = React.useState<CoinModel[] | undefined>();

    React.useEffect(() => {
        axios
            .get<Array<any>>("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
            .then((res) => {
                const map = res.data.map((coin) => ({ src: coin.image, name: coin.name, price: coin.current_price, atl: coin.atl, rank: coin.rank } as CoinModel));
                setCoins(map);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <section id="market" className="min-h-screen w-full text-3xl bg-black md:p-28 p-10 overflow-y-hidden">
            <h3 className={`${defaultTextStyle} text-6xl mb-10`}>Market Update</h3>
            <table className="lg:w-full mx-auto rounded-xl w-[800px]">
                <thead className="">
                    <tr className="bg-gradient-to-r  from-blue to-pink ">
                        <th scope="col" className={`${defaultTextStyle} w-[25%] text-xl px-6 py-6 text-left `}>
                            Coin
                        </th>
                        <th scope="col" className={`${defaultTextStyle} w-[20%] text-xl px-6 py-6`}>
                            Price
                        </th>
                        <th scope="col" className={`${defaultTextStyle} w-[25%] text-xl px-6 py-6`}>
                            Change
                        </th>
                        <th scope="col" className={`${defaultTextStyle} w-[30%] text-xl px-6 py-6 `}>
                            Market Cap
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {coins?.map((coin, index) => (
                        <tr key={index} className="border-b border-gray hover:bg-darkPurple ">
                            <td className={`${defaultTextStyle} text-xl px-6 py-6 flex flex-row items-center gap-4`}>
                                <Image src={coin.src} alt={coin.name} width={50} height={50} />
                                {coin.name}
                            </td>
                            <td className={`${defaultTextStyle} text-xl px-6 py-6 text-center`}> $ {numberWithCommas(coin.price)}</td>
                            <td className={`${defaultTextStyle} text-xl px-6 py-6 text-center text-green`}> {coin.atl.toFixed(2)} %</td>
                            <td className={`${defaultTextStyle} text-xl px-6 py-6 text-center`}> $ {numberWithCommas(coin.price)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
};

export default Market;
