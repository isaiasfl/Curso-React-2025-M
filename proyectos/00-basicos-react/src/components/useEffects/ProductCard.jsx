const ProductCard = (props) => {
  const { product, addCart } = props;

  const handleClick = () => {
    addCart(product);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between">
      <h2 className="text-xl font-bold">{product.name}</h2>
      <p className="text-gray-600 mb-4">{product.price}</p>
      <button
        className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 
      rounded transition duration-300"
        onClick={handleClick}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ProductCard;
