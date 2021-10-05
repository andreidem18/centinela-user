import React, { useState, useEffect } from 'react';
import { MainLayout } from 'UI/components';
import { getSpanishMonth, withoutTime, formatTime, formatStringTime } from 'utils';
import { CreateEventForm } from '../create-event-form';

import './styles.scss';

export const PlaceInfo = ({ date, place, comeBack }) => {

    const [ showForm, setShowForm ] = useState(false);
    const [ events, setEvents ] = useState([]);

    useEffect(() => {
        const data = fakeEvents.filter(e => withoutTime(e.from).getTime() === withoutTime(date).getTime());
        setEvents(data);
    }, [date])

    const dateObj = getSpanishMonth(date);
    return (
        showForm ? <CreateEventForm comeBack={() => setShowForm(false)} date={date} place={place} /> :
        <MainLayout title='Eventos' sectionSelected='events' comeback={comeBack}>
            <div className='place-info'>
                <div className="header">
                    <div style={{width: '50%'}}>
                        <h4>{place.name}</h4>
                        <p className='date'>{dateObj.day} de {dateObj.month} del {dateObj.year}</p>
                    </div>
                    {place.image && <img src={place.image} alt="Imagen" />}
                </div>
                <p className="description">
                    {place.description}
                </p>
                <div className="detail"><strong>Apertura</strong> <span>{formatStringTime(place.opening_hour)}</span></div>
                <div className="detail"><strong>Cierre</strong> <span>{formatStringTime(place.close_hour)}</span></div>
                <div className="detail"><strong>Capacidad</strong> <span>{place.people_capacity}</span></div>
                
                <div className="bottom-section">
                    {
                        events.length > 0 &&
                            <div className="hours-taken">
                                <p>Las siguientes horas ya se encuentran apartadas:</p>
                                <ul>
                                    {events.map(e => <li key={e.id}>de {formatTime(e.from)} a {formatTime(e.to)}</li>)}
                                </ul>
                            </div>
                    }
                    <button onClick={() => setShowForm(true)}>Agendar evento</button>
                </div>
            </div>
        </MainLayout>
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