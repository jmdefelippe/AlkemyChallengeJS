import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

import Layout from '../components/Layout';
import ListadoOperacionesRecientes from '../components/ListadoOperacionesRecientes';
import Balance from '../components/Balance';

import authContext from '../context/auth/authContext';
import operacionContext from '../context/operaciones/operacionContext';

const Index = () => {

    // routing 
    const router = useRouter();

    // Extraer el Usuario autenticado del Storage 
    const AuthContext = useContext( authContext );
    let { usuario, usuarioAutenticado } = AuthContext;

    // extraer operaciones de state inicial
    const operacionesContext = useContext(operacionContext);
    const { operaciones } = operacionesContext;

    usuario = usuario || {};

    useEffect(() => {
      const token = localStorage.getItem('token');

      if(token) {
        usuarioAutenticado();
      } else {
        router.push('/login');
      }
    
      // eslint-disable-next-line
    }, []);

    
    return ( 
        <div>
            {
                usuario ? (
                  <Layout>
                      <div className="md:w-4/5 xl:w-4/5 mx-auto">
                        
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-sans font-bold text-black-500 text-center my-4"
                        >Balance de operaciones de
                            <span className="text-blue-500"> {usuario.nombre} </span>
                        </h3>

                        <Balance />
                        
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-sans font-bold text-black-500 text-center my-4"
                        >Operaciones recientes
                        </h3>

                        <ListadoOperacionesRecientes />
                      
                      </div>
                  </Layout>
                ) : (
                    <>
                        
                    </>
                )
            }

        </div>
  );
}
 
export default Index;

    

