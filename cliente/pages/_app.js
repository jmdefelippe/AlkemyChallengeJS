import React from 'react';
import AlertaState from '../context/alertas/alertaState';
import AuthState from '../context/auth/authState';
import AppState from '../context/app/appState';
import OperacionState from '../context/operaciones/operacionState';

const MyApp = ({ Component, pageProps }) => {
    return (
        <AlertaState>
            <OperacionState>
                <AuthState>
                    <AppState>
                        <Component {...pageProps} />
                    </AppState>
                </AuthState>
            </OperacionState>
        </AlertaState>
    )
}
export default MyApp;