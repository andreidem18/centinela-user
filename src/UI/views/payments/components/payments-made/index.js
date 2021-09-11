import React from 'react';
import { getSpanishMonth } from 'utils';

import './styles.scss';

export const PaymentsMade = () => {
    return (
        <ul className='payments-made'>
            {fakePayments.map(payment => {
                const date = getSpanishMonth(payment.date);
                return(
                    <li key={payment.id}>
                        <span className='date'>
                            {date.month} {date.year}
                        </span>
                        <span className='amount'>
                            $ {payment.amount}
                        </span>
                    </li>
                )
            })}
        </ul>
    );
};

const fakePayments = [
    {id: 1, amount: 600, date: new Date("August 24, 2021 14:00:00")}, 
    {id: 2, amount: 890, date: new Date("July 24, 2021 23:00:00")},
    {id: 3, amount: 600, date: new Date("June 25, 2021 16:00:00")},
    {id: 4, amount: 600, date: new Date("May 24, 2021 14:00:00")}, 
    {id: 5, amount: 700, date: new Date("April 24, 2021 23:00:00")},
    {id: 6, amount: 600, date: new Date("March 25, 2021 16:00:00")},
]
