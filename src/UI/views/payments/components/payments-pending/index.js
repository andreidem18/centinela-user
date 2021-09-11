import React from 'react';
import { getSpanishMonth } from 'utils';
import { MonthsPayment } from '../months-payment';

import './styles.scss';

export const PaymentsPending = () => {

    const monthsPending = orderMonths('pending', fakePayments);
    const monthsRejected = orderMonths('rejected', fakePayments);

    return (
        <div className='payments-pending'>
            <div className="pendings">
                <h4 className="title-payment">
                    Pagos pendientes
                </h4>
                {
                    monthsPending.length > 0 ? (
                        <MonthsPayment months={monthsPending}/>
                    ) : (
                        <span className='is-empty-message'>
                            No tienes pagos pendientes, ¡Enhorabuena!
                        </span>
                    )
                }
            </div>
            <div className="rejects">
                { monthsRejected.length > 0 && 
                    <>
                        <h4 className="title-payment">
                            Pagos rechazados
                        </h4>
                        {
                            <MonthsPayment months={monthsRejected} />
                        }
                    </>
                }
            </div>
        </div>
    );
};


// Función que me permitirá agrupar los pagos según el mes y el status, 
// para pasar de esto                                  A esto
// {                                                   {
//     id: 1,                                               id: 1,
//     amount: 600,                                         month: 'noviembre
//     reason: 'Mantenimiento',                             payments: [
//     status: 'pending',                                       {
//     date: new Date("October 24, 2021 14:00:00")},                id: 1,
// }                                                                amount: 600,
//                                                                  reason: "Mantenimiento"
//                                                              }
//                                                              ...
//                                                          ]
//                                                      }
const orderMonths = (status, payments) => {
    const orderedArray = []; // Array a retornar
    payments.forEach(payment => {
        const date = getSpanishMonth(payment.date); 
        if(payment.status === status){ // Se filtra por el status pasado por params
            const index = orderedArray.findIndex(p => p.month === date.month); // Se busca si el mes del pago iterado ya existe en orderedArray
            if(index === -1){ // Si no existe, se crea
                orderedArray.push({
                    id: orderedArray[orderedArray.length - 1]?.id + 1 || 1,
                    month: date.month,
                    payments: [
                        {
                            id: payment.id,
                            amount: payment.amount,
                            reason: payment.reason
                        }
                    ]
                })
            } else { // Si existe, se agrega el pago al arreglo de payments de ese mes
                const monthPayments = orderedArray[index].payments;
                orderedArray[index].payments.push({
                    id: monthPayments[monthPayments.length-1].id + 1,
                    amount: payment.amount,
                    reason: payment.reason
                })
            }
        } 
    })
    return orderedArray;
}



const fakePayments = [
    {
        id: 1, 
        amount: 600, 
        reason: 'Mantenimiento', 
        status: 'pending',
        date: new Date("October 24, 2021 14:00:00")}, 
    {
        id: 2, 
        amount: 890, 
        reason: 'Salón', 
        status: 'pending',
        date: new Date("September 24, 2021 23:00:00")},
    {
        id: 3, 
        amount: 600, 
        reason: 'Mantenimiento',
        status: 'rejected',
        date: new Date("September 25, 2021 16:00:00")
    },
    {
        id: 4, 
        amount: 890, 
        reason: 'Salón', 
        status: 'pending',
        date: new Date("September 24, 2021 23:00:00")},
    {
        id: 5, 
        amount: 600, 
        reason: 'Mantenimiento',
        status: 'rejected',
        date: new Date("September 25, 2021 16:00:00")
    },
    {
        id: 6, 
        amount: 890, 
        reason: 'Salón', 
        status: 'pending',
        date: new Date("September 24, 2021 23:00:00")},
    {
        id: 7, 
        amount: 600, 
        reason: 'Mantenimiento',
        status: 'rejected',
        date: new Date("September 25, 2021 16:00:00")
    }
]
