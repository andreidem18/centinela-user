import React, { useState, useEffect } from 'react';
import { MessageEmpty, MainLayout } from 'UI/components';
import { useGuest } from 'hooks';
import { Guest, AddGuest } from './components';

import "./styles.scss";

export const NewInvitation = () => {

    const { getGuests, guests } = useGuest();
    const [ guestSelected, setGuestSelected ] = useState(null)

    useEffect(() => getGuests(), [getGuests]);

    return (
        <section className="visits">
            {
                guestSelected ? <AddGuest guest={guestSelected} comeback={() => setGuestSelected(null)} />  : (
                    <MainLayout sectionSelected='visits' title='Nueva Invitación'>
                        <button className="new-guest-link" onClick={() => setGuestSelected({})} >
                            Invitado nuevo 
                            <i className="icon-add-user"></i>
                        </button>
                        <h4 className='guests-title'>Invitados guardados</h4>
                        <div className="guests">
                            { 
                                guests && guests.length > 0 ? (
                                    guests.map(guest => (
                                        <Guest guest={guest} key={guest.id} select={setGuestSelected} />
                                    ))
                                ) : (
                                    <MessageEmpty message='No tienes invitados guardados' linkMessage='Invitar a alguien' action={() => setGuestSelected({})} />
                                )
                            }
                        </div>
                    </MainLayout>
                )
            }
        </section>
    );
};
