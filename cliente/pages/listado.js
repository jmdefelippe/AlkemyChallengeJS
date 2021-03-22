import React, { useContext, useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Alerta from '../components/Alerta';
import Operacion from '../components/Operacion';
import authContext from '../context/auth/authContext';
import operacionContext from '../context/operaciones/operacionContext';
import alertaContext from '../context/alertas/alertaContext';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { useFormik } from 'formik';


const Listado = () => {
  // routing 
  const router = useRouter();

  // Extraer el Usuario autenticado del Storage 
  const AuthContext = useContext( authContext );
  const { usuario, usuarioAutenticado } = AuthContext;
  
  // extraer operaciones de state inicial
  const operacionesContext = useContext(operacionContext);
  const { operaciones, mensaje, obtenerOperaciones, obtenerOperacionesCategorias } = operacionesContext;

  const alertasContext = useContext(alertaContext);
  const { alerta, mostrarAlerta } = alertasContext;

  //const [ordenarFecha, setOrdenarFecha] = useState(true);

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

  const ordenarPorFecha = () => {
    obtenerOperaciones();
    console.log("orden por fecha...");
  }

  const ordenarPorCategoria = categoria => {
      obtenerOperacionesCategorias(categoria);
      console.log("orden por categoria...");
  }


// Formulario y validación con formik y Yup
const formik = useFormik({
  initialValues: {
    orden: '',
    categoria: ''
  },
  onSubmit: valores => {

  }
});


  
  return ( 
    <Layout>
        
        <div className="md:w-4/5 xl:w-5/5 mx-auto">

            <h3 className="text-3xl font-sans font-bold text-black-500 text-center my-4"
            >Listado de operaciones de
                <span className="text-blue-500"> {usuario.nombre}</span>
            </h3>

            <div className="flex gap-10">
                
                <div className="mb-4">
                    <label 
                      className="block text-black text-sm font-bold mb-2"
                      htmlFor="orden"
                    >Ordenar por:</label>
                    <select
                        type="text"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="orden"
                        value={formik.values.orden}
                        onChange={formik.handleChange}
                    >
                          <option value="Fecha" defaultValue>Fecha</option>
                          <option value="Categoría">Categoría</option>
                    </select>

                    { formik.touched.orden && formik.errors.orden ? (
                      <div className="my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4">
                          <p className="font-bold">Error</p>
                          <p>{formik.errors.orden} </p>
                      </div>
                    ) : null }
                </div>

                

                { (formik.values.orden === 'Categoría') ? (

                    <div className="mb-4">
                        <label 
                          className="block text-black text-sm font-bold mb-2"
                          htmlFor="categoria"
                        >Categoria</label>
                        <select
                            type="text"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="categoria"
                            placeholder="Categoria"
                            value={formik.values.categoria}
                            onChange={formik.handleChange}
                        >
                              <option value="" defaultValue disabled hidden>Categoría</option>
                              <option value="Alimentos">Alimentos</option>
                              <option value="Artículos de limpieza">Artículos de limpieza</option>
                              <option value="Impuestos">Impuestos</option>
                              <option value="Donación">Donación</option>
                              <option value="Sueldo">Sueldo</option>
                        </select>

                        { formik.touched.categoria && formik.errors.categoria ? (
                          <div className="my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4">
                              <p className="font-bold">Error</p>
                              <p>{formik.errors.categoria} </p>
                          </div>
                        ) : null }
                    </div>

                ) : ( null ) }

            </div>

{/*
            <div className="flex justify-center mb-4">
                <button className="border rounded-lg hover:bg-black bg-blue-400 px-5 py-3 mr-5 text-white font-bold uppercase"
                    onClick={() => ordenarPorFecha() }
                >Por fecha</button>
                            
                <button className="border rounded-lg hover:bg-black bg-blue-400 px-5 py-3 text-white font-bold uppercase"
                    onClick={() => ordenarPorCategoria('Impuestos') }
                >Por categoría</button>
            </div>
*/}
              
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


