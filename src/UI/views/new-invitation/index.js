import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { StandarContainer, MessageEmpty } from 'UI/components';
import { useGuest } from 'hooks';
import { Guest, AddGuest } from './components';

import "./styles.scss";

export const NewInvitation = () => {

    const { getGuests, guests } = useGuest();
    const [ guestSelected, setGuestSelected ] = useState(null)

    useEffect(() => getGuests(), [getGuests]);

    return (
        <section className="visits">
            <StandarContainer sectionSelected='visits'>
                {
                    guestSelected ? <AddGuest guest={guestSelected} comeback={() => setGuestSelected(null)} />  : (
                        <>
                            <div className="container">
                                <div>
                                    <h3>
                                        <Link to="/visitas">
                                            <i className="icon-arrow-left"></i>
                                        </Link>
                                        Nueva Invitación
                                    </h3>
                                    <button className="new-guest-link" onClick={() => setGuestSelected({})} >
                                        <div className="info">
                                            <h4>Invitado nuevo</h4>
                                            <div className="icon"><i className="icon-add-guest"></i></div>
                                        </div>
                                        <div className="arrow">
                                            <i className="fas fa-caret-right"></i>
                                        </div>
                                    </button>
                                </div>
                                <div className="card">
                                    <div className="card-title-container">
                                        <h4>Invitados guardados</h4>
                                    </div>
                                    <div className="guests">
                                        { 
                                            guests && guests.length > 0 ? (
                                                guests.map(guest => (
                                                    <Guest guest={guest} key={guest.id} select={setGuestSelected} />
                                                ))
                                            ) : (
                                                <MessageEmpty message='Aún no has guardado ningún invitado' />
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                }
            </StandarContainer>
        </section>
    );
};
