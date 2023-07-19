import cartState from "@/store/modules/cart/cartState";
import cartGetters from "@/store/modules/cart/cartGetters";
import cartMutations from "@/store/modules/cart/cartMutations";
import {cartActions} from "@/store/modules/cart/cartActions";
export default {
    namespaced: true,
    state:cartState,
    getters:cartGetters,
    mutations:cartMutations,
    actions:cartActions
}
