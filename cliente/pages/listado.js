import React, { useContext, useEffect } from 'react';
import Layout from '../components/Layout';
import Alerta from '../components/Alerta';
import authContext from '../context/auth/authContext';
import appContext from '../context/app/appContext';
import Link from 'next/link';


const Listado = () => {

  // Extraer el Usuario autenticado del Storage 
  const AuthContext = useContext( authContext );
  const { usuarioAutenticado } = AuthContext;

  // Extraer el mensaje de error de archivos
  const AppContext = useContext( appContext );
  const { mensaje_archivo, url } = AppContext;
  
  useEffect(() => {
    const token = localStorage.getItem('token');

    if(token) {
      usuarioAutenticado()
    }
   
  }, []);

  return ( 
    <Layout>
        <div className="md:w-4/5 xl:w-3/5 mx-auto">
            <h2 className="text-3xl font-sans font-bold text-black-500 text-center my-4">Listado</h2> 
   
        </div>

    </Layout>
   );
}
 
export default Listado;