import React, { useState } from 'react';
import { Input } from 'UI/components';
import { formatTimeToMilitaryHour, getSpanishMonth, formatStringTime, handleTime, formatTime} from 'utils';
import { InfoModal } from 'UI/modals';

import './styles.scss';

export const CreateEventForm = ({ date, place, comeBack }) => {
    const [ error, setError ] = useState('');
    const [ showSuccessModal, setShowSuccessModal ] = useState(false);

    const submit = e => {
        e.preventDefault();
        // Asignar todos los valores a un objeto
        const data = { eventName: '', description: '', startHour: '', startHourMoment: '', endHour: '', endHourMoment: ''}
        let i = 0;
        for(const p in data){
            data[p] = e.target[i].value
            i++;
        }
        // Se pasa las horas a formato militar para luego pasarlas a fecha
        const start = formatTimeToMilitaryHour(data.startHour, data.startHourMoment);
        const end = formatTimeToMilitaryHour(data.endHour, data.endHourMoment);
        data.from = handleTime(date, start, 'add')
        data.to = handleTime(date, end, 'add')
        // Se busca si algún evento coincide con la fecha puesta
        const event = fakeEvents.find(e => {
            return (e.from <= data.from && e.to >= data.from) || (e.from <= data.to && e.to >= data.to)
        });
        // Se valida que las horas no se salgan del horario del lugar
        if(getHour(start) < getHour(place.opening_hour) || getHour(start) > getHour(place.close_hour)
          || getHour(end) < getHour(place.opening_hour) || getHour(end) > getHour(place.close_hour)){

            setError(`El horario de ${place.name} es de ${formatStringTime(place.opening_hour)} 
                    a ${formatStringTime(place.close_hour)}`)

        } else if(event) {
            setError(`Ya hay apartado un evento de ${formatTime(event.from)} a ${formatTime(event.to)}`)
        } else {
            setShowSuccessModal(true)
        }
    }


    const dateObj = getSpanishMonth(date);

    return (
        <div className='create-event-form'>
            <button className='comeback-button' onClick={comeBack}>
                <i className='icon-arrow-left'></i>
            </button>
            <h4>{place.name}</h4>
            <p className='date'>{dateObj.day} de {dateObj.month} del {dateObj.year}</p>
            <form action="" onSubmit={submit}>
                <Input className='light' label='Nombre del evento' required />
                <textarea placeholder='Descripción' rows='6' className='description' /> 
                <div className='hour'>
                    <label htmlFor='start'>Hora de inicio</label>
                    <input type="time" id="start" />
                    <select>
                        <option>am</option>
                        <option>pm</option>
                    </select>
                </div>
                <div className='hour'>
                    <label htmlFor='end'>Hora de cierre</label>
                    <input type="time" name="" id="end" />
                    <select>
                        <option>am</option>
                        <option>pm</option>
                    </select>
                </div>
                <button className='submit-button'>Agendar evento</button>
            </form>
            { showSuccessModal &&
                <InfoModal 
                    type='success' 
                    title='evento creado exitosamente' 
                    message='Tu evento esta en proceso de revisión, ¡te estaremos informando acerca del mismo!' 
                    handleClose={() => setShowSuccessModal(false)}
                    autoClose={true}
                    showingTime={3000}
                />
            }
            { error &&
                <InfoModal
                    type='error'
                    title='Problema con las horas'
                    message={error}
                    handleClose={() => setError('')}
                />
            }
        </div>
    );
};

const fakeEvents = [
    {id: 1, name: "cumpleaños", created_by: "B - 105", from: new Date("October 1, 2021 10:30:00"), to: new Date("October 1, 2021 14:00:00"), status: "Aceptada"}, 
    {id: 2, name: "boda", created_by: "E - 402", from: new Date("September 20, 2021 19:00:00"), to: new Date("September 20, 2021 23:00:00"), status: "Pendiente"},
    {id: 3, name: "Reunión familiar", created_by: "A - 201", from: new Date("September 26, 2021 12:00:00"), to: new Date("September 26, 2021 16:00:00"), status: "Pendiente"},
    {id: 4, name: "despedida", created_by: "B - 103", from: new Date("Septembre 18, 2021 10:30:00"), to: new Date("Septembre 18, 2021 14:00:00"), status: "Rechazada"}, 
    {id: 5, name: "cumpleaños", created_by: "D - 201", from: new Date("September 30, 2021 10:30:00"), to: new Date("September 30, 2021 14:00:00"), status: "Pendiente"}, 
    {id: 6, name: "banquete", created_by: "E - 402", from: new Date("September 30, 2021 10:30:00"), to: new Date("September 30, 2021 14:00:00"), status: "Aceptada"}, 
]

const getHour = hour => hour.split(':')[0];


