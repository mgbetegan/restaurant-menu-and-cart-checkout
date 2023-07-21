
import {Product, RootState} from "@/store/types/types.interface";
export default{

    SET_CART_INITIALISE(state:RootState, value: Product[]) {
        state.products = value
    },

    SET_ADD_TO_CART: (state:RootState, item:Product) => {
        item.qte = 1;
       state.products.push(item)
    },

    SET_REMOVE_FROM_CART: (state:RootState, id:number) => {
        state.products = state.products.filter(el=>el.id !== id);
    },

    SET_INCREASE_PRODUCT_QTE_IN_CART: (state:RootState, id:number) => {
        state.products.forEach(el => {
            console.log("hely")
            console.log(id);
            if (id === el.id) {
                el.qte ++;
                console.log('helo');
            }
        });

    },

    SET_DECREASE_PRODUCT_QTE_IN_CART: (state:RootState, id:number) => {
        state.products.map(el => {
                if(el.id == id)
                    el.qte--;
                return el;
        });

        state.products = state.products.filter(el=>el.qte > 0);
    },

    SET_CLEAR_CART:(state:RootState)=>{
        console.log('hello clear')
        state.products = [];
    }





}
