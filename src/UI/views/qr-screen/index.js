import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { ShareInSocialMedia, StandarContainer } from 'UI/components';
import { isMobileOrTablet } from 'utils';
import { GuestsView } from './components';
import { useApp } from 'hooks';

import "./styles.scss";

export const QRScreen = () => {

    const [ showShare, setShowShare ] = useState(false);
    const history = useHistory();
    const { code } = useParams();
    const [ imgLoaded, setImgLoaded ] = useState(false);
    const { showLoading, hideLoading } = useApp();

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

    useEffect(() => {
        if(imgLoaded) hideLoading();
        else showLoading();
    }, [ hideLoading, showLoading, imgLoaded ])

    const generateQr = () => `https://api.qrserver.com/v1/create-qr-code/?size=550x550&data=${encodeURIComponent(`${process.env.REACT_APP_HOST}/#/visitas/codigo/${code}`)}`
    
    return (
        !localStorage.getItem('token') ? <GuestsView qr={ generateQr() } /> : (
            <section className="qr-screen">
                <StandarContainer sectionSelected='visits' background>
                        <h3>
                            <button onClick={() => history.goBack()}>
                                <i className="icon-arrow-left"></i>
                            </button>
                            Invitados
                        </h3>
    
    
                        <img src={generateQr()} alt="código QR" className="qr-image" onLoad={() => setImgLoaded(true)} />
    
    
                        <button className="btn-primary" onClick={handleOpenShare}>
                            <span>Compartir</span>
                            <div className="icon">
                                <i className="icon-share"></i>
                            </div>
                        </button>
                        <button className="btn-secondary" onClick={() => history.goBack()}>Salir</button>
    
                        <ShareInSocialMedia isOpened={showShare} handleClose={() => setShowShare(false)} />
                </StandarContainer>
            </section>
        )
    );
};
