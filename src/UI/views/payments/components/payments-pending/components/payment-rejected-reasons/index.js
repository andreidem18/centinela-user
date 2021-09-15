import React, { useState } from 'react';
import { getSpanishMonth } from 'utils';
import { PaymentDetail } from '..';

import './styles.scss';

export const PaymentRejectedReasons = ({ payment, comeback }) => {

    const [ showDetail, setShowDetail ] = useState(false);

    const date = getSpanishMonth(payment.date);
    return (
        showDetail ? (
            <PaymentDetail payment={payment} comeback={() => setShowDetail(false)} />
        ) : (
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
                <div className="reject-reason">
                    {payment.reject_cause}
                </div>
                <button 
                    onClick={() => setShowDetail(true)}
                    className='main-button'>
                        Comprobar pago
                </button>
            </div>
        )
    );
};
