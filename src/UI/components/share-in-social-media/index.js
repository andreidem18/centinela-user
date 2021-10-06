import React, { useEffect, useState } from 'react';
import {
    WhatsappShareButton,
    WhatsappIcon,
    LinkedinShareButton,
    LinkedinIcon,
    TwitterShareButton,
    TwitterIcon,
    EmailShareButton,
    EmailIcon,
    TelegramShareButton,
    TelegramIcon
  } from 'react-share';

import './styles.scss';

export const ShareInSocialMedia = ({isOpened, handleClose, link}) => {

    const [ showCopied, setShowCopied ] = useState(false);
    const copyLink = () => {
        var type = "text/plain";
        var blob = new Blob([link], { type });
        var data = [new window.ClipboardItem({ [type]: blob })];
        navigator.clipboard.write(data);
        setShowCopied(true);
        handleClose();
    }

    useEffect(() => {
        let timeout = null;
        if(showCopied){
            timeout = setTimeout(() => {
                setShowCopied(false);
            }, 3000);
        }
        return () => clearTimeout(timeout);
    }, [showCopied])

    return (
        <div className='share-in-social-media-container'>
            <div className={`share-in-social-media ${isOpened ? 'show' : ''}`}>
                <div className="button-container">
                    <button className="copy-button" onClick={copyLink}>
                        <i className="far fa-copy"></i>
                    </button>
                </div>
                <div className="button-container">
                    <WhatsappShareButton url={link} title="Visítame a través de este código QR!" >
                        <WhatsappIcon size={60} borderRadius={20} />
                    </WhatsappShareButton>
                </div>
                <div className="button-container">
                    <TelegramShareButton url={link} body="Visítame a través de este código QR!" >
                        <TelegramIcon size={60} borderRadius={20} />
                    </TelegramShareButton>
                </div>
                <div className="button-container">
                    <LinkedinShareButton url={link} title="Visítame a través de este código QR!" >
                        <LinkedinIcon size={60} borderRadius={20} />
                    </LinkedinShareButton>
                </div>
                <div className="button-container">
                    <TwitterShareButton url={link} title="Visítame a través de este código QR!" >
                        <TwitterIcon size={60} borderRadius={20} />
                    </TwitterShareButton>
                </div>
                <div className="button-container">
                    <EmailShareButton url={link} body="Visítame a través de este código QR!" >
                        <EmailIcon size={60} borderRadius={20} />
                    </EmailShareButton>
                </div>
            </div>
            { showCopied &&
                <div className="copied-text">
                    <span>Link copiado correctamente!</span>
                </div>
            }
            { isOpened &&
                <div className="overlay" onClick={handleClose}></div>
            }
        </div>
    );
};
