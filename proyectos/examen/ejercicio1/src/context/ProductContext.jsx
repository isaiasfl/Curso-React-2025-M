const API_URL = import.meta.env.VITE_API_URL;
import { createContext, useContext, useEffect, useState } from "react";

// crear el contexto
const ProductContext = createContext();

// crear el provider

export const ProductProvider = ({ children }) => {

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProducts()
  }, [])
  

const fetchProducts = async () => {
  try {
    const response = await fetch(`${API_URL}/api/products`)
    if(!response.ok) {
      throw new Error("No se pudo obtener la información")
    }
    const data = await response.json()
    setProducts(data)
  } catch (error) {
     console.log("Error en la petición", error.message)
      setError(error.message)
  } finally {
    setLoading(false)
  }
}


  return(
    <ProductContext.Provider value={{products, error, loading}}>
      {children}
    </ProductContext.Provider>
  )
}


// crea el hook del contexto y subirlo arriba.

export const useProducts = () => {
  const context = useContext(ProductContext)
  if(!context ) {
    throw new Error("useProducts debe estar dentro del proveedor ProductProvider")
  }
  return context
}