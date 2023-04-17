import { useState } from "react";
import "./App.css";
import Formulario from "./components/Formulario/Formulario";
import Header from "./components/Header/Header";
import Equipo from "./components/Equipo";
import MiOrg from "./components/Miorg";
import Footer from "./components/Footer";
import {v4 as uuidv4} from "uuid"

function App() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [colaboradores, setColaboradores] = useState([  
    {
      id: uuidv4(),
    opcion: "Programacion",
    foto: "https://github.com/genesysaluralatam.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora",
    fav:true
  },
  {
    id: uuidv4(),
    opcion: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor",
    fav:false
  },

  {
    id: uuidv4(),
    opcion: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    fav:true
  }]);

const [equipos, setEquipos] = useState([
  {
    id: uuidv4(),
    titulo: "Programacion",
    colorPrimario: "#57c278",
    colorSecundario: "#d9f7e9",
  },
  {
    id: uuidv4(),
    titulo: "Front End",
    colorPrimario: "#82cffa",
    colorSecundario: "#e8f8ff",
  },
  {
    id: uuidv4(),
    titulo: "Data Science",
    colorPrimario: "#a6d157",
    colorSecundario: "#f0f8e2",
  },
  {
    id: uuidv4(),
    titulo: "Devops",
    colorPrimario: "#e06b69",
    colorSecundario: "#fde7e8",
  },
  {
    id: uuidv4(),
    titulo: "UX y Diseño",
    colorPrimario: "#db6ebf",
    colorSecundario: "#fae9f5",
  },
  {
    id: uuidv4(),
    titulo: "Movil",
    colorPrimario: "#ffba05",
    colorSecundario: "#fff5d9",
  },
  {
    id: uuidv4(),
    titulo: "Innovacion y Gestion",
    colorPrimario: "#ff8a29",
    colorSecundario: "#ffeedf",
  },
]
)

  const CambioEstado = () => {
    setMostrarFormulario(!mostrarFormulario);
  };

  const registrarColabolador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  const registrarEquipo = (datosEquipo) => {
    console.log(datosEquipo)
    setEquipos([...equipos, {...datosEquipo, id : uuidv4()}])
  }

  const eliminarColaborador = (id) =>{
    console.log('eliminado',id)
    const nuevoColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    setColaboradores(nuevoColaboradores)
  }

  const actualizarColor = (color, id) =>{
    const equiposActualizados = equipos.map( (equipo) =>{
      if(equipo.id === id){
          equipo.colorPrimario = color
      }
      return equipo
    })
    setEquipos(equiposActualizados)
  }

  const like = (id) =>{
    console.log('like', id)
    const colaboradoresFav = colaboradores.map((colaborador) =>{
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    setColaboradores(colaboradoresFav)
  }


  return (
    <div className="App">
      <Header />

      <MiOrg setCambio={CambioEstado} />

      {
        mostrarFormulario && <Formulario 
          equipos={equipos.map((equipo)=> equipo.titulo)}
          registrarColabolador = {registrarColabolador}
          registrarEquipo={registrarEquipo}
           /> 
      }

      {
        equipos.map((equipo) => <Equipo
          datos={equipo}
          key={equipo.titulo}
          colaboradores={colaboradores.filter(colaborador => colaborador.opcion === equipo.titulo)}
          eliminarColaborador ={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
        />
        )
      }
      <Footer/>
    </div>
  );
}
// https://github.com/JCristinaJSalas.png


export default App;
