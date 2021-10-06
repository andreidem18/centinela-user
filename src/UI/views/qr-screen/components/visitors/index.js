import React, { useState, useEffect} from 'react';
import { useApp } from 'hooks';
import { logo } from 'UI/assets';
import { MessageEmpty } from 'UI/components';

import './styles.scss';

export const GuestsView = ({ qr, isInvalid }) => {
    
    const [ imgLoaded, setImgLoaded ] = useState(false);
    const { showLoading, hideLoading } = useApp();

    useEffect(() => {
        if(!isInvalid){
            if(imgLoaded) hideLoading();
            else showLoading();
        }
    }, [ hideLoading, showLoading, isInvalid, imgLoaded ])

    return (
        <section className="guests-view">
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
