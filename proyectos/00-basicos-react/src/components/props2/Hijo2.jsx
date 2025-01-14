import Nieto2 from "./Nieto2";

const Hijo2 = (props) => {
  console.log(props);
  return (
    <>
      <div>Hola yo soy tu Hijo</div>
      {props.children}
    </>
  );
};

export default Hijo2;
