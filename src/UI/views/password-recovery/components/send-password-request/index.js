import React from 'react';
import { useHistory } from 'react-router';
import { InputLight } from 'UI/components';

export const SendPasswordRequest = ({ submit }) => {

    const history = useHistory();

    return (
        <form action="" onSubmit={submit}>
            <h3>Escribe tu email</h3>
            <div className="input-container">
                <InputLight label="Correo electrónico" required /> 
            </div>
            <div className="buttons-signup">
                <button type="submit" className="button-next">
                    <span>Recuperar contraseña</span>
                    <div className="inner"></div>
                </button>
                <button type="button" onClick={() => history.push("/login")}>CANCELAR</button>
            </div>
        </form>
    );
};
