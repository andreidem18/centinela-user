import { useAuth } from 'hooks';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { escudoAncho } from 'UI/assets';

import "./styles.scss";

export const NavBar = () => {

    const [ showMenu, setShowMenu ] = useState(false);
    const { doLogout } = useAuth();

    return (
        <div className="nav-bar">
            <nav>
                <button onClick={() => setShowMenu(!showMenu)} className="menu-button">
                    <i className="fas fa-bars"></i>
                </button>
                <img src={escudoAncho} alt="Escudo" />
                <div></div>
            </nav>
            <div className={`main-menu ${showMenu ? "active" : ""}`}>
                <Link to='/incidentes'>
                    <i className="fas fa-bullhorn"></i>
                    incidentes 
                    <span>3</span>
                </Link>
                <button>
                    <i className="fas fa-comment-alt"></i>
                    comunicados
                </button>
                <button>
                    <i className="far fa-clipboard"></i>
                    Encuestas 
                    <span>1</span>
                </button>
                <button>
                    <i className="fas fa-car"></i>
                    Registro de autos
                </button>
                <hr />
                <button>
                    <i className="fas fa-question-circle"></i>
                    ayuda
                </button>
                <button>
                    <i className="fas fa-exclamation-circle"></i>   
                    Reporte de un problema
                </button>
                <button>
                    <i className="fas fa-cog"></i>
                    Configuración
                </button>
                <button onClick={doLogout}>
                    <i className="fas fa-sign-out-alt"></i>
                    Salir
                </button>
            </div>
        </div>
    );
};
