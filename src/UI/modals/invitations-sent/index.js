import React, { useState } from 'react';
import { InputLight } from 'UI/components';

import './styles.scss';

export const InvitationsFilterModal = ({ handleClose, invitations, setInvitations }) => {
    
    const [ name, setName ] = useState('');
    const [ dateSince, setDateSince ] = useState('');
    const [ dateUntil, setDateUntil ] = useState('');
    const [ showActives, setShowActives ] = useState(true);
    const [ showExpired, setShowExpired ] = useState(true);

    const filter = () => {
        if(name){
            invitations = invitations.filter(invitation => {
                const guestName = `${invitation.guest.first_name} ${invitation.guest.last_name}`
                return guestName.toLowerCase().includes(name.toLowerCase())
            })
        }
        if(dateSince){
            invitations = invitations.filter(invitation => {
                const invitationDate = new Date(invitation.created_on);
                const selectedDateSince = new Date(dateSince);
                return invitationDate > selectedDateSince;
            })
        }
        if(dateUntil){
            invitations = invitations.filter(invitation => {
                const invitationDate = new Date(invitation.created_on);
                const selectedDateUntil = new Date(dateUntil+'T23:00:00'); // Para que tome las invitaciones del día seleccionado
                return invitationDate < selectedDateUntil;
            })
        }
        if(!showActives){
            invitations = invitations.filter(invitation => invitation.status !== 1)
        }
        if(!showExpired){
            invitations = invitations.filter(invitation => invitation.status !== 0)
        }
        setInvitations(invitations);
        handleClose();
    }

    return (
        <div className="modal">
            <div className="invitations-filter">
                <h4>Filtrar invitaciones</h4>
                <InputLight label='Nombre' value={name} onChange={e => setName(e.target.value)} required />
                <h5>Fecha de creación</h5>
                <div className="date-container">
                    <label htmlFor="date-since">Desde</label>
                    <input type="date" id="date-since" value={dateSince} onChange={e => setDateSince(e.target.value)} />
                </div>
                <div className="date-container">
                    <label htmlFor="date-until">Hasta</label>
                    <input type="date" id="date-until" value={dateUntil} onChange={e => setDateUntil(e.target.value)} />
                </div>
                <h5>Status</h5>
                <div className="status">
                    <button 
                        className={showActives ? 'active' : ''} 
                        onClick={() => setShowActives(!showActives)}
                    >
                        Activos
                    </button>
                    <button 
                        className={showExpired ? 'active' : ''} 
                        onClick={() => setShowExpired(!showExpired)}
                    >
                        Expirados
                    </button>
                </div>
                
                <button className='filter-button' onClick={filter}>Filtrar</button>
            </div>
            <div className="overlay" onClick={handleClose}></div>
        </div>
    );
};
