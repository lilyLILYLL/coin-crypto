import Image from "next/image";
import { Bitcon, ChooseMain, FooterBg, Ethereum } from "@images";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type Props = {
    sourcePath: string;
    containerClassName?: string;
    iconClassName?: string;
};
export const Icon = (props: Props) => {
    return (
        <div className={props.containerClassName}>
            <Image src={props.sourcePath} alt={props.sourcePath} className={props.iconClassName} width={20} height={20} />
        </div>
    );
};
