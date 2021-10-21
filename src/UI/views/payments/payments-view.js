import React from 'react';
import { ChatButton, StandarContainer } from 'UI/components';
import { PaymentsMade, PaymentsPending } from './components';

export const PaymentsView = ({ section, setSection, setShowBottomMenu, showBottomMenu, paymentsMade, paymentsPending }) => {

                                                              // Lógica para evitar que el menu de abajo NO salga 
    return (                                                  // cuando haya formularios (al enviar un pago)
        <StandarContainer sectionSelected='payments' bottomMenu={showBottomMenu || section === 'paymentsMade'}>
            <section className="payments">
                <div className="toggle-buttons">
                    <button 
                        className={`payments-made ${section === 'paymentsMade' ? 'active' : ''}`}
                        onClick={() => setSection('paymentsMade')}
                    >
                        <i className="far fa-check-circle"></i>
                        <span>Realizados</span>
                    </button>
                    <button 
                        className={`payments-pending ${section === 'paymentsPending' ? 'active' : ''}`}
                        onClick={() => setSection('paymentsPending')}
                    >
                        <i className="fas fa-clock"></i>
                        <span>Pendientes</span>
                    </button>
                </div>
                {
                section === 'paymentsPending' ? (
                    <PaymentsPending setShowBottomMenu={setShowBottomMenu} payments={paymentsPending} />
                ) : (
                    <PaymentsMade payments={paymentsMade} />
                )
                }
                <ChatButton />
            </section>
        </StandarContainer>
    );
};
