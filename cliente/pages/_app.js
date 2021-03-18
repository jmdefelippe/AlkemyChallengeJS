import React from 'react';
import AuthState from '../context/auth/authState';
import AppState from '../context/app/appState';
import OperacionState from '../context/operaciones/operacionState';

const MyApp = ({ Component, pageProps }) => {
    return (
        <OperacionState>
            <AuthState>
                <AppState>
                    <Component {...pageProps} />
                </AppState>
            </AuthState>
        </OperacionState>
    )
}
export default MyApp;