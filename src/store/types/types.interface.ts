export interface Product{

    "id": number,
    "nom": string,
    "description": string,
    "prix": number,
    "image": string,
    "qte":number ,
}

export interface RootState {
    products: Product[],
    amount: number,
}
