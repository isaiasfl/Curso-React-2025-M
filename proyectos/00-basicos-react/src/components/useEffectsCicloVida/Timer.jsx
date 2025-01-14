import { useEffect, useState } from "react";

const Timer = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);


  // useEffect(() => {
  //   // NUNCA  UTILIZAR ASYNC/AWAIT DENTRO
  //   // DE UN USEEFFECT
  //   console.log("Componente montado");
  //   // si no le paso ARRRAY de dependencias
  //   // se ejecuta cada vez que se renderiza
  //   // el componente
  // });
  // useEffect(() => {

  //   console.log("Componente montado sólo una vez");

  // },[]);
  useEffect(() => {
    console.log("Componente renderizado cada vez que se modifica algo del array de dependencias");
  },[counter]);

  return (
    <>
      <div>Timer</div>
      <p>{counter}</p>
      <p>{counter2}</p>
      <button onClick={() => setCounter((prevCounter) => prevCounter + 1)}>
        Iniciar
      </button>
      <p
      <button onClick={() => setCounter2((prevCounter) => prevCounter + 1)}>
        Iniciar contador2
      </button>
    </>
  );
};

export default Timer;
