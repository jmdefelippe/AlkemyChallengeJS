import React, { useContext, useEffect } from 'react';
import Link from 'next/link';
import authContext from '../context/auth/authContext';
import { useRouter } from 'next/router';

const Header = () => {

    // routing 
    const router = useRouter();

      // Extraer el Usuario autenticado del Storage 
    const AuthContext = useContext( authContext );
    const { usuario, usuarioAutenticado,  cerrarSesion } = AuthContext;

    useEffect(() => {
        usuarioAutenticado();
    }, []);

    const redireccionar = () => {
        router.push('/');
    }

    const mostrarMenu = () => {
        menu.classList.toggle('hidden');
    }

    return (

        <div>
            { usuario ? (

                <nav className="flex items-center justify-start flex-wrap bg-gray-300 p-6 xl:px-20">
                    
                    <div className="block lg:hidden">
                        <button
                            id='boton'
                            className="flex items-center px-3 py-2 mr-10 border rounded text-blue-500 border-blue-500 hover:text-black hover:border-black"
                            onClick={() => mostrarMenu()}
                        >
                            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                        </button>
                    </div>

                    <div className="flex items-center flex-shrink-0 text-white lg:mr-32">
                        <img 
                            onClick={() => redireccionar() }
                            className="w-40 md:w-56 lg:w-64 mb-8 md:mb-0 sm:mb-0 cursor-pointer" src="/logo.png" 
                        />
                    </div>
                                      
                    <div id='menu' className="w-full block flex-grow lg:flex lg:items-center lg:w-auto hidden">
                        
                        <div className="lg:flex-grow text-black font-bold">

                            <Link href="/registraroperacion">
                                <a className={router.pathname === "/registraroperacion"
                                    ? "block py-4 lg:inline-block lg:mt-0 mr-10 py-2 hover:text-blue-400 underline"
                                    : "block py-4 lg:inline-block lg:mt-0 mr-10 py-2 hover:text-blue-400"
                                }>Registrar Operación</a>
                            </Link>

                            <Link href="/listado">
                                <a className={router.pathname === "/listado"
                                    ? "block lg:inline-block mt-0 mr-10  hover:text-blue-400 underline"
                                    : "block lg:inline-block mt-0 mr-10  hover:text-blue-400"
                                }>Listado</a>
                            </Link>

                        </div>
                        
                        <div>
                            <a href="/login" className="bg-blue-400 inline-block text-sm text-white font-bold uppercase px-4 py-2 rounded-lg
                                hover:bg-black mt-4 lg:mt-0 lg:px-5 lg:py-3 shadow-md"
                                
                                onClick={() => cerrarSesion()}>Cerrar Sesión</a>
                        </div>

                    </div>

                </nav>

            ) : (

                <nav className="flex items-center justify-between flex-wrap bg-gray-300 p-6 xl:px-20">
                    
                    <img 
                        onClick={() => redireccionar() }
                        className="w-64 mb-8 md:mb-0 cursor-pointer" src="/logo.png" 
                    />

                    
                        {router.pathname === "/crearcuenta" ? (
                            <Link href="/login">
                                <a className="bg-blue-400 inline-block text-sm text-white font-bold uppercase px-4 py-2  rounded-lg
                                                hover:bg-black mt-4 lg:mt-0 lg:px-5 lg:py-3 shadow-md">Iniciar Sesión</a>
                            </Link>
                            ) : (
                            
                            <Link href="/crearcuenta">
                                <a className="bg-blue-400 inline-block text-sm text-white font-bold uppercase px-4 py-2  rounded-lg
                                                hover:bg-black mt-4 lg:mt-0 lg:px-5 lg:py-3 shadow-md">Crear Cuenta</a>
                            </Link>
                            )}

                    
                </nav>
                
            )}
        </div>







     );
}
 
export default Header;