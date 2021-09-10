import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ConfirmEmergencyModal } from 'UI/modals';

import "./styles.scss";

export const LateralMenu = ({selected}) => {

    const [ showMenu, setShowMenu ] = useState(false);
    const [ showEmergencyModal, setShowEmergencyModal ] = useState(false);

    const handleEmergencyModal = () => {
        setShowEmergencyModal(true);
        setShowMenu(false);
    }

    return (
        <>
        <div className={`lateral-menu-container ${showMenu ? "show" : ""}`}>
            <div className={`lateral-menu ${showMenu ? "show" : ""}`}>
                <div className={`button-container ${selected === "home" ? "selected" : ""}`}>
                    <Link description="principal" to="/">
                        <i className="fas fa-home"></i>
                    </Link>
                </div>
                <div className={`button-container ${selected === "visits" ? "selected" : ""}`}>
                    <Link description="visitas" to="/visitas">
                        <i className="fas fa-users"></i>
                    </Link>
                </div>
                <div className={`button-container ${selected === "emergency" ? "selected" : ""}`}>
                    <button description="emergencias" onClick={handleEmergencyModal}>
                        <i className="fas fa-exclamation-triangle"></i>
                    </button>
                </div>
                <div className={`button-container ${selected === "events" ? "selected" : ""}`}>
                    <button description="eventos">
                        <i className="fas fa-calendar-day"></i>
                    </button>
                </div>
                <div className={`button-container ${selected === "payments" ? "selected" : ""}`}>
                    <Link description="pagos" to="/payments">
                        <i className="fas fa-money-bill"></i>
                    </Link>
                </div>
            </div>
            { showMenu ? (
                <div className="overlay" onClick={() => setShowMenu(false)}></div>
            ) : (
                <div className="open-button-container">
                    <button className="open-button" onClick={() => setShowMenu(true)}>
                        <i className="fas fa-caret-right"></i>
                    </button>
                </div>
            )}
        </div>
        
        {showEmergencyModal && <ConfirmEmergencyModal handleClose={() => setShowEmergencyModal(false)}/>}
        </>
    );
};
