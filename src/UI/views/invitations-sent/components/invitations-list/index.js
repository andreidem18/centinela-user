import React from 'react';
import { formatDate, getAvatar } from 'utils';
import { MessageEmpty } from 'UI/components';

import './styles.scss';

export const InvitationsList = ({ setShowFiltersModal, filteredInvitations, setInvitationSelected}) => {
    return (
        <div className='invitations-list'>
            <button className='button-filter' onClick={() => setShowFiltersModal(true)}>Filtrar</button>
            {
                filteredInvitations?.length > 0 ? (
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
                )
            }
        </div>
    );
};
