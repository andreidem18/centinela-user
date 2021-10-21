import React, { useState, useEffect} from 'react';
import { formatStringTime, formatTime, withoutTime } from 'utils';
import { PlaceInfo, SelectDate, CreateEventForm } from './components';
import { handleTime } from 'utils';

import './styles.scss';
import { useDispatch } from 'react-redux';
import { showInfoModal } from 'redux/actions';

export const Events = () => {

    const [ placeSelected, setPlaceSelected ] = useState(null);
    const [ dateSelected, setDateSelected ] = useState(null);
    const [ showForm, setShowForm ] = useState(false);
    const [ dateEvents, setDateEvents ] = useState([]);
    const dispatch = useDispatch();

    const handlePlace = id => setPlaceSelected(places.find(p => p.id === parseInt(id)));
    
    useEffect(() => {
        if(dateSelected){
            const data = fakeEvents.filter(event => {
                return withoutTime(event.from).getTime() === withoutTime(dateSelected).getTime()
            });
            setDateEvents(data);
        }
    }, [ dateSelected ]);

    

    const createEventSubmit = e => {
        e.preventDefault();
        // Asignar todos los valores a un objeto
        const data = { eventName: '', description: '', startHour: '', endHour: ''}
        let i = 0;
        for(const p in data){
            data[p] = e.target[i].value
            i++;
        }
        const start = data.startHour;
        const end = data.endHour;
        data.from = handleTime(dateSelected, start, 'add');
        data.to = handleTime(dateSelected, end, 'add');
        // Se busca si algún evento coincide con la fecha puesta
        const event = fakeEvents.find(event => {
            return (event.from <= data.from && event.to >= data.from) || (event.from <= data.to && event.to >= data.to)
        });
        const infoModalError = { type: 'error', autoClose: true, showingTime: 4000, title: 'Los horarios no coinciden' }
        // Se valida que las horas no se salgan del horario del lugar
        if(getHour(start) < getHour(placeSelected.opening_hour) || getHour(start) > getHour(placeSelected.close_hour)
          || getHour(end) < getHour(placeSelected.opening_hour) || getHour(end) > getHour(placeSelected.close_hour)){
            infoModalError.message = `El horario de ${placeSelected.name} es de ${formatStringTime(placeSelected.opening_hour)} a ${formatStringTime(placeSelected.close_hour)}`
            dispatch(showInfoModal(infoModalError))

            // Se valida que no coincida con otros eventos
        } else if(event) {
            infoModalError.message=`Ya hay apartado un evento de ${formatTime(event.from)} a ${formatTime(event.to)}`
            dispatch(showInfoModal(infoModalError));
        } else {
            const cleanState = () => {
                setShowForm(false);
                setDateSelected(null);
            }
            dispatch(showInfoModal({ 
                type: 'success', 
                actionModal: cleanState, 
                title: 'Evento creado', 
                message: 'Tu evento esta en proceso de aprobación por parte de los administradores. ¡Te estaremos avisando acerca del mismo!' 
            }));
        }
    }

    return (
        <section className='events'>
            {   
                showForm ? (  // Tercera vista: El formulario para crear el evento
                    <CreateEventForm 
                        date={dateSelected} 
                        place={placeSelected} 
                        comeback={() => setShowForm(false)} 
                        submit={createEventSubmit}
                    />
                ) : (
                    dateSelected ? (   // Segunda vista: la información del lugar
                        <PlaceInfo
                            date={dateSelected} 
                            place={placeSelected} 
                            comeback={() => setDateSelected(null)} 
                            events={dateEvents} 
                            setShowForm={setShowForm}
                        />
                    ) : (  // Primera vista: el select y el calendario
                        <SelectDate 
                            places={places} 
                            placeSelected={placeSelected} 
                            handlePlace={handlePlace} 
                            setDateSelected={setDateSelected} 
                        />
                    )
                )
            }
        </section>
    );
};




const getHour = hour => hour.split(':')[0];


const places = [
    {
        id: 1,
        name: 'Jardín',
        disabledDates: [new Date("September 30, 2021 10:30:00")],
        description: 'Espacio al aire libre, perfecto para la celebración de cumpleaños infantiles o barbacoas. Cuenta con suficiente espacio para poner objetos recreativos como inflables o trampolines.',
        opening_hour: '10:00',
        close_hour: '20:00',
        image: 'https://tusejemplos.com/wp-content/uploads/2016/07/Jardin.jpg',
        people_capacity: '40 personas'
    },
    {
        id: 2,
        name: 'Alberca',
        disabledDates: [new Date("September 19, 2021 10:30:00")],
        description: 'Excelente complejo recreativo para disfrutar de un día al aire libre en una refrescante piscina, con agua climatizada y espacio para bronceado',
        opening_hour: '10:00',
        close_hour: '18:00',
        image: 'https://www.lathampool.com/wp-content/uploads/2021/04/corinthian-14-pearl-white-G3-fiberglass-slate-deck.jpg',
        people_capacity: '20 personas'
    },
    {
        id: 3,
        name: 'Salón pequeño',
        disabledDays: [],
        disabledDates: [],
        description: 'Salón para medianos y pequeños eventos. Cuenta con equipo de sonido y una gran mesa central para banquetes. Ideal para eventos familiares.',
        opening_hour: '15:00',
        close_hour: '24:00',
        image: 'https://media-cdn.tripadvisor.com/media/photo-s/16/11/f3/99/our-newly-built-luxury.jpg',
        people_capacity: '30 personas'
    },
]


const fakeEvents = [
    {id: 1, name: "cumpleaños", created_by: "B - 105", from: new Date("October 1, 2021 10:30:00"), to: new Date("October 1, 2021 14:00:00"), status: "Aceptada"}, 
    {id: 2, name: "boda", created_by: "E - 402", from: new Date("September 20, 2021 19:00:00"), to: new Date("September 20, 2021 23:00:00"), status: "Pendiente"},
    {id: 3, name: "Reunión familiar", created_by: "A - 201", from: new Date("September 26, 2021 12:00:00"), to: new Date("September 26, 2021 16:00:00"), status: "Pendiente"},
    {id: 4, name: "despedida", created_by: "B - 103", from: new Date("Septembre 18, 2021 10:30:00"), to: new Date("Septembre 18, 2021 14:00:00"), status: "Rechazada"}, 
    {id: 5, name: "cumpleaños", created_by: "D - 201", from: new Date("September 30, 2021 10:30:00"), to: new Date("September 30, 2021 14:00:00"), status: "Pendiente"}, 
    {id: 6, name: "banquete", created_by: "E - 402", from: new Date("September 30, 2021 10:30:00"), to: new Date("September 30, 2021 14:00:00"), status: "Aceptada"}, 
]
