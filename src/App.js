import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoPacientes from './components/ListadoPacientes';
import {useState} from 'react';

function App() {
  const [pacientes,setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  const eliminarPaciente = (id) => {
    const pacientesActualizado = pacientes.filter(
      paciente => paciente.id != id
    )
    setPacientes(pacientesActualizado);
  }

  return (
    <div className="container mx-auto mt-10">
       <Header/>
       <div className='mt-12 flex'>
         <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
         />
         <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
         />
       </div>
    </div>      
  );
}

export default App;
