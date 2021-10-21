import React, { useState } from 'react';

import "./styles.scss";
import { PaymentsView } from './payments-view';

export const Payments = () => {

    const [ section, setSection ] = useState('paymentsPending');
    const [ showBottomMenu, setShowBottomMenu ] = useState(true);

    return (
        <PaymentsView 
            section={section} 
            setSection={setSection} 
            showBottomMenu={showBottomMenu} 
            setShowBottomMenu={setShowBottomMenu} 
            paymentsMade={fakePaymentsMade}
            paymentsPending={fakePaymentsPending}
        />
    )
};



const fakePaymentsMade = [
    {id: 1, amount: 600, date: new Date("August 24, 2021 14:00:00")}, 
    {id: 2, amount: 890, date: new Date("July 24, 2021 23:00:00")},
    {id: 3, amount: 600, date: new Date("June 25, 2021 16:00:00")},
    {id: 4, amount: 600, date: new Date("May 24, 2021 14:00:00")}, 
    {id: 5, amount: 700, date: new Date("April 24, 2021 23:00:00")},
    {id: 6, amount: 600, date: new Date("March 25, 2021 16:00:00")},
]



const fakePaymentsPending = [
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
