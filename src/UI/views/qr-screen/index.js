import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ejemploQR } from 'UI/assets';
import { ShareInSocialMedia, ChatButton, StandarContainer } from 'UI/components';
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
            <StandarContainer sectionSelected='visits'>
                    <h3>
                        <Link to="/visitas">
                            <i className="icon-arrow-left"></i>
                        </Link>
                        Invitados
                    </h3>


                    <img src={ejemploQR} alt="código QR" className="qr-image" />


                    <button className="btn-primary" onClick={handleOpenShare}>
                        <span>Compartir</span>
                        <div className="icon">
                            <i className="icon-share"></i>
                        </div>
                    </button>
                    <button className="btn-secondary">Salir</button>

                    <ShareInSocialMedia isOpened={showShare} handleClose={() => setShowShare(false)} />

                    <ChatButton />
            </StandarContainer>
        </section>
    );
};
