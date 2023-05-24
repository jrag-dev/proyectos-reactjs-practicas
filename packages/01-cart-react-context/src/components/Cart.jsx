import {CartIcon, ClearCartIcon} from './Icons';
import {useId} from "react";

import { useCart } from "../hooks/useCart.js";
import './Cart.css';


function CartItem ({ thumbnail, price, title, quantity, addToCart }) {
	return (
		<li>
			<img
				src={thumbnail}
				alt={title}
			/>
			<div>
				<strong>iPhone</strong> - ${price}
			</div>

			<footer>
				<small>
					Qty: {quantity}
				</small>
				<button onClick={addToCart}>+</button>
			</footer>
		</li>
	)
}

export function Cart () {
	const { cart, addToCart, clearCart } = useCart()
	const cartCheckbocId = useId();
	
	return (
		<section className="cart-section">
			<label className="cart-button" htmlFor={cartCheckbocId}>
				<CartIcon/>
			</label>
			<input id={cartCheckbocId} type='checkbox' hidden />
			
			<aside className="cart">
				<ul>
					{
						cart.length > 0 && cart.map(item => (
							<CartItem
								key={item.id}
								thumbnail={item.thumbnail}
								price={item.price}
								title={item.title}
								quantity={item.quantity}
								addToCart={() => addToCart(item)}
							/>	
						))
					}
				</ul>
				<button onClick={clearCart}>
					<ClearCartIcon/>
				</button>
			</aside>
		</section>
	)
}