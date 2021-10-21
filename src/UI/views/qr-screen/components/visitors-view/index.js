import React from 'react';
import { logo } from 'UI/assets';
import { MessageEmpty } from 'UI/components';

import './styles.scss';

export const VisitorView = ({ qr, isInvalid, setImgLoaded }) => {

    return (
        <section className="qr-screen visitor-view">
            {
                isInvalid ? (
                    <MessageEmpty message='Esta invitación no existe o ya expiró' />
                ) : (
                    <div>
                        <img src={logo} alt="Logo" onLoad={() => setImgLoaded(true)} />
                        <div className="card">
                            <img src={qr} alt="Código QR" />
                            <p>
                                Presenta este código en la portería para poder ingresar a la unidad residencial
                            </p>
                        </div>
                    </div>
                )
            }
        </section>
    );
};
