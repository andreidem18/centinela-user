import React, { useState, useEffect } from 'react';
import { MessageEmpty, MainLayout } from 'UI/components';
import { InvitationDetail } from './components';
import { useGuest } from 'hooks';
import { useParams } from 'react-router';
import { formatDate, getAvatar } from 'utils';
import { InvitationsFilterModal } from 'UI/modals';

import "./styles.scss";

export const InvitationsSent = () => {
    
    const { getGuests, invitations } = useGuest();
    const { id } = useParams();

    const [ invitationSelected, setInvitationSelected ] = useState(null);
    const [ filteredInvitations, setFilteredInvitations ] = useState([]);
    const [ showFiltersModal, setShowFiltersModal ] = useState(false);

    useEffect(() => getGuests(), [ getGuests ]);
    useEffect(() => setFilteredInvitations(invitations), [ invitations ]);
    useEffect(() => setInvitationSelected(invitations?.find(i => i.id === parseInt(id))), [id, invitations]);
    
    return (
        <section className="invitations-sent">
                { invitationSelected ? (
                    <InvitationDetail invitation={invitationSelected} comeBack={() => setInvitationSelected(null)} />
                ) : (
                    <MainLayout sectionSelected='visits' title='Invitaciones enviadas'>
                        { 
                            invitations && invitations?.length > 0 ? (<>

                                <button className='button-filter' onClick={() => setShowFiltersModal(true)}>Filtrar</button>

                                {filteredInvitations?.length > 0 ? (
                                    filteredInvitations.map(invitation => {
                                        const date = formatDate(new Date(invitation.created_on));
                                        return (
                                            <button className="guest" onClick={() => setInvitationSelected(invitation)} key={invitation.id}>
                                                <img src={getAvatar(invitation.guest.first_name, invitation.guest.last_name)} alt="Invitado" />
                                                <div className="name">
                                                    <span>{invitation.guest.first_name} {invitation.guest.last_name}</span>
                                                    <span className='date'>{date.day}/{date.month}/{date.year}</span>
                                                </div>
                                                <div className={`status ${invitation.status ? 'active' : ''}`}>
                                                    {invitation.status ? 'Activa' : 'Expirada'}
                                                </div>
                                            </button>
                                        )
                                    })
                                ) : (
                                    <MessageEmpty 
                                        message='No se encontraron invitaciones con los filtros especificados.' 
                                        linkMessage='Filtrar de nuevo' 
                                        action={() => setShowFiltersModal(true)} 
                                    />
                                )}
                            </>) : (
                                <MessageEmpty 
                                    message='Parece ser que no has hecho ninguna invitación.' 
                                    linkMessage='¡Invita a un amigo!' 
                                    link='/visitas/nueva-invitación' 
                                />
                            )
                        }
                        { showFiltersModal && 
                            <InvitationsFilterModal 
                                handleClose={() => setShowFiltersModal(false)} 
                                invitations={invitations}
                                setInvitations={setFilteredInvitations}
                            />
                        }
                    </MainLayout>
                )}
        </section>
    );
};
