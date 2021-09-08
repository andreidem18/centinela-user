import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { iconoCompartir, iconoChat, ejemploQR } from 'UI/assets';
import { AlternativeBackground, LateralMenu, NavBar, ShareInSocialMedia } from 'UI/components';
import { isMobileOrTablet } from 'utils';

import "./styles.scss";

export const QRScreen = () => {

    const [ showShare, setShowShare ] = useState(false);

    const handleOpenShare = async() => {
        if(isMobileOrTablet()){
            navigator.share({
                title: "Visítame a través de este código QR!",
                url: "https://paraquienlonece.site"
            })
        } else {
            setShowShare(true);
        }
    }
    
    return (
        <section className="qr-screen">
            <AlternativeBackground>
                <NavBar />
                    <h3>
                        <Link to="/visitas">
                            <i className="fas fa-chevron-left"></i>
                        </Link>
                        Invitados
                    </h3>


                    <img src={ejemploQR} alt="código QR" className="qr-image" />


                    <button className="btn-primary" onClick={handleOpenShare}>
                        <span>Compartir</span>
                        <div className="icon">
                            <img src={iconoCompartir} alt="compartir" />
                        </div>
                    </button>
                    <button className="btn-secondary">Salir</button>

                    <ShareInSocialMedia isOpened={showShare} handleClose={() => setShowShare(false)} />

                    <button className="chat-button">
                        <img src={iconoChat} alt="" />
                    </button>
                <LateralMenu  selected="visits" />
            </AlternativeBackground>
        </section>
    );
};
