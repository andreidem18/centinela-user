import React from 'react';
import { Link } from 'react-router-dom';
import { buscando } from 'UI/assets';
import { formatDate, getAvatar } from 'utils';

import './styles.scss';

export const VisitsHome = ({ invitations }) => {

    return (
        <div className='visits-home'>
            { invitations?.length > 0 ? (
                invitations?.map(invitation => {
                    const date = formatDate(new Date(invitation.created_on));
                    return (
                        <Link className="card" to={`/visitas/invitaciones-enviadas/${invitation.id}`} key={invitation.id}>
                            <div className="guest">
                                <img src={getAvatar(invitation.guest.first_name, invitation.guest.lastname)} alt="Invitado" />
                                <div className="name">
                                    <span>{invitation.guest.first_name} {invitation.guest.last_name}</span>
                                    <span className='date'>{date.day}/{date.month}/{date.year}</span>
                                </div>
                                <div className={`status ${invitation.status ? 'active' : ''}`}>
                                    {invitation.status ? 'Activa' : 'Expirada'}
                                </div>
                            </div>
                        </Link>
                    )
                })
            ) : (
                <div className="card empty">
                    <img src={buscando} alt="" />
                    Parece que no haz hecho ninguna invitación. <Link to='/visitas/nueva-invitación'>Crea una</Link>
                </div>
            )}
        </div>
    );
};

