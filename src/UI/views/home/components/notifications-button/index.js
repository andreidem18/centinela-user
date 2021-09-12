import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
                        <i className="icon-notifications"></i>
                    </button>
                    <div className="shadow"></div>
                </div>
            </div>
            { showMenu &&
                <div className="notifications-menu-container">
                    <div className="notifications-menu">
                        <Link className="top" to='/incidentes'>
                            <i className="icon-megaphone"></i>
                            <span>3</span>
                        </Link>
                        <button className="left">
                            <i className="icon-message"></i>
                            <span>1</span>
                        </button>
                        <button className="right">
                            <i className="icon-survey"></i>
                        </button>
                        <Link className="bottom" to='/vehiculos'>
                            <i className="icon-car"></i>
                        </Link>
                        <div className="circle"></div>
                    </div>
                    <div className="overlay" onClick={() => setShowMenu(false)}></div>
                </div>
            }
        </div>
    );
};
