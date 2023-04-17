import { useState } from "react";
import "./Formulario.css";
import "../CampoTexto/index.js";
import CampoTexto from "../CampoTexto";
import ListaOptions from "../ListaOptions";
import BotonCrear from "../BotonCrear";

const Formulario = ({ equipos, registrarColabolador, registrarEquipo}) => {

  const [nombre, setNombre] = useState("");
  const [puesto, setPuesto] = useState("");
  const [foto, setFoto] = useState("");
  const [opcion, setOption] = useState("");

  
  const [titulo, setTitulo] = useState("");
  const [color, setColor] = useState("");

  const manejarEnvio = (e) => {
    e.preventDefault();
    let datosEnviar = {
      nombre,
      puesto,
      foto,
      opcion,
    };
    console.log(datosEnviar)
    registrarColabolador(datosEnviar)

  };

  const crearEnvio = (e) => {
    e.preventDefault();
    let datosEquipo ={
      titulo,
      colorPrimario :color
    }
    registrarEquipo(datosEquipo)


  };

  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <div>
          <CampoTexto
            titulo="Nombre"
            placeholder="Ingresar nombre"
            valor={nombre}
            setValor={setNombre}
          />
          <CampoTexto
            titulo="Puesto"
            placeholder="Ingresar puesto"
            valor={puesto}
            setValor={setPuesto}
          />
          <CampoTexto
            titulo="Foto"
            placeholder="Ingresar enlace de foto"
            valor={foto}
            setValor={setFoto}
          />
          <ListaOptions valor={opcion} setValor={setOption} equipos={equipos} />
          <BotonCrear texto="Crear" />
        </div>
      </form>

      <form onSubmit={crearEnvio}>
        <h2>Rellena el formulario para crear equipos.</h2>
        <div>
          <CampoTexto
            titulo="Titulo"
            placeholder="Ingresar titulo"
            valor={titulo}
            setValor={setTitulo}
          />
          <CampoTexto
            titulo="Color"
            placeholder="Ingresar titulo"
            valor={color}
            setValor={setColor}
            type="color"
          />


          <BotonCrear texto='Registrar Equipos' />
        </div>
      </form>
    </section>
  );
};

export default Formulario;
