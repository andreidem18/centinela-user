import React from 'react';
import { getSpanishMonth } from 'utils';

import './styles.scss';

export const PaymentRejectedReasons = ({ payment, comeback, setShowDetail }) => {

    const date = getSpanishMonth(payment.date);
    return (
        <div className='payment-rejected-reasons'>
            <h4 className="title-payment">
                <button onClick={comeback} className='comeback-button'>
                    <i className="icon-arrow-left"></i>
                </button>
                {date.month} {date.year}
            </h4>
            <div className="amount">
                $ {payment.amount}
            </div>
            <h4 className='reject-reason-title'>Motivos de rechazo</h4>
            <p className="reject-reason">
                {payment.reject_cause}
            </p>
            <button 
                onClick={() => setShowDetail(true)}
                className='main-button'>
                    Comprobar pago
            </button>
        </div>
    );
};
