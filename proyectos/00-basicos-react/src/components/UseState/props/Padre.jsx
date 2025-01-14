import { useState } from "react";
import Hijo from "./Hijo";

const Padre = () => {
  const [counter, setCounter] = useState(0);
    const handleClick = () => {
      setCounter((prevCounter) => prevCounter + 1);
    };
  return (
    <>
      <div>Hola soy tu Padre</div>
      <p>El contador vale {counter}</p>
      <Hijo counter={counter} handleClick={handleClick} />
    </>
  );
};

export default Padre;
