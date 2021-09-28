import React, { useState, useEffect } from 'react';
import { useCallback } from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

export const InfoModal = ({type, handleClose, autoClose, showingTime = 3000, action, message, title, link, linkMessage}) => {

    const [ fadeOut, setFadeOut ] = useState(false);
    const [ assets, setAssets ] = useState({icon: '', color: ''});
    const [ showContent, setShowContent ] = useState(false);

    useEffect(() => {
        switch(type){
            case 'success':
                setAssets({icon: 'fas fa-check', color: '#34f234', background: '#d3ffd3'});
                break;
            case 'error':
                setAssets({icon: 'fas fa-times', color: '#e30000', background: '#ffd3d3'});
                break;
            default:
                setAssets({icon: 'fas fa-exclamation', color: '#e6aa00', background: '#fff0b9'});
                break;
        }
    }, [type]);

    const executeAction = useCallback(() => {
        action();
        handleClose();
    }, [ action, handleClose ])


    const close = useCallback(() => {
        if(action && type !== 'warning') executeAction();
        else if(!fadeOut){
            setFadeOut(true);
            setTimeout(() => {
                handleClose();
                setFadeOut(false);
            }, 1000)
        }
    }, [fadeOut, handleClose, executeAction, action, type])



    useEffect(() => { 
        const timeout = setTimeout(setShowContent(true), 10)
        return () => clearTimeout(timeout)
    }, []);


    useEffect(() => {
        let timeout = null
        if(autoClose){
            timeout = setTimeout(() => {
                close()
            }, showingTime)
        }
        return () => clearTimeout(timeout)
    }, [autoClose, close, showingTime])

    return (
        <div className={`modal ${fadeOut ? 'fade-out' : ''}`}>
            <div className={`info-modal  ${showContent ? 'show-content' : ''}`}>
                <div className="icon" style={{background: assets.background}}>
                    <i className={assets.icon} style={{color: assets.color}}></i>
                </div>
                <div className='title'>
                    {title}
                </div>
                <div className="message">
                    {message} { link && <Link to={link} onClick={handleClose}>{linkMessage}</Link> }
                </div>
                { !autoClose &&
                    <div className="buttons">
                        { type === 'warning' &&
                            <button 
                                type='button' 
                                style={{background: assets.color, borderColor: assets.color}}
                                onClick={action ? executeAction : close}>
                                    Continuar
                            </button>
                        }
                        <button type='button' style={{
                            background: type === 'warning' ? 'transparent' : assets.color, 
                            borderColor: assets.color,
                            color:  type === 'warning' ? assets.color : '#fff'
                        }}
                        onClick={type === 'warning' ? close : action ? executeAction : close}
                        >
                            Cerrar
                        </button>
                    </div>
                }
            </div>
            <div className="overlay" onClick={close}></div>
        </div>
    );
};
