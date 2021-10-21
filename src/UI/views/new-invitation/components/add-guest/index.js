import React, { useState } from 'react';
import { InputLight, MainLayout } from 'UI/components';

import "react-datepicker/dist/react-datepicker.css";
import "./styles.scss";

export const AddGuest = props => {

    const guest = props.guest
    // Estado para que al hacer submit validar si el invitado se ha editado, y habría que crear uno nuevo, 
    // o si ya es uno guardado y sólo hay que enviar el id
    const [ isNewGuest, setIsNewGuest ] = useState(false);

    const handleEnter = e => { 
        if(e.key === 'Enter') props.submit(isNewGuest); 
        else setIsNewGuest(true);
    } 

    const changeGuest = (e, field) => {
        props.setGuest(guest => ({...guest, [field]: e.target.value}))
    }

    return (
        <MainLayout sectionSelected='visits' title='Nueva Invitación' comeback={props.comeback} bottomMenu={false}>
            <div className="container add-guest">
                <button className="new-guest-link" onClick={() => props.setIsUniqueAccess(!props.isUniqueAccess)}>
                    {props.isUniqueAccess ? 'Acceso único' : 'Acceso especial'}
                    <i className="icon-toggle"></i>
                </button>
                {/* No es un formulario para que el required no interfiera, ya que no todos los campos son requeridos. Pero el required es necesario para el efecto de label flotante */}
                <div className='form-container'>
                    <InputLight 
                        label="Nombre" 
                        value={guest?.first_name || ''} 
                        onChange={e => changeGuest(e, 'first_name')} 
                        onKeyDown={handleEnter} 
                        required 
                    />
                    <InputLight 
                        label="Apellido" 
                        value={guest?.last_name || ''} 
                        onChange={e => changeGuest(e, 'last_name')} 
                        onKeyDown={handleEnter} 
                        required 
                    />
                    <InputLight 
                        label="Vehículo (carro, moto...)" 
                        value={guest?.vehicle || ''} 
                        onChange={e => changeGuest(e, 'vehicle')} 
                        onKeyDown={handleEnter} 
                        required 
                    />
                    <InputLight 
                        label="Placas" 
                        value={guest?.license_plate || ''} 
                        onChange={e => changeGuest(e, 'license_plate')} 
                        onKeyDown={handleEnter} 
                        required 
                    />
                    {
                        !props.isUniqueAccess &&
                            <div className="calendars">
                                <div className="date-container">
                                    <label htmlFor="date-from">Desde</label>
                                    <input 
                                        type="date" 
                                        id="date-from" 
                                        value={props.dateFrom} 
                                        onChange={e => props.setDateFrom(e.target.value)} 
                                    />
                                </div>
                                <div className="date-container">
                                    <label htmlFor="date-to">Hasta</label>
                                    <input 
                                        type="date" 
                                        id="date-to" 
                                        value={props.dateTo} 
                                        onChange={e => props.setDateTo(e.target.value)} 
                                    />
                                </div>
                            </div>
                    }
                    <div className="check-container">
                        <input 
                            type="checkbox" 
                            id="save-check" 
                            checked={ guest.favorite ?? false } 
                            onChange={e => props.setGuest(guest => ({...guest, favorite: +e.target.checked}))} 
                        />
                        <label htmlFor="save-check">Guardar como frecuente</label>
                    </div>
                    <button className="form-button" onClick={() => props.submit(isNewGuest)}>Enviar invitación</button>
                </div>
            </div>
        </MainLayout>
    );
};
