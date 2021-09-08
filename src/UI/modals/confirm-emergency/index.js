import React from 'react';
import { iconoAdvertencia } from 'UI/assets';

import "./styles.scss";
import "../styles.scss";


export const ConfirmEmergencyModal = ({handleClose}) => {
    return (
        <div className="modal">
            <div className="confirm-emergency-modal">
                <div className="img-container">
                    <img src={iconoAdvertencia} alt="advertencia" />
                </div>
                <span className="message">¿Estas seguro de querer enviar una alerta?</span>
                <div className="buttons-container">    
                    <button className="primary">si</button>
                    <button className="secondary" onClick={handleClose}>no</button>
                </div>
            </div>
            <div className="overlay" onClick={handleClose}></div>
        </div>
    );
};

