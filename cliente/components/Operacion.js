import React, { useContext } from 'react';
import operacionContext from '../context/operaciones/operacionContext';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';
import FormEdicionOperacion from '../pages/editaroperacion';

const Operacion = ({ operacion }) => {

    // Next router
    const router = useRouter();

    // obtener la función del context de operaciones
    const operacionesContext = useContext(operacionContext);
    const { eliminarOperacion, obtenerOperaciones, actualizarOperacion, operacionActual, } = operacionesContext;

    const { _id, concepto, monto, tipo, categoria } = operacion;
    let { fecha } = operacion;

    fecha = operacion.fecha.substring(0,10);
    

    // funcion que redirige de forma programada
    const seleccionarOperacion = operacion => {

        console.log("editando...");
        console.log(operacion);

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
            height: 400,
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }

        }).then((result) => {
            if (result.isConfirmed) {
                // pasarlo al action
                eliminarOperacion(id);
            }
        })
    }

    return (
        
        <div className="flex mb-2 items-center">
            <p className="flex-1 font-bold text-blue-500 uppercase">{tipo}</p>
            <p className="flex-1">{categoria}</p>
            <p className="flex-1 font-bold">{concepto}</p>
            <p className="flex-1 font-normal">${monto}</p>
            <p className="flex-1 italic">{fecha}</p>
        
            <img 
                className="w-8 mr-5 cursor-pointer" src="/editar.png"
                onClick={ () => seleccionarOperacion(_id) }
            />

            <img 
                className="w-8 cursor-pointer" src="/eliminar.png"
                //onClick={() => eliminar() }
                onClick={() => confirmarEliminarOperacion(_id)}
            />

        </div>

    );
}

export default Operacion;