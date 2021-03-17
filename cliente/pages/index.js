import React, { useContext, useEffect } from 'react';
import Layout from '../components/Layout';
import authContext from '../context/auth/authContext';
import { useRouter } from 'next/router';

const Index = () => {

    // routing 
    const router = useRouter();

    // Extraer el Usuario autenticado del Storage 
    const AuthContext = useContext( authContext );
    const { usuario, usuarioAutenticado } = AuthContext;
    
    useEffect(() => {
      const token = localStorage.getItem('token');

      if(token) {
        usuarioAutenticado()
      } else {
        router.push('/login');
      }
    
    }, []);

    return ( 
        
        <div>
            {
                usuario ? (
                  <Layout>
                      <div className="md:w-4/5 xl:w-3/5 mx-auto">
                          <h2 className="text-3xl font-sans font-bold text-black-500 text-center my-4">Balance</h2> 
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