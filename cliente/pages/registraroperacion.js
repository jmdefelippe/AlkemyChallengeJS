import React, { useContext, useEffect } from 'react';
import Layout from '../components/Layout';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import authContext from '../context/auth/authContext';
import Alerta from '../components/Alerta'

const RegistrarOperacion = () => {

  // Acceder al state
  const AuthContext = useContext(authContext);
  const { mensaje, registrarUsuario } = AuthContext;

  // Formulario y validación con formik y Yup
  const formik = useFormik({
      initialValues: {
        concepto: '',
        monto: '',
        fecha: '',
        tipo: '',
        categoria: '',
        usuario: ''
      },
      validationSchema: Yup.object({
            concepto: Yup.string()
                .required('El concepto es obligatorio'),
            monto: Yup.number()
                .required('El monto es obligatorio'),
            fecha: Yup.date()
                .required('La fecha es obligatoria'),
            tipo: Yup.string()
                .required('El tipo es obligatorio'),
            categoria: Yup.string()
                .required('La categoría es obligatoria')
      }),
      onSubmit: valores => {
          registrarUsuario(valores)
      }
  });


  return ( 
    <Layout>
        <div className="md:w-4/5 xl:w-3/5 mx-auto">
          <h2 className="text-3xl font-sans font-bold text-black-500 text-center my-4">Registrar Operación</h2>

          { mensaje && <Alerta />}

          <div className="flex justify-center mt-5">
              <div className="w-full max-w-lg">
                  <form
                    className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-20"
                    onSubmit={formik.handleSubmit}
                  >
                      <div className="mb-4">
                          <label 
                            className="block text-black text-sm font-bold mb-2"
                            htmlFor="concepto"
                          >Concepto</label>
                          <input
                              type="text"
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              id="concepto"
                              placeholder="Concepto"
                              value={formik.values.concepto}
                              onChange={formik.handleChange}
                          />

                          { formik.touched.concepto && formik.errors.concepto ? (
                            <div className="my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4">
                                <p className="font-bold">Error</p>
                                <p>{formik.errors.concepto} </p>
                            </div>
                          ) : null }
                      </div>

                      <div className="mb-4">
                          <label 
                            className="block text-black text-sm font-bold mb-2"
                            htmlFor="monto"
                          >Monto</label>
                          <input
                              type="number"
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              id="monto"
                              placeholder="Monto"
                              value={formik.values.monto}
                              onChange={formik.handleChange}
                          />

                          { formik.touched.monto && formik.errors.monto ? (
                            <div className="my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4">
                                <p className="font-bold">Error</p>
                                <p>{formik.errors.monto} </p>
                            </div>
                          ) : null }
                      </div>

                      <div className="mb-4">
                          <label 
                            className="block text-black text-sm font-bold mb-2"
                            htmlFor="fecha"
                          >Fecha</label>
                          <input
                              type="date"
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              id="fecha"
                              placeholder="Fecha"
                              value={formik.values.fecha}
                              onChange={formik.handleChange}
                          />

                          { formik.touched.fecha && formik.errors.fecha ? (
                            <div className="my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4">
                                <p className="font-bold">Error</p>
                                <p>{formik.errors.fecha} </p>
                            </div>
                          ) : null }
                      </div>

                      <div className="mb-4">
                          <label 
                            className="block text-black text-sm font-bold mb-2"
                            htmlFor="tipo"
                          >Tipo</label>
                          <select
                              type="text"
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              id="tipo"
                              placeholder="Tipo"
                              value={formik.values.tipo}
                              onChange={formik.handleChange}
                          >
                                <option value="" selected disabled hidden>Tipo</option>
                                <option value="Ingreso">Ingreso</option>
                                <option value="Egreso">Egreso</option>
                          </select>

                          { formik.touched.tipo && formik.errors.tipo ? (
                            <div className="my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4">
                                <p className="font-bold">Error</p>
                                <p>{formik.errors.tipo} </p>
                            </div>
                          ) : null }
                      </div>

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
                                <option value="" selected disabled hidden>Categoría</option>
                                <option value="Categoria 1">Categora 1</option>
                                <option value="Categoria 2">Categora 2</option>
                                <option value="Categoria n">Categora n</option>

                          </select>

                          { formik.touched.categoria && formik.errors.categoria ? (
                            <div className="my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4">
                                <p className="font-bold">Error</p>
                                <p>{formik.errors.categoria} </p>
                            </div>
                          ) : null }
                      </div>

                      <input 
                        type="submit"
                        className="bg-blue-400 hover:bg-gray-900 w-full p-2 text-white uppercase font-bold"
                        value="Registrar Operación"
                      />
                  </form>
              </div>
          </div>
        </div>
    </Layout>
   );
}
 
export default RegistrarOperacion;