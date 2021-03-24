import React from 'react';

import '../index.css';

import AlertaState from '../context/alertas/alertaState';
import AuthState from '../context/auth/authState';
import OperacionState from '../context/operaciones/operacionState';

const MyApp = ({ Component, pageProps }) => {
    return (
        <AlertaState>
            <OperacionState>
                <AuthState>
                    <Component {...pageProps} />
                </AuthState>
            </OperacionState>
        </AlertaState>
    )
}
export default MyApp;