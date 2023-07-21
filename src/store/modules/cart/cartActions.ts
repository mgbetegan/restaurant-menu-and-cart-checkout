import {ActionTree} from "vuex";
import {RootState} from "@/store/types/types.interface";

export const cartActions: ActionTree<RootState,RootState> ={

    initializeCart({commit},{data}){
        commit('SET_CART_INITIALISE', data)
    },

    addProductCart({commit},{product}){
        commit('SET_ADD_TO_CART', product)
    },

    removeProductFromCart({commit},{productName}){
        commit('SET_REMOVE_FROM_CART', productName)
    },

    increaseProductQteInCart({commit},{productName}){
        commit('SET_INCREASE_PRODUCT_QTE_IN_CART', productName)
    },

    decreaseProductQteInCart({commit},{productName}){
        commit('SET_DECREASE_PRODUCT_QTE_IN_CART', productName)
    },

    clearCart({commit}){
        commit('SET_CLEAR_CART')
    }




}
