import { useProducts } from "../context/ProductContext";

const ProductList = () => {
  const { products, error, loading } = useProducts();
  return (
    <>
      <h1>Lista de productos</h1>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product._id}>
              {product.name} -- {product.price}
            </li>
          ))}
        </ul>
      )}
      {error && <p>{error}</p>}
    </>
  );
};

export default ProductList;
