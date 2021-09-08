import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { Link, useHistory } from 'react-router-dom';
import { agregarInvitadoAzul, iconoToggle } from 'UI/assets';
import { Input, AlternativeBackground, LateralMenu, NavBar } from 'UI/components';

import "react-datepicker/dist/react-datepicker.css";
import "./styles.scss";

export const AddGuest = () => {

    const [ isUniqueAccess, setIsUniqueAccess ] = useState(false);
    const [dateFrom, setDateFrom] = useState(new Date());
    const [dateTo, setDateTo] = useState(new Date());

    const history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();
        history.push('/visitas/codigo/1')
    }
    return (
        <section className="add-guest">
            <AlternativeBackground>
                <NavBar />
                <div className="access-configuration">
                    <Link to="/visitas/nueva-invitación">
                        <i className="fas fa-chevron-left"></i>
                    </Link>
                    <button className="access-configuration-button" onClick={() => setIsUniqueAccess(!isUniqueAccess)}>
                        <img src={agregarInvitadoAzul} alt="Agregar invitado" />
                        <span>
                            {isUniqueAccess ? 'Acceso único' : 'Acceso especial'}
                            <img src={iconoToggle} alt="" className="icon-toggle" 
                        /></span>
                    </button>
                </div>
                <form action="" onSubmit={handleSubmit}>
                    <Input label="Nombre" required />
                    <Input label="Carro" required />
                    <Input label="Placas" required />
                    {
                        isUniqueAccess &&
                            <div className="calendars">
                                <div className="date-container">
                                    <label htmlFor="datepicker-from">Desde</label>
                                    <DatePicker selected={dateFrom} onChange={date => setDateFrom(date)} id="datepicker-from" />
                                </div>
                                <div className="date-container">
                                    <label htmlFor="datepicker">Hasta</label>
                                    <DatePicker selected={dateTo} onChange={date => setDateTo(date)} id="datepicker-to" />
                                </div>
                            </div>
                    }
                    <div className="check-container">
                        <input type="checkbox" id="save-check" />
                        <label htmlFor="save-check">Guardar como frecuente</label>
                    </div>
                    <button className="form-button">Enviar invitación</button>
                </form>
                <LateralMenu />
            </AlternativeBackground>
        </section>
    );
};
