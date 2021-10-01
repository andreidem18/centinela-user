import React, { useState} from 'react';
import { HomeLink, StandarContainer } from 'UI/components';
import { eventos } from 'UI/assets';
import { Calendar, PlaceInfo } from './components';

import './styles.scss';

export const Events = () => {

    const [ place, setPlace ] = useState(null);
    const [ dateSelected, setDateSelected ] = useState(null);

    const handlePlace = id => setPlace(places.find(p => p.id === parseInt(id)));

    return (
        <section className='events'>
            <StandarContainer sectionSelected='events' background>
                <HomeLink />
                <h3 className='standar-section-title'>Eventos</h3>
                <div className="main-image">
                    <img src={eventos} alt="" />
                </div>
                <div className="standar-card-container">
                    {
                        dateSelected ? (
                            <PlaceInfo date={dateSelected} place={place} comeBack={() => setDateSelected(null)} />
                        ) : (
                            <>
                                <select value={place?.id || ''} onChange={e => handlePlace(e.target.value)} className='place-select'>
                                    <option value={null}>Selecciona el lugar del evento</option>
                                    {places.map(place => (
                                        <option value={place.id} key={place.id}>
                                            {place.name}
                                        </option>
                                    ))}
                                </select>
                                {place && <Calendar place={place} setDate={setDateSelected} />}
                            </>
                        )
                    }
                </div>
            </StandarContainer>
        </section>
    );
};


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