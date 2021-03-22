import React, { useContext, useEffect } from 'react';
import Layout from '../components/Layout';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import authContext from '../context/auth/authContext';
import operacionContext from '../context/operaciones/operacionContext';
import Alerta from '../components/Alerta';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';

const editarOperacion = () => {
  
  // Next router
  const router = useRouter();

  // Acceder al state
  const AuthContext = useContext(authContext);
  const { mensaje } = AuthContext;

  const OperacionContext = useContext(operacionContext);
  const { actualizarOperacion, operacion } = OperacionContext;

  // Formulario y validación con formik y Yup
  const formik = useFormik({
      initialValues: {
//_id: operacion[0]._id,
        concepto: operacion[0].concepto,
        monto: operacion[0].monto,
        fecha: operacion[0].fecha,
        tipo: operacion[0].tipo,
        categoria: operacion[0].categoria,
        usuario: operacion[0].usuario
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
          actualizarOperacion(valores);

          // mostrar mensaje ok
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Operación editada correctamente',
            width: 400,
            height: 400,
            timer: 2000,
            confirmButtonColor: '#60A5FA',
            confirmButtonText: 'Ok!',
          })
          router.push('/listado');
          // reiniciar el form

      }
  });

  return (
      <Layout>
        <div className="md:w-4/5 xl:w-3/5 mx-auto">
          <h2 className="text-3xl font-sans font-bold text-black-500 text-center my-4">Editar Operación</h2>

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

                      { (operacion[0].tipo === 'Ingreso') ? (

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
                                    <option value="Sueldo">Sueldo</option>
                                    <option value="Donación">Donación</option>
                                   

                              </select>

                              { formik.touched.categoria && formik.errors.categoria ? (
                                <div className="my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4">
                                    <p className="font-bold">Error</p>
                                    <p>{formik.errors.categoria} </p>
                                </div>
                              ) : null }
                          </div>

                      ) : (
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
                                    <option value="Impuestos">Impuestos</option>
                                    <option value="Artículos de limpieza">Artículos de limpieza</option>

                              </select>

                              { formik.touched.categoria && formik.errors.categoria ? (
                                <div className="my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4">
                                    <p className="font-bold">Error</p>
                                    <p>{formik.errors.categoria} </p>
                                </div>
                              ) : null }
                          </div>

                      ) }

                      <input 
                        type="submit"
                        className="bg-blue-400 hover:bg-gray-900 w-full p-2 text-white uppercase font-bold"
                        value="Editar Operación"
                      />
                  </form>
              </div>
          </div>
      </div>
    </Layout>
   );
}
 
export default editarOperacion;