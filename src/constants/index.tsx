import { ReactElement } from "react";
import { IconWallet, IconPencilBolt, IconChecklist, IconDeviceMobileMessage, IconMoneybag, IconStack } from "@tabler/icons-react";
export const defaultTextStyle = "font-space-grotesk font-bold text-white ";
export type Benefit = {
    icon: JSX.Element;
    title: string;
    description: string;
};
export const WHY_CHOOSE_US: Benefit[] = [
    {
        icon: <IconWallet />,
        title: "CONNECT YOUR WALLET",
        description: "Use Trust Wallet, Metamask or to connect to the app.",
    },
    {
        icon: <IconPencilBolt />,
        title: "SELECT YOUR QUANTITY",
        description: "Upload your crypto and set a title, description and price.",
    },
    {
        icon: <IconChecklist />,
        title: "CONFIRM TRANSACTION",
        description: "Earn by selling your crypto on our marketplace.",
    },
    {
        icon: <IconDeviceMobileMessage />,
        title: "RECEIVE YOUR OWN NFTS",
        description: "Invest all your crypto at one place on one platform.",
    },
    {
        icon: <IconMoneybag />,
        title: "TAKE A MARKET TO SELL",
        description: "Discover, collect the right crypto collections to buy or sell.",
    },
    {
        icon: <IconStack />,
        title: "DRIVE YOUR COLLECTION",
        description: "We make it easy to Discover, Invest and manage.",
    },
];
