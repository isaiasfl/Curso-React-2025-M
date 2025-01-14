function Nieto2(props) {
  const { handleClick } = props;
  return (
    <>
      <div>Hola yo soy tu nieto</div>;{" "}
      <button
        onClick={handleClick}
        className="bg-green-600 rounded-lg text-white px-2 py-5 mb-5 mt-6 hover:bg-slate-900"
      >
        Aumento el contador desde el nieto
      </button>
    </>
  );
}

export default Nieto2;
