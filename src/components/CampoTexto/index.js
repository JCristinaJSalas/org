
import "./CampoTexto.css";

const CampoTexto = ({titulo, placeholder, valor, setValor, type ='text'}) => {

  const manejarCambio= (e) =>{
    setValor(e.target.value)
  }

  return (
    <div className={`campo campo-${type}`}>
      <>
        <label>{titulo}</label>
        <input 
          placeholder={placeholder}   
          required 
          value={valor} 
          onChange={manejarCambio}
          type={type}/>

      </>
    </div>
  );
};

export default CampoTexto;
