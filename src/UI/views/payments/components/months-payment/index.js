import React from 'react';
import { iconoLink } from 'UI/assets';

import './styles.scss';

export const MonthsPayment = ({months}) => {
    return (
        months.map(month => (
            <div className='months-payment' key={month.id}>
                <h5>{month.month}</h5>
                <ul>
                    {month.payments.map(payment => (
                        <li key={payment.id}>
                            <span className='reason'>
                                {payment.reason}
                            </span>
                            <span className='amount'>
                                $ {payment.amount}
                                <button><img src={iconoLink} alt="" /></button>
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        ))
    );
};
