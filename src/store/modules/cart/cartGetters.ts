import {Product, RootState} from "@/store/types/types.interface";


export default {
    getCartContent :(state: RootState) => state.products,
    getCartAmount: (state:RootState) => state.products.reduce((total:number,item) =>total+(item.prix*item.qte), 0),
    getCartTotalProductNumber: (state:RootState) => state.products.reduce((total:number,item) =>total+item.qte, 0),

}
