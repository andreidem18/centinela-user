import React, { useState, useEffect } from 'react';
import { InputLight } from 'UI/components';
import { validatePassword } from 'utils';
import { useApp, useAuth } from 'hooks'

import "./styles.scss";

export const NextForm = ({previusData, comeback}) => {

    const [ passwordStrength, setPasswordStrength ] = useState(null);
    const [ password, setPassword ] = useState("");
    
    const { showInfoModal } = useApp();
    const { createUser } = useAuth();


    useEffect(() => {
        if(password) setPasswordStrength(validatePassword(password))
        else setPasswordStrength(null)
    }, [password]);

    const handleSubmit = e => {
        e.preventDefault();
        if(passwordStrength.number < 3) return showInfoModal({ type: 'error', message: 'La contraseña debería tener al menos 8 caracteres, una letra mayúscula, una letra minúscula y un número', title: 'Error de validación' });
        if(e.target[4].value !== password){ 
            return showInfoModal({ type: 'error', autoClose: true, showingTime: 2500, message: 'Las contraseñas no coinciden', title: 'Error de validación' });
        };
        const data = { 
            first_name: e.target[0].value, 
            last_name: e.target[1].value, 
            password,
            email: previusData.email,
            status: 'draft',
            role: 4,
            data_residential: previusData.data_residential
        }
        createUser(data);
    }
    return (
        <form action="" onSubmit={handleSubmit}>

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
