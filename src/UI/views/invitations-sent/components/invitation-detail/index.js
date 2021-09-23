import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { StandarComeBackButton } from 'UI/components';
import { getAvatar } from 'utils';
import { useGuest } from 'hooks';
import { useHistory } from 'react-router';

import "react-datepicker/dist/react-datepicker.css";
import "./styles.scss";

export const InvitationDetail = ({ comeBack, invitation }) => {

    const [dateCreated, setDateCreated] = useState(new Date(invitation.created_on));
    const [dateExpiration, setDateExpiration] = useState(invitation.expires);
    const history = useHistory();

    const { addGuest } = useGuest();

    return (
        <div className="invitation-detail container">

            <StandarComeBackButton onClick={comeBack} icon='icon-add-register' />

            <div className="standar-card-container">
                <div className="card-title-container">
                    <h4>
                        {invitation.guest.first_name} {invitation.guest.last_name} - <span>{invitation.status ? 'Activa' : 'Finalizada'}</span>
                    </h4>
                </div>
                <button className='save-guest-button' onClick={() => addGuest(invitation.guest.id)}>
                    <span className='save-guest-button'>Guardar invitado</span>
                    <img src={getAvatar(invitation.guest.first_name, invitation.guest.lastname)} alt="Avatar del visitante" className="guest-image" />
                </button>
                <div className="calendars">
                    <div className="date-container">
                        <label htmlFor="datepicker-created">Creada</label>
                        <DatePicker selected={dateCreated} onChange={date => setDateCreated(date)} id="datepicker-created" disabled />
                    </div>
                    { dateExpiration &&
                        <div className="date-container">
                            <label htmlFor="datepicker-expires">Vence</label>
                            <DatePicker selected={dateExpiration} onChange={date => setDateExpiration(date)} id="datepicker-expires" />
                        </div>
                    }
                </div>
                <div className="feature-container">
                    <span className="label">Tipo de vehículo</span>
                    <div className="feature"> {invitation.guest.vehicle_type} </div>
                </div>
                <div className="feature-container">
                    <span className="label">Placa</span>
                    <div className="feature"> {invitation.guest.license_plate} </div>
                </div>
                {
                    invitation.status ? (
                        <button 
                            className="finish-button" 
                            onClick={() => history.push(`/visitas/codigo/${invitation.code}`)}    
                        >
                            Ver invitación <i className="fas fa-qrcode"></i>
                        </button>
                    ) : (
                        <button className="finish-button" onClick={comeBack}>Terminar</button>
                    )
                }
            </div>
        </div>
    );
};
