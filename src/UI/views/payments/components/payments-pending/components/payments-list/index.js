import React from 'react';
import { getSpanishMonth } from 'utils';

import './styles.scss';

export const PaymentsList = ({payments, setPayment}) => {
    return (
        <ul className='payments-list'>
            {
                payments.map(payment => {
                    const date = getSpanishMonth(payment.date);
                    return(
                        <li key={payment.id}>
                            <span className='date'>
                                {date.month} {date.year}
                            </span>
                            <span className='amount'>
                                $ {payment.amount}
                                <button onClick={() => setPayment(payment)}>
                                    <i className="icon-link"/>
                                </button>
                            </span>
                        </li>
                    )
                })
            }
        </ul>
    );
};
