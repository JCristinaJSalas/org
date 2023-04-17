import "./Colaborador.css";
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Colaboradores = (props) => {
  const { nombre, puesto, foto, equipo, id , fav} = props.datos;
  const { colorPrimario, eliminarColaborador, like } = props;

/*   const eliminar = () => {
    eliminarColaborador;
  }; */


  return (
    <div className="colaborador">
      <AiFillCloseCircle onClick={() => eliminarColaborador(id)} className="eliminar"/>
      <div className="encabezado" style={{ backgroundColor: colorPrimario }}>
        <img src={foto} alt={nombre} />
      </div>
      <div className="info">
        <h4>{nombre}</h4>
        <h5>{puesto}</h5>
        {(fav) === true ? <AiFillHeart color = 'red' onClick={() => like(id)}/> : <AiOutlineHeart onClick={() => like(id)}/>}
        
      </div>
    </div>
  );
};

export default Colaboradores;
