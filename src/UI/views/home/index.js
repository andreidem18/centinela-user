import React, { useEffect, useState } from 'react';
import { iconoChat, iconoEmergencia } from 'UI/assets';
import { NavBar, LateralMenu } from 'UI/components';
import { ConfirmEmergencyModal } from 'UI/modals';
import { NotificationsButton } from './components';
import { useProfile } from 'hooks';

import "./styles.scss";

export const Home = () => {

    const { profile, getProfile } = useProfile();

    const [ showEmergencyModal, setShowEmergencyModal ] = useState(false);
    const [ showBankData, setShowBankData ] = useState(false);

    useEffect(() => getProfile(), [  ]);

    return (
        <section className="home-user">

            <div className="background-home-user">
                <NavBar />

                <h2 className="greeting">Hola, <span className="user-name">{profile.name}</span></h2>
                <p className="notifications">Tienes <span className="notification-number">4</span> notificaciones</p>
                
                <NotificationsButton />
                
                <div className="option-buttons">
                    <button onClick={() => setShowEmergencyModal(true)} >
                        <img src={iconoEmergencia} alt="Emergencia" />
                    </button>
                    <button><img src={iconoChat} alt="Chat" /></button>
                </div>
                
                <div className={`bank-data-container ${showBankData ? "show" : ""}`}>
                    <div className="info">Abedul #542</div>
                    <div className="bank-data-header">
                        <div></div>
                        <p>Datos Bancarios</p>
                        <button onClick={() => setShowBankData(!showBankData)}>
                            {showBankData ? <i className="fas fa-chevron-down"></i> : <i className="fas fa-chevron-up"></i>}
                        </button>
                    </div>
                    <div className="bank-data-content">
                        <h4>BBVA Cta. 010232323</h4>
                        <ul>
                            <li><h5>Referencia Mtto:</h5> 021455323</li>
                            <li><h5>Ref. casa Club:</h5> 0234695323</li>
                            <li><h5>Ref. Alberca</h5> 034852332</li>
                        </ul>
                    </div>
                </div>
                
                <LateralMenu selected="home"/>
            </div>

            {showEmergencyModal && <ConfirmEmergencyModal handleClose={() => setShowEmergencyModal(false)} />} 

        </section>
    );
};
