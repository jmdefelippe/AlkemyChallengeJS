import React from 'react';

import '../index.css';

import AuthState from '../context/auth/authState';
import OperacionState from '../context/operaciones/operacionState';

const MyApp = ({ Component, pageProps }) => {
    return (
        <OperacionState>
            <AuthState>
                <Component {...pageProps} />
            </AuthState>
        </OperacionState>
    )
}
export default MyApp;