import { AddToCartIcon, RemoveFromCartIcon} from "./Icons";

import './Products.css';
import {useCart} from "../hooks/useCart.js";


export function Products ({ products }) {
  const { cart, addToCart, deleteProductCart } = useCart()
  
  const checkProductInCart = product => {
    return cart.some(item => item.id === product.id);
  }
  
  return (
    <main className="products">
      <ul>
        {
          products.map( product => {
            const isProductInCart = checkProductInCart(product)
            return (
              <li key={product.id}>
              <img 
                src={product.thumbnail} 
                alt={product.title}
              />
              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>
              <div>
                <button className={`${isProductInCart ? 'product-remove' : 'product-add'}`} onClick={() => isProductInCart ? deleteProductCart(product) : addToCart(product)}>
                  {
                    isProductInCart
                      ? <RemoveFromCartIcon/>
                      : <AddToCartIcon/>
                  }
                </button>
              </div>
            </li>
            )  
          })
        }
      </ul>
    </main>
  )
}