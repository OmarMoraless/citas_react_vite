
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoPacientes from './components/ListadoPacientes';
import { useState,useEffect } from 'react';
import Paciente from './components/Paciente';
import './index.css'


function App() {
 

  const INITIAL = JSON.parse(localStorage.getItem('pacientes')) ?? [];
  const[pacientes, setPacientes]=useState(INITIAL);
  const[paciente, setPaciente] = useState({});


  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes]);


  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)
    setPacientes(pacientesActualizados)
  }
  
 


  return (
 
   <div className="container mx-auto mt-20">
      <Header></Header>
      



      <div className='mt-12 md:flex'>
      <Formulario
        pacientes = {pacientes}
        setPacientes = {setPacientes}
        paciente = {paciente}
        setPaciente = {setPaciente}
      ></Formulario>


     <ListadoPacientes
      pacientes = {pacientes}
      setPaciente = {setPaciente}
      eliminarPaciente = {eliminarPaciente}
     ></ListadoPacientes>


      </div>
   
   </div>


  )
}

export default App
