
import {Product, RootState} from "@/store/types/types.interface";
export default{

    SET_CART_INITIALISE(state:RootState, value: Product[]) {
        state.products = value
    },

    SET_ADD_TO_CART: (state:RootState, item:Product) => {
        item.qte = 1;
       state.products.push(item)
    },

    SET_REMOVE_FROM_CART: (state:RootState, name:string) => {
        state.products = state.products.filter(el=>el.nom !== name);
    },

    SET_INCREASE_PRODUCT_QTE_IN_CART: (state:RootState, name:string) => {
        state.products.forEach(el => {
            if (name === el.nom) {
                el.qte ++;
            }
        });

    },

    SET_DECREASE_PRODUCT_QTE_IN_CART: (state:RootState, name:string) => {
        state.products.map(el => {
                if(el.nom == name)
                    el.qte--;
                return el;
        });

        state.products = state.products.filter(el=>el.qte > 0);
    },

    SET_CLEAR_CART:(state:RootState)=>{
        state.products = [];
    }





}
