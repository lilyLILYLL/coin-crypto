export interface CoinModel {
    src: string;
    name: string;
    price: number;
    atl: number;
}

export const numberWithCommas = (x: number) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
