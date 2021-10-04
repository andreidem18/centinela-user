import React, { useState } from 'react';
import { InputLight, MainLayout } from 'UI/components';
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
    const [ dateFrom, setDateFrom ] = useState('');
    const [ dateTo, setDateTo ] = useState('');
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
        <MainLayout sectionSelected='visits' title='Nueva Invitación' comeback={comeback} bottomMenu={false}>
            <div className="container add-guest">
                <button className="new-guest-link" onClick={() => setIsUniqueAccess(!isUniqueAccess)}>
                    {isUniqueAccess ? 'Acceso único' : 'Acceso especial'}
                    <i className="icon-toggle"></i>
                </button>
                {/* No es un formulario para que el required no interfiera, ya que no todos los campos son requeridos. Pero el required es necesario para el efecto de label flotante */}
                <div className='form-container'>
                    <InputLight label="Nombre" value={name} onChange={e => setName(e.target.value)} onKeyDown={handleEnter} required />
                    <InputLight label="Apellido" value={lastName} onChange={e => setLastName(e.target.value)} onKeyDown={handleEnter} required />
                    <InputLight label="Vehículo (carro, moto...)" value={vehicle} onChange={e => setVehicle(e.target.value)} onKeyDown={handleEnter} required />
                    <InputLight label="Placas" value={licensePlate} onChange={e => setLicensePlate(e.target.value)} onKeyDown={handleEnter} required />
                    {
                        isUniqueAccess &&
                            <div className="calendars">
                                <div className="date-container">
                                    <label htmlFor="date-from">Desde</label>
                                    <input type="date" id="date-from" value={dateFrom} onChange={e => setDateFrom(e.target.value)} />
                                </div>
                                <div className="date-container">
                                    <label htmlFor="date-to">Hasta</label>
                                    <input type="date" id="date-to" value={dateTo} onChange={e => setDateTo(e.target.value)} />
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
        </MainLayout>
    );
};
