import "./BotonCrear.css";

const BotonCrear = ({texto}) => {
  return (
    <div className="campo-texto">
      <>
        <button className="boton">{texto}</button>
      </>
    </div>
  );
};

export default BotonCrear;
