import React from 'react';
import DatePicker from 'react-datepicker';
import { MainLayout } from 'UI/components';
import { getAvatar } from 'utils';
import { useGuest } from 'hooks';
import { useHistory } from 'react-router';

import "react-datepicker/dist/react-datepicker.css";
import "./styles.scss";

export const InvitationDetail = ({ comeBack, invitation }) => {

    const history = useHistory();

    const { addGuest } = useGuest();

    return (
        <MainLayout title='invitación' sectionSelected='visits' comeback={comeBack}>
            <div className="invitation-detail">

                    <h4>
                        {invitation.guest.first_name} {invitation.guest.last_name} - <span>{invitation.status ? 'Activa' : 'Finalizada'}</span>
                    </h4>
                    {
                        !invitation.guest.favorite &&
                            <button className='save-guest-button' onClick={() => addGuest(invitation.guest.id)}>
                                <span className='save-guest-button'>Guardar invitado</span>
                                <img src={getAvatar(invitation.guest.first_name, invitation.guest.lastname)} alt="Avatar del visitante" className="guest-image" />
                            </button>
                    }
                    <div className="calendars">
                        <div className="date-container">
                            <label htmlFor="datepicker-created">Creada</label>
                            <DatePicker selected={new Date(invitation.created_on)} id="datepicker-created" disabled />
                        </div>
                        { invitation.expires &&
                            <div className="date-container">
                                <label htmlFor="datepicker-expires">Vence</label>
                                <DatePicker selected={invitation.expires} id="datepicker-expires" />
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
        </MainLayout>
    );
};
