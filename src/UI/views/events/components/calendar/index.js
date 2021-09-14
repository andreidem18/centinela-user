import React, { useState, useEffect } from 'react';
import { getCurrentDate, withoutTime } from 'utils';
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';

import './styles.scss';

export const Calendar = ({place, setDate}) => {

    // Lógica para que el calendario renderice los días desabilitados cada vez que place cambie
    const [ haveToRender, setHaveToRender ] = useState(true);
    useEffect(() => {if(!haveToRender) setHaveToRender(true)}, [haveToRender]);
    useEffect(() => setHaveToRender(false), [place]);

    const [ myDate, setMyDate ] = useState(null);
    useEffect(() => setDate(myDate), [myDate, setDate])

    const disabledDates = e => {
        const isDisabled = place.disabledDates.find(d => withoutTime(e.date).getTime() === withoutTime(d).getTime());
        if(isDisabled) e.isDisabled = true;
    }

    const minDate = getCurrentDate(2);
    
    return (
        <div className='calendar'>
            { haveToRender && 
                <CalendarComponent 
                    min={minDate} 
                    renderDayCell={disabledDates} 
                    onChange={e => setMyDate(e.target.value)}
                />}
        </div>
    );
};
