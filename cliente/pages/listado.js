import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';

import Swal from 'sweetalert2';

import Alerta from '../components/Alerta';
import Layout from '../components/Layout';
import ListadoOperaciones from '../components/ListadoOperaciones';

import authContext from '../context/auth/authContext';
import operacionContext from '../context/operaciones/operacionContext';

const Listado = () => {
  
  // routing 
  const router = useRouter();

  // Extraer el Usuario autenticado del Storage 
  const AuthContext = useContext( authContext );
  let { usuario, usuarioAutenticado } = AuthContext;

  usuario = usuario || {};
  
  // extraer operaciones de state inicial
  const operacionesContext = useContext(operacionContext);
  const { operaciones, mensaje, obtenerOperaciones, obtenerOperacionesCategorias } = operacionesContext;
 
  useEffect(() => {
      const token = localStorage.getItem('token');

      if(token) {
        usuarioAutenticado()
      } else {
        router.push('/login');
      }

      obtenerOperaciones();

      if (mensaje.categoria === 'alerta-ok') {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: mensaje.msg,
            width: 400,
            timer: 3000,
            confirmButtonColor: '#60A5FA',
            confirmButtonText: 'Ok!',
        })
    }
      // eslint-disable-next-line
  }, [mensaje]);
 
  const ordenarPorFecha = () => {
    obtenerOperaciones();
  }

  const ordenarPorCategoria = categoria => {
      obtenerOperacionesCategorias(categoria);
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

            <h3 className="text-xl md:text-2xl lg:text-3xl font-sans font-bold text-black-500 text-center my-4"
            >Listado de operaciones de
                <span className="text-blue-500"> {usuario.nombre}</span>
            </h3>
            
            { (mensaje.categoria === 'alerta-error') && <Alerta msg={mensaje.msg} categoria={mensaje.categoria} /> }

            <div className="flex gap-10">
                
                <div className="mb-4 ml-4 sm:ml-0">
                    <label 
                      className="block text-black text-sm font-bold mb-2"
                      htmlFor="orden"
                    >Ordenar por:</label>
                    <select
                        type="text"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="orden"
                        value={formik.values.orden}
                        onChange={e => {  formik.handleChange(e); ordenarPorFecha() }}
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
                            onChange={e => {  formik.handleChange(e); ordenarPorCategoria(e.target.value) }}
                        >
                              <option value="" defaultValue disabled hidden>Categoría</option>
                              <option value="Alimentos y bebidas">Alimentos y bebidas</option>
                              <option value="Artículos de limpieza">Artículos de limpieza</option>
                              <option value="Esparcimiento">Esparcimiento</option>
                              <option value="Regalo">Regalo</option>
                              <option value="Servicios">Servicios</option>
                              <option value="Sueldo">Sueldo</option>
                              <option value="Perfumería">Perfumería</option>
                              <option value="Préstamo">Préstamo</option>
                              <option value="Transporte">Transporte</option>
                              <option value="Vestimenta">Vestimenta</option>

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

            <ListadoOperaciones />
        
        </div>
    </Layout>
   );
}
 
export default Listado;


