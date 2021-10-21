import React, { useState, useEffect } from 'react';
import { InputLight } from 'UI/components';
import { validatePassword } from 'utils';

import './styles.scss';

export const NewPasswordForm = ({ submit }) => {

    const [ passwordStrength, setPasswordStrength ] = useState(null);
    const [ password, setPassword ] = useState("");

    useEffect(() => {
        if(password) setPasswordStrength(validatePassword(password))
        else setPasswordStrength(null)
    }, [password]);

    return (
        <form onSubmit={e => submit(e, passwordStrength, password)}>
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
