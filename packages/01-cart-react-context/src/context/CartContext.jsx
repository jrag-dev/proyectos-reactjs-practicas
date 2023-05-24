import {createContext, useReducer } from "react";
import { cartReducer, cartInitialState } from "../reducers/CartReducer.jsx";

export const CartContext = createContext(1);

function useCartReducer () {
	const [state, dispatch] = useReducer(cartReducer, cartInitialState)

	const addToCart = product => dispatch({
		type: 'ADD_TO_CART',
		payload: product
	})

	const deleteProductCart = product => dispatch({
		type: 'REMOVE_FROM_CART',
		payload: product
	})

	const clearCart = () => dispatch({ type: 'CLEAR_CART' })
	
	return { state, addToCart, deleteProductCart, clearCart }
}
export function CartProvider ({ children }) {
	
	const { state, addToCart, deleteProductCart, clearCart } = useCartReducer()

	const data = {
		cart: state,
		addToCart,
		deleteProductCart,
		clearCart
	}

	return (
		<CartContext.Provider value={data}>
			{ children }
		</CartContext.Provider>
		)
	}