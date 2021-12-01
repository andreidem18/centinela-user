import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { escudoAncho } from 'UI/assets';

import "./styles.scss";
import { doLogout } from 'redux/actions';
import { useDispatch } from 'react-redux';

export const NavBar = () => {

    const [ showMenu, setShowMenu ] = useState(false);
    // Para colocarle un height del 8% del tamaño de la pantalla, que no se altere si se abre el teclado
    const height = useMemo(() => 8 * window.innerHeight / 100, []);
    const dispatch = useDispatch();

    return (
        <div className="nav-bar-container" style={{height}}>
            <div className="nav-bar">
                <nav>
                    <button className='notifications-button'>
                        <i className="fas fa-bell"></i>
                    </button>
                    <img src={escudoAncho} alt="Escudo" />
                    <button onClick={() => setShowMenu(!showMenu)} className="nav-bar-menu-button">
                        <i className="fas fa-bars"></i>
                    </button>
                </nav>
                <div className={`main-menu ${showMenu ? "active" : ""}`}>
                    <Link to='/incidentes'>
                        <i className="fas fa-bullhorn"></i>
                        incidentes 
                        <span>3</span>
                    </Link>
                    <Link to='/comunicados'>
                        <i className="fas fa-comment-alt"></i>
                        comunicados
                    </Link>
                    <Link to='/encuestas'>
                        <i className="far fa-clipboard"></i>
                        Encuestas 
                        <span>1</span>
                    </Link>
                    <Link to='/vehiculos'>
                        <i className="fas fa-car"></i>
                        Registro de autos
                    </Link>
                    <hr />
                    <Link to='/ayuda'>
                        <i className="fas fa-question-circle"></i>
                        Ayuda
                    </Link>
                    <Link to='/comentarios'>
                        <i className="fas fa-exclamation-circle"></i>   
                        Envía tu comentario
                    </Link>
                    <button onClick={() => dispatch(doLogout())}>
                        <i className="fas fa-sign-out-alt"></i>
                        Salir
                    </button>
                </div>
            </div>
            { showMenu &&
                <div className="overlay" onClick={() => setShowMenu(false)}></div>
            }
        </div>
    );
};
