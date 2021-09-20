import React, { useState, useEffect } from 'react';
import { useApp, useAuth } from 'hooks';
import { InputLight } from 'UI/components';
import { validatePassword } from 'utils';

import './styles.scss';

export const NewPasswordForm = ({ token }) => {

    const [ passwordStrength, setPasswordStrength ] = useState(null);
    const [ password, setPassword ] = useState("");
    const { showInfoModal } = useApp();
    const { changePassword } = useAuth();

    useEffect(() => {
        if(password) setPasswordStrength(validatePassword(password))
        else setPasswordStrength(null)
    }, [password]);

    const submit = e => {
        e.preventDefault();
        if(passwordStrength.number < 3) return showInfoModal({ type: 'error', message: 'Una buena contraseña debería tener al menos 8 caracteres, una letra mayúscula, una letra minúscula y un número', title: 'Error de validación' });
        if(password !== e.target[2].value) return showInfoModal({ type: 'error', autoClose: true, showingTime: 2500, message: 'Las contraseñas no coinciden', title: 'Error de validación' });
        else changePassword({token, password});
    }
    return (
        <form onSubmit={submit}>
            <h3>Escribe tu nueva contraseña</h3>
            <div className="input-container">
                <InputLight label="Contraseña" type="password" value={password} onChange={e => setPassword(e.target.value)} required/> 
                { passwordStrength && 
                    <div className="password-strength">
                            <div 
                                className="bar" 
                                style={{
                                    width: passwordStrength.number * 100 / 4 + "%", 
                                    background: passwordStrength.color
                                }}
                            ></div>
                        <div 
                            className="text" 
                            style={{color: passwordStrength.color === "#fff700" ? "#cebe00" : passwordStrength.color}}
                        >
                            {passwordStrength.description}
                        </div>
                    </div>
                }
            </div>
            <div className="input-container">
                <InputLight label="Confirmar contraseña" type="password" required/> 
            </div>
            <div className="buttons-signup">
                <button type="submit" className="button-next">
                    <span>Cambiar contraseña</span>
                    <div className="inner"></div>
                </button>
            </div>
        </form>
    );
};
