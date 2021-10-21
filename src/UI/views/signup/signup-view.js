import React from 'react';
import { logo } from 'UI/assets';
import { Background } from 'UI/components/background';

const SignupView = ({ getForm }) => {
    return (
        <Background>
            <section className="signup">
                <div>
                    <img src={logo} alt="Logo" />
                    <div className="form-container">
                        {getForm()}
                    </div>
                </div>
            </section>
        </Background>
    );
};

export default SignupView;