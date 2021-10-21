import React from 'react';
import { MessageEmpty, MainLayout } from 'UI/components';
import { Guest } from '../guest';

export const SelectGuest = ({ guests, setGuestSelected, deleteGuest }) => {
    return (
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
                            <Guest 
                                guest={guest} 
                                key={guest.id} 
                                select={setGuestSelected} 
                                deleteGuest={deleteGuest} 
                            />
                        ))
                    ) : (
                        <MessageEmpty message='No tienes invitados guardados' linkMessage='Invitar a alguien' action={() => setGuestSelected({})} />
                    )
                }
            </div>
        </MainLayout>
    );
};
