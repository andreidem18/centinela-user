import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { ShareInSocialMedia, StandarContainer, MessageEmpty } from 'UI/components';
import { isMobileOrTablet } from 'utils';
import { GuestsView } from './components';
import { useApp } from 'hooks';
import { get } from 'utils';

import "./styles.scss";

export const QRScreen = () => {

    const [ showShare, setShowShare ] = useState(false);
    const [ imgLoaded, setImgLoaded ] = useState(false);
    const [ isInvalid, setIsInvalid ] = useState(false);
    const history = useHistory();
    const { code } = useParams();
    const { showLoading, hideLoading } = useApp();

    const handleOpenShare = async() => {
        if(isMobileOrTablet()){
            navigator.share({
                title: "Visítame a través de este código QR!",
                url: `${process.env.REACT_APP_HOST}/#/visitas/codigo/${code}`
            })
        } else {
            setShowShare(true);
        }
    }

    // Validación para saber si el código existe
    useEffect(() => {
        get(`items/guest_code_unique?filter[code]=${code}`)
            .then(res => {
                if(!res.data.data.length || !res.data.data[0].status) setIsInvalid(true);
            })
    }, [ code ]);

    useEffect(() => {
        if(localStorage.getItem('token') && !isInvalid){
            if(imgLoaded) hideLoading();
            else showLoading();
        }
    }, [ hideLoading, showLoading, isInvalid, imgLoaded ]);

    const generateQr = () => `https://api.qrserver.com/v1/create-qr-code/?size=550x550&data=${encodeURIComponent(`${process.env.REACT_APP_HOST}/#/visitas/codigo/${code}`)}`
    
    return (
        !localStorage.getItem('token') ? <GuestsView qr={ generateQr() } isInvalid={isInvalid} /> : (
            <section className="qr-screen">
                <StandarContainer sectionSelected='visits' background>
                    {isInvalid ? (
                        <div className='card'>
                            <MessageEmpty message='Esta invitación no existe o ya expiró'  />
                        </div>
                    ) : (<>
                        <h3>
                            <button onClick={() => history.goBack()}>
                                <i className="icon-arrow-left"></i>
                            </button>
                            Invitados
                        </h3>


                        <img src={generateQr()} alt="código QR" className="qr-image" onLoad={() => setImgLoaded(true)} />

                        <div className="buttons-container">
                            <button className="btn-primary" onClick={handleOpenShare}>
                                <span>Compartir</span>
                                <div className="icon">
                                    <i className="icon-share"></i>
                                </div>
                            </button>
                            <button className="btn-secondary" onClick={() => history.goBack()}>Salir</button>
                        </div>

                        <ShareInSocialMedia 
                            isOpened={showShare} 
                            handleClose={() => setShowShare(false)} 
                            link={`${process.env.REACT_APP_HOST}/#/visitas/codigo/${code}`}
                        />
                    </>)}
                </StandarContainer>
            </section>
        )
    );
};
