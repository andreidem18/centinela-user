import React, { useState, useEffect } from 'react';
import { escudoAncho } from 'UI/assets';
import { Profile, FormAddProfile } from './components';
import { useAuth } from 'hooks';
import { Redirect } from 'react-router-dom';
import { PremiumInvitationByProfilesModal } from 'UI/modals';

import './styles.scss';

export const SelectProfile = () => {

    const { loggedUser, getUser, doLogout } = useAuth();
    const [ showFormAddProfile, setShowFormAddProfile ] = useState(false);
    const [ showPremiumInvitation, setShowPremiumInvitation ] = useState(false);

    useEffect(() => localStorage.setItem('profile', ''), []);

    useEffect(() => getUser(), [getUser]); 


    const handleAddProfile = () => {
        if(loggedUser.isPremium || loggedUser.profiles.length < 1) setShowFormAddProfile(true);
        else setShowPremiumInvitation(true);
    }


    
    return (
        localStorage.getItem('token') ? (
            <section className='select-profile'>
                <div className="select-profile-content">
                    <img src={escudoAncho} alt='Escudo' className="logo" />
                    {loggedUser.profiles.map(profile => (
                        <Profile profile={profile} key={profile.id} />
                    ))}
                    <div className="options">
                        <button className="button-add" onClick={handleAddProfile}>
                            <i className="fas fa-plus"></i>
                            <span>Añadir perfil</span>
                        </button>
                    </div>
                </div>
                <div className="logout-button">
                    <button onClick={() => doLogout()}>Cerrar sesión</button>
                </div>
                <FormAddProfile isOpen={showFormAddProfile} handleClose={() => setShowFormAddProfile(false)}/>
                {showPremiumInvitation &&
                    <PremiumInvitationByProfilesModal handleClose={() => setShowPremiumInvitation(false)} />
                }
            </section>
            ) : <Redirect to='login' />
    );
};

