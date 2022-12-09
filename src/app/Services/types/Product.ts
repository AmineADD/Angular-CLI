export type Product = {
    index: number;
    imageUrl: string;
    name: string;
    specifications: {
        color: string;
        weight: number;
        storage?: number; // air pods do not have any storage capacity
        price: number
    }[]
}