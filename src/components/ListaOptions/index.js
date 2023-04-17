import "./ListaOptions.css";

const ListaOptions = ({valor, setValor, equipos}) => {

const manejarCambio = (e)=>{
  setValor(e.target.value) 
}


  return (
    <div className="Lista">
      <label>Equipos</label>
      <select value= {valor} onChange={manejarCambio}>
      <option value='' disabled defaultValue='' hidden>Seleccionar equipo</option>
        {equipos.map((element, index) => <option key={index} value={element}>{element}</option>)};
      </select>
    </div>
  );
};

export default ListaOptions;
