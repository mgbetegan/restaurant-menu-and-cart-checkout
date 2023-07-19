import {Product} from "@/store/types/types.interface";

export default {
    getCartContent :(state: { content: Array<Product>; }) => state.content,
}
