import {ActionTree} from "vuex";
import {RootState} from "@/store/types/types.interface";

export const cartActions: ActionTree<RootState,RootState> ={

    initializeCart({commit},{data}){
        commit('SET_CART_INITIALISE', data)
    },

    addProductCart({commit},{product}){
        commit('SET_ADD_TO_CART', product)
    },

    removeProductFromCart({commit},{productId}){
        commit('SET_REMOVE_FROM_CART', productId)
    },

    increaseProductQteInCart({commit},{productId}){
        commit('SET_INCREASE_PRODUCT_QTE_IN_CART', productId)
    },

    decreaseProductQteInCart({commit},{productId}){
        commit('SET_DECREASE_PRODUCT_QTE_IN_CART', productId)
    },

    clearCart({commit}){
        commit('SET_CLEAR_CART')
    }




}
