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
        usuarioAutenticado()
    }, []);

    const redireccionar = () => {
        router.push('/');
        limpiarState();
    }


    return ( 
        <header className="bg-gray-200 py-8 flex flex-col md:flex-row items-center justify-around">
            <img 
                onClick={() => redireccionar() }
                className="w-64 mb-8 md:mb-0 cursor-pointer" src="/logo.png" 
            />

            
            <div className="flex items-center">
                <Link href="/registraroperacion">
                    <a className="px-5 py-3 text-black font-bold mr-2">Registrar Operación</a>
                </Link>
                <Link href="/listado">
                    <a className="px-5 py-3 text-black font-bold mr-2">Listado</a>
                </Link>
            


                <p className="px-5">Hola usuario.nombre{/*usuario.nombre*/}</p>
                <button 
                    type="button"
                    className="bg-blue-400 px-5 py-3 rounded-lg text-white font-bold uppercase"
                    onClick={() => cerrarSesion() }
                >Cerrar Sesión</button>
            </div>

          
            
        </header>
     );
}
 
export default Header;