import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

import Swal from 'sweetalert2';

import operacionContext from '../context/operaciones/operacionContext';

const Operacion = ({ operacion }) => {

    // Next router
    const router = useRouter();

    // obtener la función del context de operaciones
    const operacionesContext = useContext(operacionContext);
    const { mensaje, eliminarOperacion, operacionActual, } = operacionesContext;

    const { _id, concepto, monto, tipo, categoria } = operacion;
    let { fecha } = operacion;

    fecha = operacion.fecha.substring(0,10);
    
    useEffect(() => {
        if (mensaje.categoria === 'alerta-ok') {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: mensaje.msg,
                width: 400,
                timer: 3000,
                confirmButtonColor: '#60A5FA',
                confirmButtonText: 'Ok!',
            })
        }
    }, [mensaje]);

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
            <p className="flex-1 font-bold text-blue-500 uppercase">{tipo}</p>
            <p className="flex-1">{categoria}</p>
            <p className="flex-1 font-bold">{concepto}</p>
            <p className="flex-1 font-normal">${monto}</p>
            <p className="flex-1 italic">{fecha}</p>
        
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