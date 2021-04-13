import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

import Swal from 'sweetalert2';

import operacionContext from '../context/operaciones/operacionContext';

const Operacion = ({ operacion }) => {

    // Next router
    const router = useRouter();

    // obtener la función del context de operaciones
    const operacionesContext = useContext(operacionContext);
    const { eliminarOperacion, operacionActual, } = operacionesContext;

    const { _id, concepto, monto, tipo, categoria } = operacion;
    let { fecha } = operacion;

    fecha = operacion.fecha.substring(0,10);
    
    // funcion que redirige de forma programada
    const seleccionarOperacion = operacion => {
        operacionActual(operacion);
        router.push('/editaroperacion');
    }

    // confirmar si desea eliminarlo
    const confirmarEliminarOperacion = id => {
        // preguntar al usuario
        Swal.fire({
            title: 'Estás seguro?',
            text: "Una operación que se elimina no se puede recuperar",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#60A5FA',
            cancelButtonColor: '#000000',
            confirmButtonText: 'Sí, eliminar!',
            cancelButtonText: 'Cancelar',
            width: 400,
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }

        }).then((result) => {
            if (result.isConfirmed) {
                eliminarOperacion(id);
            }
        })
    }

    return (
        <div className="flex flex-wrap my-2 items-center">
            <p className="flex-1 font-bold text-blue-500 uppercase text-sm lg:text-base">{tipo}</p>
            <p className="hidden lg:flex lg:flex-1 text-sm lg:text-base">{categoria}</p>
            <p className="flex-1 font-bold text-sm lg:text-base">{concepto}</p>
            <p className="flex-1 font-normal text-sm lg:text-base">${monto}</p>
            <p className="flex-1 italic text-sm lg:text-base">{fecha}</p>
        
            <img 
                className="w-6 mr-5 cursor-pointer" src="/editar.png"
                onClick={ () => seleccionarOperacion(_id) }
            />

            <img 
                className="w-6 cursor-pointer" src="/eliminar.png"
                //onClick={() => eliminar() }
                onClick={() => confirmarEliminarOperacion(_id)}
            />

        </div>
    );
}

export default Operacion;