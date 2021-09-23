import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { InputLight } from 'UI/components';
import { useGuest } from 'hooks';

import "react-datepicker/dist/react-datepicker.css";
import "./styles.scss";

export const AddGuest = ({ guest, comeback }) => {

    const [ name, setName ] = useState(guest?.first_name || '');
    const [ lastName, setLastName ] = useState(guest?.last_name || '');
    const [ vehicle, setVehicle ] = useState(guest?.vehicle_type || '');
    const [ licensePlate, setLicensePlate ] = useState(guest?.license_plate || '');
    const [ saveGuest, setSaveGuest ] = useState(false);
    const [ isUniqueAccess, setIsUniqueAccess ] = useState(false);
    const [ dateFrom, setDateFrom ] = useState(new Date());
    const [ dateTo, setDateTo ] = useState(new Date());
    // Estado para que al hacer submit validar si el invitado se ha editado, y habría que crear uno nuevo, 
    // o si ya es uno guardado y sólo hay que enviar el id
    const [ isNewGuest, setIsNewGuest ] = useState(false);
    const { createInvitation } = useGuest();

    // const history = useHistory();

    const handleEnter = e => { 
        if(e.key === 'Enter') submit(); 
        else setIsNewGuest(true);
    } 

    const submit = () => {
        if(isNewGuest && !guest.id){
            createInvitation({
                first_name: name, 
                last_name: lastName, 
                vehicle_type: vehicle, 
                license_plate: licensePlate,
                favorite: saveGuest ? 1 : 0
            })
        } else createInvitation(guest.id)
    }
    return (
        <div className="container add-guest">
            <div className="access-configuration">
                <button className='comeback-button' onClick={comeback}>
                    <i className="icon-arrow-left"></i>
                </button>
                <button className="access-configuration-button" onClick={() => setIsUniqueAccess(!isUniqueAccess)}>
                    <i className="icon-add-guest"></i>
                    <span>
                        {isUniqueAccess ? 'Acceso único' : 'Acceso especial'}
                        <i className="icon-toggle"></i>
                    </span>
                </button>
            </div>
            <div className='standar-card-container'>
                <InputLight label="Nombre" value={name} onChange={e => setName(e.target.value)} onKeyDown={handleEnter} required />
                <InputLight label="Apellido" value={lastName} onChange={e => setLastName(e.target.value)} onKeyDown={handleEnter} required />
                <InputLight label="Vehículo (carro, moto...)" value={vehicle} onChange={e => setVehicle(e.target.value)} onKeyDown={handleEnter} required />
                <InputLight label="Placas" value={licensePlate} onChange={e => setLicensePlate(e.target.value)} onKeyDown={handleEnter} required />
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
                    <input type="checkbox" id="save-check" checked={saveGuest} onChange={e => setSaveGuest(e.target.checked)} />
                    <label htmlFor="save-check">Guardar como frecuente</label>
                </div>
                <button className="form-button" onClick={submit}>Enviar invitación</button>
            </div>
        </div>
    );
};
