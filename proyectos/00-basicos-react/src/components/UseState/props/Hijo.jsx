import Nieto from "./Nieto";

const Hijo = (props) => {
  console.log(props);
  const { counter, handleClick } = props;

  return (
    <>
      <div>Hola yo soy tu Hijo</div>
      <p>El contador vale {counter}</p>
      <button
        onClick={handleClick}
        className="bg-blue-600 rounded-lg text-white px-2 py-5 mb-5 mt-6 hover:bg-slate-900"
      >
        Aumento el contador desde el hijo
      </button>
      <Nieto counter={counter }handleClick={handleClick} />
    </>
  );
};

export default Hijo;
