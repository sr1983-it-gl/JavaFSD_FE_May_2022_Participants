
import Cart from "../Cart";

import SAMPLE_PRODUCTS from "../sample-products";

type CartManagerLocalModel = {
  cart : Cart
}

// const CartManager = (cartModel : CartManagerLocalModel) => {
const CartManager = ({cart} : CartManagerLocalModel) => {

  return (
    <div style={{backgroundColor : "lightgreen"}}>
      
      <h2>Cart Manager</h2>
      <br/>

      {
        cart.cartItems.map( (cartItem) => (

            <div key={cartItem.product.id}>
              {cartItem.product.name} - {cartItem.quantity}
            </div>

        ))
      }
       
    </div>
  );
}

export {CartManager}