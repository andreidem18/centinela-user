import React, { useState, useEffect } from 'react';
import { FormAddProfile } from './components';
import { Background } from 'UI/components';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserThunk, doLogout, createProfileThunk } from 'redux/actions';
import { useDispatch } from 'react-redux';

import './styles.scss';
import { SelectProfileView } from './select-profile-view';

const newProfileDefault = { name: '', phones: [{type: '', phone: ''}]}

export const SelectProfile = () => {

    const [ showFormAddProfile, setShowFormAddProfile ] = useState(false);
    const [ newProfile, setNewProfile ] = useState(newProfileDefault);
    const loggedUser = useSelector(state => state.loggedUser);
    const dispatch = useDispatch();

    const submitNewProfile = () => {
        dispatch(createProfileThunk(newProfile));
        setNewProfile(newProfileDefault);
        setShowFormAddProfile(false);
    }

    useEffect(() => localStorage.setItem('profile', ''), []);

    useEffect(() => {
        if(!loggedUser.id) dispatch(getUserThunk());
    }, [ loggedUser, dispatch ])

    return (
        localStorage.getItem('token') ? (
            <Background>
                <section className='select-profile'>
                    <SelectProfileView
                        profiles={loggedUser.profiles}
                        handleAddProfile={() => setShowFormAddProfile(true)}
                        doLogout={() => dispatch(doLogout())}
                    />
                    <FormAddProfile 
                        isOpen={showFormAddProfile} 
                        handleClose={() => setShowFormAddProfile(false)}
                        newProfile={newProfile}
                        setNewProfile={setNewProfile}
                        submit={submitNewProfile}
                    />
                </section>
            </Background>
        ) : <Redirect to='login' />
    );
};
