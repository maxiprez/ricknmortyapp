import React from 'react';
import './home.css';
import Logo from '../../assets/img/rick-and-morty-title.png';


export default function home() {
    return (

        <>
        {/* <Navbar /> */}
        
                   
               
            <div className="title-app">
                <img className="logo-app" src={Logo} alt="logo-title" /> 
            </div>
        </>
    )
}
