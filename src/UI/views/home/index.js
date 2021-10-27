import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGuestsThunk, getUserThunk } from 'redux/actions';
import { PaymentsHome, StatementsHome, VisitsHome } from './components';
import { HomeView } from './home-view';

import "./styles.scss";

export const Home = () => {

    const dispatch = useDispatch();
    const loggedUser = useSelector(state => state.auth.loggedUser);
    const invitations = useSelector(state => state.guests.invitations);
    const [ viewSelected, setViewSelected ] = useState(0);

    useEffect(() => {
        if(!loggedUser.id){
            dispatch(getUserThunk());
            dispatch(getGuestsThunk());
        }
    }, [ dispatch, loggedUser ]);

    const getViewSelected = () => {
        switch(viewSelected){
            case 0:
                return <StatementsHome />
            case 1:
                return <VisitsHome invitations={invitations} />
            default:
                return <PaymentsHome />
        }
    }

    return (
        <HomeView  
            viewSelected={viewSelected} 
            setViewSelected={setViewSelected}
            getViewSelected={getViewSelected}
            invitations={invitations}
            loggedUser={loggedUser}
        />
    );
};
