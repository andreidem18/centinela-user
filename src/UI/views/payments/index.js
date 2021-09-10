import React, { useState } from 'react';
import { PaymentsDetail } from './components';
import { pagosRealizados, iconoChat, pagosPendientes } from 'UI/assets';
import { NavBar, LateralMenu, AlternativeBackground } from 'UI/components';

import "./styles.scss";

export const Payments = () => {

    const [ section, setSection ] = useState('paymentsMade');

    return (
        <section className="payments">
            <AlternativeBackground>
                <NavBar />
                { 
                    section ? (
                        <PaymentsDetail section={section} setSection={setSection} />
                    ) : (
                        <>
                            <h3>Incidentes</h3>
                            <div className="card">
                                <button className="mb" onClick={() => setSection('paymentsPending')}>
                                    <img src={pagosRealizados} alt="Pagos Realizados" />
                                    <span>Pendientes</span>
                                    <div className="inner"></div>
                                </button>
                                <button onClick={() => setSection('paymentsMade')}>
                                    <img src={pagosPendientes} alt="Pagos Pendientes" />
                                    <span>Realizados</span>
                                    <div className="inner"></div>
                                </button>
                            </div>
                            <button className="chat-button">
                                <img src={iconoChat} alt="" />
                            </button>
                        </>
                    )
                }
                <LateralMenu  selected="payments" />
            </AlternativeBackground>
        </section>
    );
};
