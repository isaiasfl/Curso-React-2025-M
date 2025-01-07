import { useState } from "react";

const ContadorDoble = () => {
  // hooks
  const [friends, setFriends] = useState({ Juan: 0, Pedro: 0, Maria: 0 });
  const [pAmigos, setPAmigos] = useState(0);
  // funciones
  function handleClick(nombre, valor) {
    setFriends((prevFriends) => {
      promedioAmigos();
      return {
        ...prevFriends,
        [nombre]:
          prevFriends[nombre] == 0 && valor < 0
            ? 0
            : prevFriends[nombre] + valor,
      };
    });
  }

  const promedioAmigos = () => {
    // calcular el promedio de amigos de friends
    const numAmigosArray = Object.values(friends);
    const totalAmigos = numAmigosArray.reduce(
      (acc, numAmigo) => acc + numAmigo,
      0
    );
    setPAmigos(
      numAmigosArray.length > 0 ? totalAmigos / numAmigosArray.length : 0
    );
  };

  return (
    <>
      <h1 className="text-2xl bg-cyan-600 text-center">Contador de amigos</h1>
      <div className="text-center mt-10">
        <span className="mb-5 ">
          {" "}
          Juan tiene <strong> {friends.Juan} </strong> amigos
        </span>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold 
        py-2 px-2 rounded"
          onClick={() => handleClick("Juan", 1)}
        >
          Incrementar
        </button>
        <button
          className="bg-green-400 hover:bg-green-700 text-white font-bold 
        py-2 px-2 rounded"
          onClick={() => handleClick("Juan", -1)}
        >
          Decrementar
        </button>
      </div>
      <div className="text-center mt-10">
        <span className="mb-5 ">
          {" "}
          María tiene <strong> {friends.Maria} </strong> amigos
        </span>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold 
        py-2 px-2 rounded"
          onClick={() => handleClick("Maria", 1)}
        >
          Incrementar
        </button>
        <button
          className="bg-green-400 hover:bg-green-700 text-white font-bold 
        py-2 px-2 rounded"
          onClick={() => handleClick("Maria", -1)}
        >
          Decrementar
        </button>
      </div>
      <div className="text-center mt-10">
        <span className="mb-5 mx-10">{pAmigos} Promedio de amigos</span>
      </div>
    </>
  );
};

export default ContadorDoble;
