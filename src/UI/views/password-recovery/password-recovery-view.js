import React from 'react';
import { logo } from 'UI/assets';

import "./styles.scss";

export const PasswordRecoveryView = ({ getView }) => {

    return (
        <section className="signup">
            <div>
                <img src={logo} alt="Logo" />
                <div className="form-container">
                    { getView() }
                </div>
            </div>
        </section>
    );
};
