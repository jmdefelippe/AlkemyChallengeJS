import React from 'react';

const Operacion = ({ operacion }) => {

    const { concepto, monto, tipo, categoria } = operacion;
    let { fecha } = operacion;

    fecha = operacion.fecha.substring(0,10);

    return (
        <div className="flex mb-2 items-center">
            <h2 className="flex-1 font-bold text-blue-500 uppercase">{tipo}</h2>
            <h2 className="flex-1">{categoria}</h2>
            <h2 className="flex-1 font-bold">{concepto}</h2>
            <h2 className="flex-1 font-normal">${monto}</h2>
            <h2 className="flex-1 italic">{fecha}</h2>
        
            <img 
                onClick={() => editarOperacion() }
                className="w-8 mr-5 cursor-pointer" src="/editar.png" 
            />

            <img 
                onClick={() => eliminarOperacion() }
                className="w-8 cursor-pointer" src="/eliminar.png" 
            />
         
        </div>
    );
}

export default Operacion;