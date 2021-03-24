import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';

import Link from 'next/link';
import * as Yup from 'yup';

import Alerta from '../components/Alerta'
import Layout from '../components/Layout';
import Swal from 'sweetalert2';

import alertaContext from '../context/alertas/alertaContext';
import authContext from '../context/auth/authContext';

const CrearCuenta = () => {

  // extraer los valores del context
  const AlertaContext = useContext(alertaContext);
  const { alerta, mostrarAlerta } = AlertaContext;

  // Acceder al state
  const AuthContext = useContext(authContext);
  const { mensaje, autenticado, registrarUsuario } = AuthContext;

  // Next router
  const router = useRouter();
  
  useEffect(() => {
    
    if(autenticado) {
      router.push('/');
    }
    if(mensaje) {
      mostrarAlerta(mensaje.msg, mensaje.categoria);
    }
  }, [autenticado, mensaje]);


  // Formulario y validación con formik y Yup
  const formik = useFormik({
      initialValues: {
        nombre: '',
        email: '',
        password: '',
        confirmarPassword: ''
      },
      
      validationSchema: Yup.object({
          nombre: Yup.string()
                    .required('El Nombre es Obligatorio'),
          email: Yup.string()
                    .email('El email no es válido')
                    .required('El Email es Obligatorio'),
          password: Yup.string()
                    .required('El password no puede ir vacio')
                    .min(6, 'El password debe contener al menos 6 caracteres'),
          confirmarPassword: Yup.string()
                    .required('El password no puede ir vacio')
                    .min(6, 'El password debe contener al menos 6 caracteres')
                    .oneOf([Yup.ref('password'), null], 'Los Passwords no coinciden')
      }),
     
      onSubmit: valores => {
          registrarUsuario(valores);
/*
          // mostrar mensaje ok
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Cuenta creada',
            width: 400,
            height: 400,
            timer: 2000,
            confirmButtonColor: '#60A5FA',
            confirmButtonText: 'Ok!',
          })
          
*/
          router.push('/login');
          
    }
  });

  return ( 
    <Layout>

        <div className="md:w-4/5 xl:w-3/5 mx-auto">
          <h2 className="text-3xl font-sans font-bold text-black-500 text-center my-4">Crear Cuenta</h2>

          <div className="flex justify-center mt-5">
              <div className="w-full max-w-lg">
                  <form
                    className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-20"
                    onSubmit={formik.handleSubmit}
                  >
                      <div className="mb-4">
                          <label 
                            className="block text-black text-sm font-bold mb-2"
                            htmlFor="nombre"
                          >Nombre</label>
                          <input
                              type="text"
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              id="nombre"
                              placeholder="Nombre de Usuario"
                              value={formik.values.nombre}
                              onChange={formik.handleChange}
                          />

                          { formik.touched.nombre && formik.errors.nombre ? (
                            <div className="my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4">
                                <p className="font-bold">Error</p>
                                <p>{formik.errors.nombre} </p>
                            </div>
                          ) : null }
                      </div>

                      <div className="mb-4">
                          <label 
                            className="block text-black text-sm font-bold mb-2"
                            htmlFor="email"
                          >Email</label>
                          <input
                              type="email"
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              id="email"
                              placeholder="Email de Usuario"
                              value={formik.values.email}
                              onChange={formik.handleChange}
                          />
                          { formik.touched.email && formik.errors.email ? (
                            <div className="my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4">
                                <p className="font-bold">Error</p>
                                <p>{formik.errors.email} </p>
                            </div>
                          ) : null }
                      </div>

                      <div className="mb-4">
                          <label 
                            className="block text-black text-sm font-bold mb-2"
                            htmlFor="password"
                          >Password</label>
                          <input
                              type="password"
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              id="password"
                              placeholder="Password de Usuario"
                              value={formik.values.password}
                              onChange={formik.handleChange}
                          />
                          { formik.touched.password && formik.errors.password ? (
                            <div className="my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4">
                                <p className="font-bold">Error</p>
                                <p>{formik.errors.password} </p>
                            </div>
                          ) : null }
                      </div>

                      <div className="mb-4">
                          <label 
                            className="block text-black text-sm font-bold mb-2"
                            htmlFor="confirmarPassword"
                          >Confirmar Password</label>
                          <input
                              type="password"
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              id="confirmarPassword"
                              placeholder="Repite la Password"
                              value={formik.values.confirmarPassword}
                              onChange={formik.handleChange}
                          />
                          { formik.touched.confirmarPassword && formik.errors.confirmarPassword ? (
                            <div className="my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4">
                                <p className="font-bold">Error</p>
                                <p>{formik.errors.confirmarPassword} </p>
                            </div>
                          ) : null }
                      </div>

                      <div className="grid grid-cols-1 divide-y divide-gray-400">
                        <input 
                          type="submit"
                          className="bg-blue-400 hover:bg-gray-900 w-full p-2 text-white uppercase font-bold mt-3 mb-6"
                          value="Crear Cuenta"
                        />
                        
                        <div className="text-center">
                            <Link href="/login">
                              <a className="text-gray-800 text-sm-1">Iniciar sesión en una cuenta existente</a>
                            </Link>
                          </div>
                      </div>

                      { alerta ? ( <div className={`alerta ${alerta.categoria}`}> {alerta.msg} </div> ): null }

                  </form>
                  

              </div>
          </div>
        </div>
    </Layout>
   );
}
 
export default CrearCuenta;