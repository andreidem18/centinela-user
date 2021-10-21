import React from 'react';
import { getSpanishMonth } from 'utils';

import './styles.scss';

export const PaymentsMade = ({ payments }) => {
    return (
        <ul className='payments-made'>
            {payments.map(payment => {
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
