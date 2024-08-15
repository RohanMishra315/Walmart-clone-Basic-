import { ADD_TO_CART } from "../actionsType";
import { REMOVE_FROM_CART } from "../actionsType";
import { UPDATE_CART_QUANTITY } from "../actionsType";
import { CLEAR_CART } from "../actionsType";

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item
})

export const removeFromCart = (itemId) => ({
  type: REMOVE_FROM_CART,
  payload: {itemId}
})

export const updateCartQuantity = (itemId, quantity) => ({
  type : UPDATE_CART_QUANTITY,
  payload: { itemId,quantity}
})

export const clearCart = () => ({
  type: CLEAR_CART
})