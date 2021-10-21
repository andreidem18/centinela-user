import { MainLayout } from 'UI/components';
import { getSpanishMonth, formatTime, formatStringTime } from 'utils';

import './styles.scss';

export const PlaceInfo = ({ date, place, comeback, events, setShowForm }) => {

    const dateObj = getSpanishMonth(date);

    return (
        <MainLayout title='Eventos' sectionSelected='events' comeback={comeback}>
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
