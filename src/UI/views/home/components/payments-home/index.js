import React from 'react';
import { Link } from 'react-router-dom';
import { celebracion } from 'UI/assets';
import { getSpanishMonth } from 'utils';

import './styles.scss';

export const PaymentsHome = () => {
    return (
        <div className='payments-home'>
            {
                fakePayments.length > 0 ? (
                    fakePayments.map(payment => {
                        const date = getSpanishMonth(payment.date);
                        return(
                            <div className="card" key={payment.id}>
                                <div className="header">
                                    <span className="date">{date.month} {date.year}</span>
                                    <span className="amount">$ {payment.amount}</span>
                                </div>
                                <ul className="reasons-container">
                                    {payment.reasons.map(reason => (
                                        <li className="reason" key={reason.id}>
                                            <span>{reason.reason}</span>
                                            <span>$ {reason.amount}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link className="pay" to={`/pagos/${payment.id}`}>Pagar</Link>
                            </div>
                        )
                    })
                ) : (
                    <div className="card empty">
                        <img src={celebracion} alt="" />
                        No tienes pagos pendientes, ¡Enhorabuena!
                    </div>
                )
            }
        </div>
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
