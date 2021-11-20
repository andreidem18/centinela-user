import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { getGuestsThunk, getUserThunk } from 'redux/actions';
import { getUserThunk } from 'redux/actions';
import { PaymentsHome, StatementsHome, VisitsHome } from './components';
import { HomeView } from './home-view';

import "./styles.scss";

export const Home = () => {

    const dispatch = useDispatch();
    const profile = useSelector(state => state.profile);
    const invitations = useSelector(state => state.guests.invitations);
    const [ viewSelected, setViewSelected ] = useState(0);

    useEffect(() => {
        if(!profile.id){
            dispatch(getUserThunk());
            // dispatch(getGuestsThunk());
        }
    }, [ dispatch, profile ]);

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
            name={profile.name.split(' ')[0]}
        />
    );
};
