import { CartManager } from "./CartManager"
import { ProductsLister } from "./ProductsLister"

import {Container, Row, Col} from "react-bootstrap"

import Cart, { CartItem } from "../Cart";
import SAMPLE_PRODUCTS, {ProductModel} from "../sample-products";

import {useState} from "react"

const ShoppingManager = () => {

  const defaultCart : Cart = {
    cartItems : [
      {
        product : SAMPLE_PRODUCTS[1], quantity : 5
      },
      {
        product : SAMPLE_PRODUCTS[3], quantity : 10
      },
      {
        product : SAMPLE_PRODUCTS[5], quantity : 15
      }
    ]
  };

  const [cart, setCart] = useState(defaultCart);


  const addToCart = (productItem : ProductModel) => {

    const matchingItem = cart.cartItems.find( (cartItem) => (

      productItem.id === cartItem.product.id
    ))
    
    if (matchingItem){

      const updatedCartItems = cart.cartItems.map( (cartItem) => {

        if (productItem.id === cartItem.product.id){

          const updatedCartItem = {
            product : cartItem.product,
            quantity : cartItem.quantity + 1
          }
          
          return updatedCartItem;
          
        }else{

          const newCartItem = {
            product : cartItem.product,
            quantity : cartItem.quantity
          }

          return newCartItem;
        }

      })

      const updatedCart : Cart = {
        cartItems : updatedCartItems
      }

      setCart(updatedCart);

    }else{

        const newCartItem = {
          product : productItem,
          quantity : 1
        }

        const updatedCartItems = [
          ...cart.cartItems, newCartItem
        ]

        const updatedCart : Cart = {
          cartItems : updatedCartItems
        }

        setCart(updatedCart);
    }
  }

  const removeFromCart = (productItem : ProductModel) => {

    const updatedCartItems : CartItem[] = []

    cart.cartItems.forEach( (cartItem) => {

      if (productItem.id === cartItem.product.id){

        if (cartItem.quantity == 1){
          // If Quantity is 1, we are not adding this to the new array
        }else{

          let updatedCartItem : CartItem = {
            product : cartItem.product,
            quantity : cartItem.quantity - 1
          }

          updatedCartItems.push(updatedCartItem);
        }
      }else{
        updatedCartItems.push(cartItem)
      }

    })

    const updatedCart : Cart = {
      cartItems : updatedCartItems
    }

    setCart(updatedCart);

  }

  return (
    <Container>
      <Row>
        <Col lg={9}><ProductsLister addToCart={addToCart} removeFromCart={removeFromCart}></ProductsLister></Col>
        <Col><CartManager cart={cart}></CartManager></Col>
      </Row>
    </Container>
  )
}

export {ShoppingManager}