import React, { useState } from 'react';
import { logo } from 'UI/assets';
import { NextForm } from './components';
import { InputLight } from 'UI/components';
import { useHistory } from 'react-router-dom';

import "./styles.scss";

export const SignUp = () => {

    const [ dataForm, setDataForm ] = useState(null);

    const history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();
        setDataForm({
            recidencyCode: e.target[0].value,
            name1: e.target[1].value,
            name2: e.target[2].value,
            name3: e.target[3].value
        });
    }

    return (
        <section className="signup">
            <div>
                <img src={logo} alt="Logo" />
                <div className="form-container">
                    { dataForm ? <NextForm />
                    : (
                        <form action="" onSubmit={handleSubmit}>
                            <div className="input-container">
                                <InputLight label="Código de residencia" name="residencyCode" required/> 
                            </div>
                            <div className="input-container">
                                <InputLight label="Nombre" required/> 
                            </div>
                            <div className="input-container">
                                <InputLight label="Nombre" required/> 
                            </div>
                            <div className="input-container">
                                <InputLight label="Nombre" required/> 
                            </div>
                            <div className="button-signup">
                                <button type="submit" className="button-next">
                                    <span>SIGUIENTE</span>
                                    <div className="inner"></div>
                                </button>
                            </div>
                            <div className="button-signup">
                            <button type="button" onClick={() => history.push("/login")}>CANCELAR</button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};
