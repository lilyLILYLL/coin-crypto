import Image from "next/image";
import { Bitcon, ChooseMain, FooterBg, Ethereum } from "@images";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type Props = {
    name: "bitcoin" | "chooseMain" | "ethereum" | "footer-bg";
    containerClassName?: string;
    iconClassName?: string;
};
export const Icon = (props: Props) => {
    let imgSource: StaticImport = Bitcon;
    switch (props.name) {
        case "chooseMain":
            imgSource = ChooseMain;
            break;
        case "footer-bg":
            imgSource = FooterBg;
            break;
        case "ethereum":
            imgSource = Ethereum;
            break;
        default:
            break;
    }

    return (
        <div className={props.containerClassName}>
            <Image src={imgSource} alt={props.name} className={props.iconClassName} />
        </div>
    );
};
