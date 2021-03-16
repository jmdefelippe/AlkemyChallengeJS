import React, { useContext, useEffect } from 'react';
import Link from 'next/link';
import authContext from '../context/auth/authContext';
import appContext from '../context/app/appContext';
import { useRouter } from 'next/router';


const Footer = ({ title }) => {

    const year = new Date().getFullYear();
    
    return ( 
        <footer className="grid grid-cols-1 text-center py-4 bg-blue-500">
            <p className="text-white text-sm">{title} | {year}</p>
            <p className="text-white text-sm">Joan Manuel Defelippe</p>
        </footer>
     );
}
 
export default Footer;