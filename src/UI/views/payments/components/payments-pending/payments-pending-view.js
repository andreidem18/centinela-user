import React from 'react';
import { PaymentsList } from './components';

export const PaymentsPendingView = ({ paymentsPending, paymentsRejected, setPaymentSelected}) => {
    return (
        <div className='payments-pending'>
            <div className="pendings">
                <h4 className="title-payment">
                    Pagos pendientes
                </h4>
                {
                    paymentsPending.length > 0 ? (
                        <PaymentsList payments={paymentsPending} setPayment={setPaymentSelected}/>
                    ) : (
                        <span className='is-empty-message'>
                            No tienes pagos pendientes, ¡Enhorabuena!
                        </span>
                    )
                }
            </div>
            <div className="rejects">
                { paymentsRejected.length > 0 && 
                    <>
                        <h4 className="title-payment">
                            Pagos rechazados
                        </h4>
                        <PaymentsList payments={paymentsRejected} setPayment={setPaymentSelected} />
                    </>
                }
            </div>
        </div>
    );
};
