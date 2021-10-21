import React from 'react';
import { Input, MainLayout } from 'UI/components';
import { getSpanishMonth } from 'utils';

import './styles.scss';

export const CreateEventForm = ({ date, place, comeback, submit }) => {

    const dateObj = getSpanishMonth(date);

    return (
        <MainLayout sectionSelected='events' title='Eventos' comeback={comeback} bottomMenu={false}>
            <div className='create-event-form'>
                <h4>{place.name}</h4>
                <p className='date'>{dateObj.day} de {dateObj.month} del {dateObj.year}</p>
                <form action="" onSubmit={submit}>
                    <Input className='light' label='Nombre del evento' required />
                    <textarea placeholder='Descripción' rows='6' className='description' /> 
                    <div className='hour'>
                        <label htmlFor='start'>Hora de inicio</label>
                        <input type="time" id="start" required />
                    </div>
                    <div className='hour'>
                        <label htmlFor='end'>Hora de cierre</label>
                        <input type="time" name="" id="end" required />
                    </div>
                    <button className='submit-button'>Agendar evento</button>
                </form>
            </div>
        </MainLayout>
    );
};



