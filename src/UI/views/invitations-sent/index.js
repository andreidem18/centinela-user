import React, { useState, useEffect } from 'react';
import { MessageEmpty, MainLayout } from 'UI/components';
import { InvitationDetail, InvitationsList } from './components';
import { useParams } from 'react-router';
import { InvitationsFilterModal } from 'UI/modals';
import { useDispatch, useSelector } from 'react-redux';
import { getGuestsThunk, addGuestThunk, showInfoModal, expireInvitationThunk } from 'redux/actions';

import "./styles.scss";

export const InvitationsSent = () => {
    
    const invitations = useSelector(state => state.guests.invitations);
    const dispatch = useDispatch()
    const { id } = useParams();

    const [ invitationSelected, setInvitationSelected ] = useState(null);
    const [ filteredInvitations, setFilteredInvitations ] = useState([]);
    const [ showFiltersModal, setShowFiltersModal ] = useState(false);

    useEffect(() => {
        dispatch(getGuestsThunk());
    }, [ dispatch ]);
    useEffect(() => setFilteredInvitations(invitations), [ invitations ]);

    // En caso de que venga un id de params
    useEffect(() => setInvitationSelected(invitations?.find(i => i.id === parseInt(id))), [id, invitations]);

    const addGuest = id => dispatch(addGuestThunk(id));

    const expireInvitation = id => {
        dispatch(showInfoModal({ 
            type: 'warning', actionModal: () => dispatch(expireInvitationThunk(id)), 
            title: 'Desactivar invitación?', message: 'Una vez canceles la invitación, no podrás volverla a activar' 
        }))
    }
    
    return (
        <section className="invitations-sent">
                { invitationSelected ? (
                    <InvitationDetail 
                        invitation={invitationSelected} 
                        comeBack={() => setInvitationSelected(null)} 
                        addGuest={addGuest}
                        expireInvitation={expireInvitation}
                    />

                ) : (
                    <MainLayout sectionSelected='visits' title='Invitaciones enviadas'>
                    { 
                        invitations && invitations?.length > 0 ? (
                            <InvitationsList 
                                setShowFiltersModal={setShowFiltersModal} 
                                filteredInvitations={filteredInvitations} 
                                setInvitationSelected={setInvitationSelected}
                            />
                            ) : (
                            <MessageEmpty 
                                message='Parece ser que no has hecho ninguna invitación.' 
                                linkMessage='¡Invita a un amigo!' 
                                link='/visitas/nueva-invitación' 
                            />
                        )
                    }
                    </MainLayout>
                )}
                { showFiltersModal && 
                    <InvitationsFilterModal 
                        handleClose={() => setShowFiltersModal(false)} 
                        invitations={invitations}
                        setInvitations={setFilteredInvitations}
                    />
                }
        </section>
    );
};
