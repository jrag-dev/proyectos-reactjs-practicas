import {useContext} from "react";
import {FiltersContext} from "../context/FiltersContext.jsx";
import {useCart} from "../hooks/useCart.js";

export function Footer () {
	const { filters } = useContext(FiltersContext)
	const { cart } = useCart()
	
	return (
		<footer className="footer">
			{
				JSON.stringify(cart, null, 2)
			}
		</footer>
	)
}