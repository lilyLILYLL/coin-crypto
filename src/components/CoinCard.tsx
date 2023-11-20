import React from "react";
import Image from "next/image";
import { CoinModel, numberWithCommas } from "@shared";
import { defaultTextStyle } from "@constants";
type Props = {
    coin: CoinModel;
};
export const CoinCard = (props: Props) => {
    return (
        <div className="flex flex-col gap-2 items-center ">
            <Image src={props.coin.src} alt={props.coin.name} width={100} height={100} />

            <div className={`${defaultTextStyle} text-2xl`}>
                {props.coin.name}
                <span className="text-green"> {props.coin.atl.toFixed(2)}%</span>
            </div>

            <div className={`${defaultTextStyle} text-2xl`}>$ {numberWithCommas(props.coin.price)}</div>
        </div>
    );
};
