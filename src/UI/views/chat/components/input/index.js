import React from 'react';
import './styles.scss';

export const Input = () => {

    return (
        <div className='input-container'>
            <div className="input">
                <textarea 
                    placeholder='Aa'
                    rows="1"
                ></textarea>
                <button className="button-send">
                    <i className="fas fa-paper-plane"></i>
                </button>
            </div>
        </div>
    );
};
