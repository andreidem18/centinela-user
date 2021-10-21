import React from 'react';
import { MainLayout } from 'UI/components';
import { getAvatar } from 'utils';
import { useHistory } from 'react-router';
import { formatDateString, formatTime } from 'utils';

import "react-datepicker/dist/react-datepicker.css";
import "./styles.scss";

export const InvitationDetail = ({ comeBack, invitation, addGuest }) => {

    const history = useHistory();
    const creationDate = formatDateString(new Date(invitation.created_on));
    const creationHour = formatTime(new Date(invitation.created_on));

    return (
        <MainLayout title='invitación' sectionSelected='visits' comeback={comeBack}>
            <div className="invitation-detail">
                    <h4>
                        {invitation.guest.first_name} {invitation.guest.last_name} - <span>{invitation.status ? 'Activa' : 'Expirada'}</span>
                    </h4>
                    <span className='created-date'>Creada el {creationDate} a las {creationHour}</span>
                    {
                        !invitation.guest.favorite &&
                            <button className='save-guest-button' onClick={() => addGuest(invitation.guest.id)}>
                                <span className='save-guest-button'>Guardar invitado</span>
                                <img src={getAvatar(invitation.guest.first_name, invitation.guest.last_name)} alt="Avatar del visitante" className="guest-image" />
                            </button>
                    }
                    {
                        invitation.type === 2 &&
                            <div className="calendars">
                                <div className="feature-container">
                                    <span className="label">Desde</span>
                                    <div className="feature"> {formatDateString(new Date(invitation.date_start))} </div>
                                </div>
                                <div className="feature-container">
                                    <span className="label">Expira</span>
                                    <div className="feature"> {formatDateString(new Date(invitation.date_end))} </div>
                                </div>
                            </div>
                    }
                    { invitation.guest.vehicle_type &&
                        <div className="feature-container">
                            <span className="label">Tipo de vehículo</span>
                            <div className="feature"> {invitation.guest.vehicle_type} </div>
                        </div>
                    }
                    { invitation.guest.license_plate &&
                        <div className="feature-container">
                            <span className="label">Placa</span>
                            <div className="feature"> {invitation.guest.license_plate} </div>
                        </div>
                    }
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
        </MainLayout>
    );
};
