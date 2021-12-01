import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { MessageEmpty, ShareInSocialMedia, StandarContainer } from 'UI/components';
import { isMobileOrTablet } from 'utils';

export const UserView = ({ qr, code, setImgLoaded, isInvalid }) => {
    
    const [ showShare, setShowShare ] = useState(false);
    const history = useHistory();

    const handleOpenShare = async() => {
        if(isMobileOrTablet()){
            navigator.share({
                title: "Visítame a través de este código QR!",
                url: `${process.env.REACT_APP_HOST}/visitas/codigo/${code}`
            })
        } else {
            setShowShare(true);
        }
    }

    return (
        
        <section className="qr-screen">
            <StandarContainer sectionSelected='visits' background>
            {
                isInvalid ? (
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


                    <img src={qr} alt="código QR" className="qr-image" onLoad={() => setImgLoaded(true)} />

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
                        link={`${process.env.REACT_APP_HOST}/visitas/codigo/${code}`}
                    />
                </>)
            }
            </StandarContainer>
        </section>
    );
};
