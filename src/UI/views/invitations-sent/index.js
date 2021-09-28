import React, { useState, useEffect } from 'react';
import { StandarComeBackButton, StandarContainer, MessageEmpty } from 'UI/components';
import { InvitationDetail } from './components';
import { useGuest } from 'hooks';
import { useParams } from 'react-router';

import "./styles.scss";
import { getAvatar } from 'utils';

export const InvitationsSent = () => {

    const [ invitationSelected, setInvitationSelected ] = useState(null);
    const { getGuests, invitations } = useGuest();
    const { id } = useParams();

    useEffect(() => getGuests(), [ getGuests ]);
    useEffect(() => setInvitationSelected(invitations?.find(i => i.id === parseInt(id))), [id, invitations])
    
    return (
        <section className="invitations-sent">
            <StandarContainer>
                { invitationSelected ? (
                    <InvitationDetail invitation={invitationSelected} comeBack={() => setInvitationSelected(null)} />
                ) : (
                <div className='container'>

                    <StandarComeBackButton isLink={true} link='/visitas' icon='icon-add-register' />

                    <div className="standar-card-container">
                        <div className="card-title-container">
                            <h4>Invitaciones enviadas</h4>
                        </div>
                        <div className="guests">
                            { 
                                invitations && invitations?.length > 0 ? (
                                    invitations.map(invitation => (
                                        <div className="guest-container" key={invitation.id}>
                                            <div className="guest">
                                                <img src={getAvatar(invitation.guest.first_name, invitation.guest.lastname)} alt="Invitado" />
                                                <span className="name">{invitation.guest.first_name} {invitation.guest.last_name}</span>
                                                <button 
                                                    className={`${invitation.status ? 'active' : ''}`} 
                                                    onClick={() => setInvitationSelected(invitation)}
                                                >
                                                    <span>{invitation.status ? 'Activa' : 'Finalizada'}</span>
                                                    <i className="fas fa-caret-right"></i>
                                                </button>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <MessageEmpty 
                                        message='Parece ser que no has hecho ninguna invitación.' 
                                        linkMessage='¡Invita a un amigo!' 
                                        link='/visitas/nueva-invitación' 
                                    />
                                )
                            }
                        </div>
                    </div>
                </div>)}
            </StandarContainer>
        </section>
    );
};
