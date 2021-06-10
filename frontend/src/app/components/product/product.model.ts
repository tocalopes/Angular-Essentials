export enum ProductType {
    UBER = 1,
    FOOD = 2,
    FIXED_BILLS = 3,
    SHOPPING = 4
}

export interface Product {
   
    id? : number; //opcional
    name : string;
    price: number;
    productType : ProductType;
}