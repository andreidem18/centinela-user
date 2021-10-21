import React, { useState, useEffect } from 'react';
import { InputLight } from 'UI/components';
import { validatePassword } from 'utils';

import "./styles.scss";

export const NextForm = ({handleSubmit, comeback}) => {

    const [ passwordStrength, setPasswordStrength ] = useState(null);
    const [ password, setPassword ] = useState("");


    useEffect(() => {
        if(password) setPasswordStrength(validatePassword(password))
        else setPasswordStrength(null)
    }, [password]);

    return (
        <form action="" onSubmit={e => handleSubmit(e, passwordStrength, password)}>

            <div className="input-container">
                    <InputLight label='Nombre' required />
                </div>
            <div className="input-container">
                <InputLight label='Apellido' required />
            </div>

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
                    <span>REGISTRARSE</span>
                    <div className="inner"></div>
                </button>
                <button type="button" onClick={comeback}>CANCELAR</button>
            </div>
        </form>
    );
};
