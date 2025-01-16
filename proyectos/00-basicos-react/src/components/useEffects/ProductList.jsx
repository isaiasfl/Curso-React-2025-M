// lista de productos renderizados

import { useEffect, useState } from "react";
import LiProductList from "./LiProductList";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalCart, setTotalCart] = useState(0)
  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    // aquí realizamos la suma del carrito y 
    // lo guardamos en un estado llamado totalCart
    // que se muestra en el componente
    let totalCart = 0;
  }, [cart]);


  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:5173/src/data/db.json");
      if (!response.ok) {
        throw new Error("Error en la petición");
      }
      setProducts(await response.json());
    } catch (error) {
      throw new Error("Error en la petición ", error);
    }
  };

  const addCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const deleteProductCard = (productId) => {
    // elimino del carrito el producto con id igual a productId
  }

  

  return (
    <div className="w-full max-w-5xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Lista de Libros</h1>
      {/* Div para las productCard */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          // Aquí llamo al componente ProductCard
          <ProductCard key={product.id} product={product} addCart={addCart} />
        ))}
      </div>
      {/*  Div para el UL del carrito */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-center">Carrito de Compras</h2>
        <p className="text-xl font-semibold text-center mb-6">
          {" "}
          Total Carrito:{totalCart}
        </p>
        {cart.length === 0 ? (
          <p className="text-xl font-semibold text-center mb-6">
            {" "}
            Carrito vacío{" "}
          </p>
        ) : (
          <ul>
            {cart.map((product) => (
              <LiProductList
                key={product.id}
                product={product}
                deleteProductCard={deleteProductCard}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProductList;
