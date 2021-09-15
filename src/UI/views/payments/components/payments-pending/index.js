import React, { useState } from 'react';
import { PaymentsList, PaymentDetail, PaymentRejectedReasons } from './components';

import './styles.scss';

export const PaymentsPending = () => {

    const [ paymentSelected, setPaymentSelected ] = useState(null);
    const paymentsPending = fakePayments.filter(p => p.status === 'pending');
    const paymentsRejected = fakePayments.filter(p => p.status === 'rejected');

    return (
        !paymentSelected ? (
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
        ) : (
            paymentSelected.status === 'pending' ? (
                <PaymentDetail  payment={paymentSelected} comeback={() => setPaymentSelected(null)} />
            ) : (
                <PaymentRejectedReasons  payment={paymentSelected} comeback={() => setPaymentSelected(null)} />
            )
        )
    );
};

const fakePayments = [
    {
        id: 1, 
        amount: 790, 
        date: new Date("August 24, 2021 14:00:00"),
        status: 'pending',
        reasons: [
            {
                id: 1,
                reason: 'Mantenimiento',
                amount: 600
            },
            {
                id: 2,
                reason: 'Uso de salón',
                amount: 190
            }
        ]
    }, 
    {
        id: 3, 
        amount: 600, 
        date: new Date("June 24, 2021 23:00:00"),
        status: 'rejected',
        reject_cause: 'La transferencia fue enviada por un monto de $60, no $600, parece que faltó un cero por equivocación. Por favor, deposite el faltante para que quede aprobado',
        reasons: [
            {
                id: 1,
                reason: 'Mantenimiento',
                amount: 600
            },
        ]
    },
]
