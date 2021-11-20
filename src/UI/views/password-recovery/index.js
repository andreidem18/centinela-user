import React from 'react';
import { changePasswordThunk, recoveryPasswordThunk, showInfoModal } from 'redux/actions';
import { NewPasswordForm, SendPasswordRequest } from './components';
import { logo } from 'UI/assets';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';

import './styles.scss';

export const PasswordRecovery = () => {

    const { id } = useParams();
    const dispatch = useDispatch();

    const submitPasswordRequest = e => {
        e.preventDefault();
        dispatch(recoveryPasswordThunk(e.target[0].value));
    }

    const submitNewPassword = (e, passwordStrength, password) => {
        e.preventDefault();
        if(passwordStrength.number < 3) return dispatch(showInfoModal({ type: 'error', message: 'Una buena contraseña debería tener al menos 8 caracteres, una letra mayúscula, una letra minúscula y un número', title: 'Error de validación' }));
        if(password !== e.target[2].value) return dispatch(showInfoModal({ type: 'error', autoClose: true, showingTime: 2500, message: 'Las contraseñas no coinciden', title: 'Error de validación' }));
        dispatch(changePasswordThunk(id, password));
    }

    return (
        <section className="signup">
            <div>
                <img src={logo} alt="Logo" />
                <div className="form-container">
                    {
                        // Si hay id, quiere decir que viene del correo y va a cambiar la contraseña (newPasswordForm). 
                        // Sino, quiere decir que va a pedir el correo de recuperación (SendPasswordRequest)
                        id ? (
                            <NewPasswordForm submit={ submitNewPassword } />
                        ) : (
                            <SendPasswordRequest submit={ submitPasswordRequest } />
                        )
                    }
                </div>
            </div>
        </section>
    );
};
