import React from 'react';
import { Link } from 'react-router-dom';
import { escudoAncho, nombreApp } from "UI/assets";
import { InputLight } from 'UI/components';
import { useAuth } from 'hooks';

import "./styles.scss";

export const Login = () => {

    const { doLogin, loginError } = useAuth();

    const login = e => {
        e.preventDefault();
        doLogin({email: e.target[0].value, password: e.target[1].value});
    }

    return (
        <section className="login">
            <div className="slogan">
                <img className="logo" src={escudoAncho} alt="Logo" />
                <img className="app-name" src={nombreApp} alt="Nombre de la aplicación" />
                <p className="phrase">
                    Organizar y administrar tus usuarios, sencillo y al alcance de tu mano
                </p>
            </div>
            <div className="form-container">
                <form action="" onSubmit={login}>
                    <div className="input-container">
                        <InputLight type="text" label="Correo Electrónico" required={true} />
                    </div>
                    <div className="input-container">
                        <InputLight type="password" label="Contraseña" required={true} />
                        <a href="/">Olvidé mi contraseña</a>
                        <div className="error"><span>{loginError}</span></div>
                    </div>
                    <button className="login-button">
                        <span>Ingresar</span>
                        <div className="inner"></div>
                    </button>
                </form>
                <p className="register-link">
                    ¿No tienes una cuenta? <Link to="/signup">registrarse</Link>
                </p>
            </div>
        </section>
    );
};
