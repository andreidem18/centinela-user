import React from 'react';
import { useQuery } from 'hooks';
import { changePasswordThunk, recoveryPasswordThunk, showInfoModal } from 'redux/actions';
import { NewPasswordForm, SendPasswordRequest } from './components';
import { PasswordRecoveryView } from './password-recovery-view';
import { useDispatch } from 'react-redux';

export const PasswordRecovery = () => {

    const token = useQuery().get('token');
    const dispatch = useDispatch();

    const submitPasswordRequest = e => {
        e.preventDefault();
        dispatch(recoveryPasswordThunk(e.target[0].value));
    }

    const submitNewPassword = (e, passwordStrength, password) => {
        e.preventDefault();
        if(passwordStrength.number < 3) return dispatch(showInfoModal({ type: 'error', message: 'Una buena contraseña debería tener al menos 8 caracteres, una letra mayúscula, una letra minúscula y un número', title: 'Error de validación' }));
        if(password !== e.target[2].value) return dispatch(showInfoModal({ type: 'error', autoClose: true, showingTime: 2500, message: 'Las contraseñas no coinciden', title: 'Error de validación' }));
        dispatch(changePasswordThunk({token, password}));
    }

    const getView = () => {
        if(token) return <NewPasswordForm submit={ submitNewPassword } />
        else return <SendPasswordRequest submit={ submitPasswordRequest } />
    }

    return (
        <PasswordRecoveryView getView={getView} />
    );
};
