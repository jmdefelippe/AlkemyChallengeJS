import React, { useContext, useEffect } from 'react';

import operacionContext from '../context/operaciones/operacionContext';

const Balance = () => {
    
    // extraer operaciones de state inicial
    const operacionesContext = useContext(operacionContext);
    const { ingresos, egresos, balance, calcularTotales } = operacionesContext;
    
    let classBalance = "";

    useEffect(() => {
        calcularTotales();
        // eslint-disable-next-line
    }, []);

    const obtenerClassBalance = (classBalance) => {
        if (balance > 0) {
          classBalance = "text-green-500"
        } else if (balance < 0) {
          classBalance = "text-red-700"
        } else {
          classBalance = "font-normal text-black"
        }

        return classBalance;
    }

    classBalance = obtenerClassBalance(classBalance);
    
    return (

        <div className="grid md:w-4/5 xl:w-3/5 mx-auto mb-2 items-center bg-gray-300 rounded-lg px-5 py-2 mb-5">
            <p className="font-bold text-blue-500 uppercase text-center mb-2">Ingresos:
                <span className="font-normal text-black"> ${ingresos} </span>
            </p>
            <p className="font-bold text-blue-500 uppercase text-center mb-2">Egresos:
                <span className="font-normal text-black"> ${egresos} </span>
            </p>
            <p className="font-bold text-blue-500 uppercase text-center">Balance:
                <span className={classBalance}> ${balance} </span>
            </p>
        </div>

    );
}
 
export default Balance;