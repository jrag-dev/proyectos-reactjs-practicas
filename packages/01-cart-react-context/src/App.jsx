import {useContext, useState} from "react"
import { Products } from "./components/products"
import { products as initialProducts } from "./mocks/products.json"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { IS_DEVELOPMENT } from './config.js'
import { useFilters } from "./hooks/useFilters.js";
import {Cart} from "./components/Cart.jsx";


function App() {
  const [products] = useState(initialProducts)
  const { filters, filterProducts, setFilters } = useFilters()
  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header />
      <Cart/>
      <Products 
        products={filteredProducts}
      />
    
      {
        IS_DEVELOPMENT && <Footer />
      }
    </>
  )
}

export default App
