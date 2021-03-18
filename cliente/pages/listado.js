import React, { useContext, useEffect } from 'react';
import Layout from '../components/Layout';
import Alerta from '../components/Alerta';
import Operacion from '../components/Operacion';
import authContext from '../context/auth/authContext';
import operacionContext from '../context/operaciones/operacionContext';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Listado = () => {
  // routing 
  const router = useRouter();

  // Extraer el Usuario autenticado del Storage 
  const AuthContext = useContext( authContext );
  const { usuario, usuarioAutenticado } = AuthContext;
  
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
    // si hay un error
    if (mensaje) {
      mostrarAlerta(mensaje.msg, mensaje.categoria);
    }

    obtenerOperaciones();
    // eslint-disable-next-line

  }, [mensaje]);


  // revisar si operaciones tiene contenido
  //if(operaciones.length === 0) return <p>No hay operaciones</p>;

  return ( 
    <Layout>
        <div className="md:w-4/5 xl:w-5/5 mx-auto">
            <h3 className="text-3xl font-sans font-bold text-black-500 text-center my-4"
            >Listado de operaciones de
                <span className="text-blue-500"> {usuario.nombre}</span>
            </h3> 
               
            <div className="bg-gray-300 rounded-lg px-5 py-2">
              {operaciones.map(operacion => 
                  <div key={operacion._id} className=""> <Operacion operacion={operacion}/></div>
              )}
            </div>
        
        </div>

    </Layout>
   );
}
 
export default Listado;