import React, { useState } from 'react';
import { NavBar, LateralMenu, AlternativeBackground } from 'UI/components';
import { PaymentsMade, PaymentsPending } from './components';
import { HomeLink } from 'UI/components';

import "./styles.scss";

export const Payments = () => {

    const [ section, setSection ] = useState('paymentsPending');

    return (
        <section className="payments">
            <AlternativeBackground>
                <NavBar />
                <HomeLink />
                <div className="title">
                    <h3>Pagos</h3>
                    <i className="icon-payments"></i>
                </div>
                <div className="card-container">
                    <div className="toggle-buttons">
                        <button 
                            className={`payments-made ${section === 'paymentsPending' ? 'active' : ''}`}
                            onClick={() => setSection('paymentsPending')}
                        >
                            <i className="fas fa-clock"></i>
                            <span>Pendientes</span>
                        </button>
                        <button 
                            className={`payments-pending ${section === 'paymentsMade' ? 'active' : ''}`}
                            onClick={() => setSection('paymentsMade')}
                        >
                            <i className="far fa-check-circle"></i>
                            <span>Realizados</span>
                        </button>
                    </div>
                    <div className="card">
                        {
                            section === 'paymentsPending' ? (
                                <PaymentsPending />
                            ) : (
                                <PaymentsMade />
                            )
                        }
                    </div>
                </div>
                <LateralMenu  selected="payments" />
            </AlternativeBackground>
        </section>
    );
};
