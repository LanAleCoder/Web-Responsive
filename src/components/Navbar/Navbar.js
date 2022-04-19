import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { GrArchlinux } from "react-icons/gr";
import { Button } from "../Button/Button";
import "./Navbar.css";
import { IconContext } from "react-icons/lib";

function Navbar() {
    // Establecemos el valor del click
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    // Le establecemos un valor inicial a la barrita
    // por medio de una funcion
    const handleClick = () => setClick(!click);
    // Funcion para cerrar la barra
    const closeMobileMenu =() => setClick(false);

    //Funcion para mostrar la navbar de diferente manera
    // cuando la pagina este a 960px o menos
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
      showButton();
    }, []);
    

window.addEventListener("resize", showButton);

  return (
    <>
    {/* Cambio de colores a los iconos */}
    <IconContext.Provider value={{ color: "#fff"}}>
    <div className='navbar'>
        <div className='navbar-container container'>

            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <GrArchlinux className="navbar-icon" /> 
                Arch Center
            </Link>

            <div className='menu-icon' onClick={handleClick} >
            {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul  className={click ? "nav-menu active" : "nav-menu"}>
                <li className='nav-item'>
                    <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to="/viernesEscritorio" className='nav-links' onClick={closeMobileMenu}>
                        Entornos de trabajo
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to="/Apoyo" className='nav-links' onClick={closeMobileMenu}>
                        Apoyo
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to="/distrosLinux" className='nav-links' onClick={closeMobileMenu}>
                        Distros
                    </Link>
                </li>
                <li className='nav-btn'>
                    {button ? (
                        <Link to="/register" className='btn-link'>
                            <Button buttonStyle="btn--outline">Registrate
                            </Button>
                        </Link>
                    ) : (
                        <Link to="/register" className='btn-link' onClick={closeMobileMenu}>
                            <Button buttonStyle="btn--outline" 
                            buttonSize="btn--mobile">
                                Registrate
                            </Button>
                        </Link>
                    )}
                </li>
            </ul>
        </div>
    </div>
    </IconContext.Provider>
    </>
  )
}

export default Navbar