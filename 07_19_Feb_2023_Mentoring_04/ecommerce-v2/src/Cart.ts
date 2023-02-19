
import {ProductModel} from "./sample-products"

export type CartItem = {

  product : ProductModel,
  quantity : number
}

type Cart = {

  cartItems : CartItem[];

}

export default Cart;

// module.exports = {CartItem, Cart}