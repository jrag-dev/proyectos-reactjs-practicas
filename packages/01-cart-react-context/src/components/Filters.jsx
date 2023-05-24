import { useId, useContext} from 'react';
import './Filters.css';
import {FiltersContext} from "../context/FiltersContext.jsx";

export function Filters () {
  const { filters, setFilters } = useContext(FiltersContext)
  const minPriceFilterId = useId();
  const categoryFilterId = useId();
  
  const handleChangeMinPrice = (event) => {
    setFilters(prevState => (
      {
        ...prevState,
        minPrice: event.target.value
      }
    ))
  }
  
  const handleChangeCategory = (event) => {
    setFilters(prevState => (
      {
        ...prevState,
        category: event.target.value
      }
      ))
  }
  
  console.log(minPriceFilterId, categoryFilterId)

  return (
    <section className="filters">
      
      <div>
        <label htmlFor={minPriceFilterId}>Price</label>
        <input
          type='range'
          id={minPriceFilterId}
          min='0'
          max='5000'
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
        <span>${filters.minPrice}</span>
      </div>
      
      <div>
        <label htmlFor={categoryFilterId}>Category</label>
        <select
          id={categoryFilterId}
          onChange={handleChangeCategory}
        >
          <option value='all'>Todas</option>
          <option value='laptops'>Pórtatiles</option>
          <option value='smartphones'>Celulares</option>
        </select>
      </div>
    </section>
  )
}