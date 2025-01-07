import { useState } from "react";

const Contador = () => {
  // -------- espacio para los hooks-------------
  const [total, setTotal] = useState(0)
  // --------- espacio para declarar funciones ------------
  function handleClick(numero=1) {
    setTotal(total + numero)
    console.log(total)
  }


  return (
    <>
      <h1>Contador en React</h1>
      <h2>{total}</h2>
      <button onClick={()=>handleClick(10)}>Incrementar</button>
      <button onClick={()=>handleClick(-10)}>Decrementar</button>
    </>
  );
};

export default Contador;
