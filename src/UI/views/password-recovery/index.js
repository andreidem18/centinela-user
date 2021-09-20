import React, { useState } from 'react';
import { logo } from 'UI/assets';
import { InputLight } from 'UI/components';
import { useHistory, useLocation } from 'react-router-dom';
import { useAuth } from 'hooks';
import { NewPasswordForm } from './components/new-password-form';

import "./styles.scss";

export const PasswordRecovery = () => {

    const history = useHistory();
    const [ email, setEmail ] = useState('');
    const { recoveryPassword } = useAuth();
    const token = useQuery().get('token');

    const submit = e => {
        e.preventDefault();
        recoveryPassword(email);
    }


    return (
        <section className="signup">
            <div>
                <img src={logo} alt="Logo" />
                <div className="form-container">
                    {
                        token ? (
                            <NewPasswordForm token={token} />
                        ) : (
                            <form action="" onSubmit={submit}>
                                <h3>Escribe tu email</h3>
                                <div className="input-container">
                                    <InputLight 
                                        label="Correo electrónico" 
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        required/> 
                                </div>
                                <div className="buttons-signup">
                                    <button type="submit" className="button-next">
                                        <span>Recuperar contraseña</span>
                                        <div className="inner"></div>
                                    </button>
                                    <button type="button" onClick={() => history.push("/login")}>CANCELAR</button>
                                </div>
                            </form>
                        )
                    }
                </div>
            </div>
        </section>
    );
};

function useQuery() {
    return new URLSearchParams(useLocation().search);
}