import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = () =>{
    const [nombre,setNombre] = useState('');
    const [propietario,setPropietario] = useState('');
    const [correo,setCorreo] = useState('');
    const [fecha,setFecha] = useState('');
    const [sintomas,setSintomas] = useState('');    

    const [error,setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        //Validacion de los datos de entrada
        if([nombre,propietario,correo,fecha,sintomas].includes('')){
            console.log("No se permiten campos vacios");

            setError(true);
        } else {
            setError(false);
        }
    }

    return(
        <div className="md:w-1/2 lg:w-3/3">
            <h3 className="font-black text-3xl text-center">Seguimiento pacientes</h3>
            <p className="text-lg mt-5 text-center mb-10">
                Añade pacientes y 
                <span className="text-indigo-600 font-bold"> Administralos</span>
            </p>
            <form  className="bg-white shadow-md rounded-lg py-10 px-4"
                    onSubmit={handleSubmit}>

                {error && <Error>No se permiten campos vacios</Error> }
                    
                

                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-gray-600 uppercase font-bold">Nombre mascota</label>
                    <input
                        id="mascota" 
                        type="text"
                        placeholder="Nombre de tu mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-indigo-700 rounded-md"
                        value={nombre}
                        onChange={ (e) => setNombre(e.target.value) }
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="propietario" className="block text-gray-600 uppercase font-bold">Nombre propietario</label>
                    <input
                        id="propietario" 
                        type="text"
                        placeholder="Ingresa tu nombre"
                        className="border-2 w-full p-2 mt-2 placeholder-indigo-700 rounded-md"
                        value={propietario}
                        onChange={ (e) => setPropietario(e.target.value) }
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="correo" className="block text-gray-600 uppercase font-bold">Correo</label>
                    <input
                        id="correo" 
                        type="email"
                        placeholder="Ingresa tu correo"
                        className="border-2 w-full p-2 mt-2 placeholder-indigo-700 rounded-md"
                        value={correo}
                        onChange={ (e) => setCorreo(e.target.value) }
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="fecha" className="block text-gray-600 uppercase font-bold">Fecha</label>
                    <input
                        id="fecha" 
                        type="date"
                        className="border-2 w-full p-2 mt-2 placeholder-indigo-700 rounded-md"
                        value={fecha}
                        onChange={ (e) => setFecha(e.target.value) }
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-gray-600 uppercase font-bold">Síntomas</label>
                    <textarea
                        id="sintomas"
                        className="border-2 w-full p-2 mt-2 placeholder-indigo-700 rounded-md"
                        placeholder="Desciba los sintomas"
                        value={sintomas}
                        onChange={ (e) => setSintomas(e.target.value) }
                    />                    
                </div>
                <input  
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-500
                    cursor-pointer transition-colors"
                    value="Agregar paciente"
                />                       
            </form>
            
        </div>
    );
}

export default Formulario;