import React from 'react';

import './styles.scss';

export const PremiumInvitationByProfilesModal = ({ handleClose }) => {
    return (
        <div className="modal">
            <div className="premium-invitation">
                <p>Has alcanzado el tope de perfiles. Para crear perfiles ilimitados</p>
                <span className='premium-message'>¡Hazte Premium!</span>
                <button className='primary'>Subir a Premium</button>
                <button onClick={handleClose} className='secondary'>No, gracias</button>
            </div>
            <div className="overlay" onClick={handleClose}></div>
        </div>
    );
};
