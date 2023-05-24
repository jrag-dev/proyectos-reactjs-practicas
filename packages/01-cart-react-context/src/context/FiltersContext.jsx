import {createContext, useState} from 'react';

// Crear el context
export const FiltersContext = createContext();

// Crear el provider, para proveer el contexto a los componentes
export function FiltersProvider ({ children }) {
	const [filters, setFilters] = useState({
		category: 'all',
		minPrice: 0
	})
	
	const data = {
		filters,
		setFilters
	}
	
	return (
		<FiltersContext.Provider value={data}>
			{ children }
		</FiltersContext.Provider>
	)
}