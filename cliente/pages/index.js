import React, { useContext, useEffect } from 'react';
import Layout from '../components/Layout';
import authContext from '../context/auth/authContext';
import operacionContext from '../context/operaciones/operacionContext';
import { useRouter } from 'next/router';

const Index = () => {

    // routing 
    const router = useRouter();

    // Extraer el Usuario autenticado del Storage 
    const AuthContext = useContext( authContext );
    let { usuario, usuarioAutenticado } = AuthContext;

  usuario = usuario || {};

    // extraer operaciones de state inicial
    const operacionesContext = useContext(operacionContext);
    const { ingresos, egresos, balance, calcularTotales } = operacionesContext;

    useEffect(() => {
      const token = localStorage.getItem('token');

      if(token) {
        usuarioAutenticado();
      } else {
        router.push('/login');
      }
    
      calcularTotales();
      // eslint-disable-next-line
    }, []);

    return ( 
        <div>
            {
                usuario ? (
                  <Layout>
                      <div className="md:w-4/5 xl:w-3/5 mx-auto">
                        
                        <h3 className="text-3xl font-sans font-bold text-black-500 text-center my-4"
                        >Balance de operaciones de
                            <span className="text-blue-500"> {usuario.nombre}</span>
                        </h3>

                        
                        <div className="grid md:w-4/5 xl:w-3/5 mx-auto mb-2 items-center bg-gray-300 rounded-lg px-5 py-2">
                            <p className="font-bold text-blue-500 uppercase text-center">Ingresos:
                                <span className="font-normal text-black normal-case"> ${ingresos} </span>
                            </p>
                            <p className="font-bold text-blue-500 uppercase text-center">Egresos:
                                <span className="font-normal text-black normal-case"> ${egresos} </span>
                            </p>
                            <p className="font-bold text-blue-500 uppercase text-center">Balance:
                                <span className="font-normal text-black normal-case"> ${balance} </span>
                            </p>
                        </div>
                                           


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

    

