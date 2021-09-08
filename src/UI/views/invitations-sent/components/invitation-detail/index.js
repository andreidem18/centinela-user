import React, { useState } from 'react';
import { invitacionesEnviadasAzul } from 'UI/assets';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";
import "./styles.scss";
import { InputLight } from 'UI/components';

export const InvitationDetail = ({comeBack, invitation}) => {

    const [dateCreated, setDateCreated] = useState(invitation.created);
    const [dateExpiration, setDateExpiration] = useState(invitation.expires);

    return (
        <div className="invitation-detail">
            <div className="come-back-button">
                <button onClick={comeBack}>
                    <i className="fas fa-chevron-left"></i>
                </button>
                <img src={invitacionesEnviadasAzul} alt="Agregar invitado" />
            </div>
            <div className="card">
                <div className="card-title-container">
                    <h4>
                        {invitation.name} - <span>{invitation.status}</span>
                    </h4>
                </div>
                <img src={invitation.avatar} alt="Imagen del visitante" className="guest-image" />
                <div className="calendars">
                    <div className="date-container">
                        <label htmlFor="datepicker-created">Creada</label>
                        <DatePicker selected={dateCreated} onChange={date => setDateCreated(date)} id="datepicker-created" />
                    </div>
                    <div className="date-container">
                        <label htmlFor="datepicker-expires">Vence</label>
                        <DatePicker selected={dateExpiration} onChange={date => setDateExpiration(date)} id="datepicker-expires" />
                    </div>
                </div>
                <InputLight label='Model del automóvil' value={invitation.carModel} />
                <InputLight label='Placas' value={invitation.licensePlate} />
                <button className="finish-button" onClick={comeBack}>Terminar</button>
            </div>
        </div>
    );
};
