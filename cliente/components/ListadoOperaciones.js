import React, { useContext, useEffect } from 'react';

import Operacion from '../components/Operacion';

import authContext from '../context/auth/authContext';
import operacionContext from '../context/operaciones/operacionContext';

const ListadoOperaciones = () => {

    // Extraer el Usuario autenticado del Storage 
    const AuthContext = useContext( authContext );
    let { usuario, usuarioAutenticado } = AuthContext;

    usuario = usuario || {};

    // extraer operaciones de state inicial
    const operacionesContext = useContext(operacionContext);
    const { operaciones, mensaje, obtenerOperaciones } = operacionesContext;

    useEffect(() => {
    const token = localStorage.getItem('token');

    if(token) {
        usuarioAutenticado()
    } else {
        router.push('/login');
    }

    obtenerOperaciones();
    // eslint-disable-next-line
    }, [mensaje]);

    return (
        <div>
            { (operaciones.length === 0) ?
                (<p className="text-2xl font-sans font-bold text-blue-500 text-center my-4">No hay operaciones</p>
                ) : (  
                    <div className="bg-gray-300 rounded-lg px-5 py-2">
                        {operaciones.map(operacion => 
                            <div key={operacion._id} className=""> <Operacion operacion={operacion}/></div>
                        )}
                    </div>
                )
            }
        </div>
    );
}
 
export default ListadoOperaciones;