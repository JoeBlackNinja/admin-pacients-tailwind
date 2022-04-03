import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoPacientes from './components/ListadoPacientes';
import {useState} from 'react';

function App() {
  const [pacientes,setPacientes] = useState([]);

  return (
    <div className="container mx-auto mt-10">
       <Header
        numeros={1}
        isAdmin={false}
       />
       <div className='mt-12 flex'>
         <Formulario/>
         <ListadoPacientes/>
       </div>
    </div>      
  );
}

export default App;
