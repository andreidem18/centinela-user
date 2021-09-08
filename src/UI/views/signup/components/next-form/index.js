import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { InputLight } from 'UI/components';

import "./styles.scss";

export const NextForm = ({previusData}) => {

    const [ passwordStrength, setPasswordStrength ] = useState(null);
    const [ password, setPassword ] = useState("");
    const [ error, setError ] = useState("");


    useEffect(() => {
        if(password){
            let value = 0;

            if(password.length >= 8){
                value++;
                if(password.split('').find(c => c === c.toUpperCase()))  value++;
                if(/\d/.test(password))                                  value++;
                if(/[a-zA-Z]/.test(password))                            value++;
            }                                 

            switch (value) {
                case 4:
                    setPasswordStrength({ number: value, color: "#008000", description: "Muy Segura"});
                    break;
                case 3:
                    setPasswordStrength({ number: value, color: "#33ff33", description: "Segura"});
                    break;
                case 2:
                    setPasswordStrength({ number: value, color: "#fff700", description: "Débil"});
                    break;
                default:
                    setPasswordStrength({ number: 1, color: "#ff3b00", description: "Muy Débil"});
                    break;
            }
        } else setPasswordStrength(null)
    }, [password]);


    const history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();
        if(passwordStrength.number > 1){
            if(e.target[3].value !== password) setError("Las contraseñas no coinciden");
            else history.push('/');
        }
    }
    return (
        <form action="" onSubmit={handleSubmit}>

            <div className="input-container">
                <InputLight label="Correo electrónico" required/> 
            </div>

            <div className="input-container">
                <InputLight label="Nombre de usuario" required/> 
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
                {error && <p className="error">{error}</p>}
            </div>

            <div className="button-signup">
                <button type="submit" className="button-next">
                    <span>REGISTRARSE</span>
                    <div className="inner"></div>
                </button>
            </div>
            <span className="login-link">¿Ya tienes una cuenta? <Link to="login">INGRESAR</Link></span>
        </form>
    );
};
