import React, { useState, useEffect} from 'react';
import { useApp } from 'hooks';
import { logo } from 'UI/assets';

import './styles.scss';

export const GuestsView = ({ qr }) => {
    
    const [ imgLoaded, setImgLoaded ] = useState(false);
    const { showLoading, hideLoading } = useApp();

    useEffect(() => {
        if(imgLoaded) hideLoading();
        else showLoading();
    }, [ hideLoading, showLoading, imgLoaded ])

    return (
        <section className="guests-view">
            <div>
                <img src={logo} alt="Logo" onLoad={() => setImgLoaded(true)} />
                <div className="card">
                    <img src={qr} alt="Código QR" />
                    <p>
                        Presenta este código en la portería para poder ingresar a la unidad residencial
                    </p>
                </div>
            </div>
        </section>
    );
};
