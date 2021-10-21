import React from 'react';
import { MainLayout } from 'UI/components';
import { Calendar } from '..'

export const SelectDate = ({ places, placeSelected, handlePlace, setDateSelected}) => {
    return (
        <MainLayout sectionSelected='events' title='Eventos'>
            <select value={placeSelected?.id || ''} onChange={e => handlePlace(e.target.value)} className='place-select'>
                <option value={null}>Selecciona el lugar del evento</option>
                {places.map(place => (
                    <option value={place.id} key={place.id}>
                        {place.name}
                    </option>
                ))}
            </select>
            {placeSelected && <Calendar place={placeSelected} setDate={setDateSelected} />}
        </MainLayout>
    );
};
