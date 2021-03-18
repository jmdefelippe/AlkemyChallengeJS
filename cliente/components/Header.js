import React, { useContext, useEffect } from 'react';
import Link from 'next/link';
import authContext from '../context/auth/authContext';
import appContext from '../context/app/appContext';
import { useRouter } from 'next/router';

const Header = () => {

    // routing 
    const router = useRouter();

      // Extraer el Usuario autenticado del Storage 
    const AuthContext = useContext( authContext );
    const { usuario, usuarioAutenticado,  cerrarSesion } = AuthContext;

      // Context de la aplicación
    const AppContext = useContext( appContext );
    const { limpiarState } = AppContext;

    useEffect(() => {
        usuarioAutenticado();
    }, []);

    const redireccionar = () => {
        router.push('/');
        limpiarState();
    }

    const mostrarMenu = () => {
        menu.classList.toggle('hidden');
    }

    return (


        <nav className="flex items-center justify-between flex-wrap bg-gray-300 p-6 xl:px-20">
            <img 
                onClick={() => redireccionar() }
                className="w-64 mb-8 md:mb-0 cursor-pointer lg:mr-10 xl:mr-20" src="/logo.png" 
            />

            <div>
                {
                    usuario ? (
                        <div>
                            <div className="block lg:hidden">
                                <button
                                    id="boton"
                                    className="flex items-center px-3 py-2 border rounded text-blue-500 border-blue-500 hover:text-black hover:border-black"
                                    onClick={() => mostrarMenu() }    
                                >
                                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                                </button>
                            </div>

                            <div id="menu" className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                                <div className="lg:flex-grow text-black font-bold">
                                    <Link href="/registraroperacion">
                                        <a className="block py-4 lg:inline-block lg:mt-0 mr-10 py-3 hover:text-blue-400">Registrar Operación</a>
                                    </Link>
                                    <Link href="/listado">
                                        <a className="block py-4 lg:inline-block lg:mt-0 mr-10 py-3 mb-3 hover:text-blue-400">Listado</a>
                                    </Link>
                                {/*    
                                    <p className="lg:flex-grow text-black font-bold block py-4 lg:inline-block lg:mt-0 mr-10 py-3">
                                        Hola {usuario.nombre}! </p>
                                */}        
                                    <a href="/login" className="inline-block border rounded-lg hover:bg-black lg:mt-0 bg-blue-400 px-5 py-3 text-white font-bold uppercase"
                                        onClick={() => cerrarSesion() }
                                        >Cerrar Sesión
                                    </a>
                                </div>
                            
                            </div>                        
                        </div>            
                    
                    ) : (
                        <>
                            <Link href="/login">
                                <a className="inline-block border rounded-lg hover:bg-black lg:mt-0 bg-blue-400 mr-3 px-5 py-3 text-white font-bold uppercase">Iniciar Sesión</a>
                            </Link>
                            <Link href="/crearcuenta">
                                <a className="inline-block border rounded-lg hover:bg-black lg:mt-0 bg-blue-400 px-5 py-3 text-white font-bold uppercase">Crear Cuenta</a>
                            </Link>
                        </>
                    )
                }

            </div>


            




        </nav>
     );
}
 
export default Header;