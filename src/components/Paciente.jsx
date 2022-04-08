const Paciente = ({paciente}) => {

  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre:{' '}
          <span className="font-normal normal-case">{paciente.nombre}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario:{' '}
          <span className="font-normal normal-case">{paciente.propietario}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Correo:{' '}
          <span className="font-normal normal-case">{paciente.correo}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha:{' '}
          <span className="font-normal normal-case">{paciente.fecha}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas:{' '}
          <span className="font-normal normal-case">{paciente.sintomas}</span>
        </p>
      </div>
  )
}

export default Paciente