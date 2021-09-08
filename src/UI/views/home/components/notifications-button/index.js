import React, { useState } from 'react';
import { iconoCarro, iconoEncuestas, iconoMegafono, iconoMensajes, iconoNotificaciones } from 'UI/assets';

import "./styles.scss";

export const NotificationsButton = () => {
    
    const [ showMenu, setShowMenu ] = useState(false);

    return (
        <div className="notifications-button">
            <div className="main-button-container">
                <div className="main-button">
                    <button 
                        onClick={() => setShowMenu(true)}
                    >
                        <img src={iconoNotificaciones} alt="Icono notificaciones" />
                    </button>
                    <div className="shadow"></div>
                </div>
            </div>
            { showMenu &&
                <div className="notifications-menu-container">
                    <div className="notifications-menu">
                        <button className="top">
                            <img src={iconoMegafono} alt="Incidentes" />
                            <span>3</span>
                        </button>
                        <button className="left">
                            <img src={iconoMensajes} alt="Comunicados" />
                            <span>1</span>
                        </button>
                        <button className="right">
                            <img src={iconoEncuestas} alt="Encuestas" />
                        </button>
                        <button className="bottom">
                            <img src={iconoCarro} alt="Visitas" />
                        </button>
                        <div className="circle"></div>
                    </div>
                    <div className="overlay" onClick={() => setShowMenu(false)}></div>
                </div>
            }
        </div>
    );
};
