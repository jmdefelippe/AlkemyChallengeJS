import React, {useContext, useEffect } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import authContext from '../context/auth/authContext';
import Alerta from '../components/Alerta';
import { useRouter } from 'next/router';

const Login = () => {

    // definir el context
    const AuthContext = useContext(authContext);
    const { mensaje, autenticado, iniciarSesion } = AuthContext;

    // Next router
    const router = useRouter();

    useEffect(() => {
      if(autenticado) {
        router.push('/');
      }
    }, [autenticado]);


    // Formulario y validación con formik y Yup
    const formik = useFormik({
        initialValues: {
          email: '',
          password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                      .email('El email no es válido')
                      .required('El Email es Obligatorio'),
            password: Yup.string()
                      .required('El password no puede ir vacio')
        }),
        onSubmit: valores => {
          iniciarSesion(valores)
        }
    });


  return ( 
    <Layout>
        <div className="md:w-4/5 xl:w-3/5 mx-auto">
          <h2 className="text-3xl font-sans font-bold text-black-500 text-center my-4">Iniciar Sesión</h2>
          { mensaje && <Alerta /> }
          <div className="flex justify-center mt-5">
              <div className="w-full max-w-lg">
                  <form
                    className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-20"
                    onSubmit={formik.handleSubmit}
                  >
                    
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

                      <div className="grid grid-cols-1 divide-y divide-gray-400">
                          <input 
                            type="submit"
                            className="bg-blue-400 hover:bg-gray-900 w-full p-2 text-white uppercase font-bold mt-3 mb-6"
                            value="Iniciar Sesión"
                          />

                          <div className="text-center">
                            <Link href="/crearcuenta">
                              <a className="text-gray-800 text-sm-1">Crear cuenta nueva</a>
                            </Link>
                          </div>
                      </div>

                  </form>
              </div>
          </div>
        </div>
    </Layout>
   );
}
 
export default Login;