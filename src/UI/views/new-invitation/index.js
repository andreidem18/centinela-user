import React, { useState, useEffect } from 'react';
import {AddGuest, SelectGuest } from './components';
import { useSelector, useDispatch } from 'react-redux';
import { createInvitationThunk, deleteGuestThunk, getGuestsThunk } from "redux/actions";

import "./styles.scss";

export const NewInvitation = () => {

    const guests = useSelector(state => state.guests.guests);
    const dispatch = useDispatch();
    const [ guestSelected, setGuestSelected ] = useState(null);
    const [ isUniqueAccess, setIsUniqueAccess ] = useState(true);
    const [ dateFrom, setDateFrom ] = useState('');
    const [ dateTo, setDateTo ] = useState('');

    const deleteGuest = id => dispatch(deleteGuestThunk(id));

    useEffect(() => {
        if(!guests.length) dispatch(getGuestsThunk())
    }, [ dispatch, guests ]);

    const submitNewGuest = isNewGuest => {
        const invitation = { 
            code: Date.now(), 
            status: 1, 
            type: isUniqueAccess ? 1 : 2,
                //  Si no es un invitado nuevo, y guest selected tiene un id, quiere decir que es un invitado
                // guardado, por lo tanto sólo se enviaría el id. En caso de que no, se enviaría el objeto de 
                // guestSelected completo para crear el nuevo invitado
            guest: !isNewGuest && guestSelected.id ? guestSelected.id : guestSelected, 
            date_start: dateFrom, 
            date_end: dateTo 
        }
        dispatch(createInvitationThunk(invitation))
    }
    

    return (
        <section className="visits">
            {
                guestSelected ? (
                    <AddGuest 
                        submit={submitNewGuest}
                        guest={guestSelected} 
                        comeback={() => setGuestSelected(null)} 
                        setGuest={setGuestSelected} 
                        isUniqueAccess={isUniqueAccess}
                        setIsUniqueAccess={setIsUniqueAccess} 
                        dateFrom={dateFrom}
                        setDateFrom={setDateFrom}
                        dateTo={dateTo}
                        setDateTo={setDateTo}
                    />
                )  : (
                    <SelectGuest guests={guests} setGuestSelected={setGuestSelected} deleteGuest={deleteGuest} />
                )
            }
        </section>
    );
};
