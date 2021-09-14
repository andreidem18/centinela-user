import React, { useState, useEffect } from 'react';
import { useCallback } from 'react';

import './styles.scss';

export const InfoModal = ({type, handleClose, autoClose, showingTime = 3000, action, message, title}) => {

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
                setAssets({icon: 'fas fa-exclamation', color: '#f2c934', background: '#fff0b9'});
                break;
        }
    }, [type]);

    useEffect(() => setTimeout(setShowContent(true), 10), []);

    const close = useCallback(() => {
        if(!fadeOut){
            setFadeOut(true);
            setTimeout(() => {
                handleClose();
                setFadeOut(false);
            }, 1000)
        }
    }, [fadeOut, handleClose])

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
                    {message}
                </div>
                { !autoClose &&
                    <div className="buttons">
                        { type === 'warning' &&
                            <button 
                                type='button' 
                                style={{background: assets.color, borderColor: assets.color}}>
                                    Continuar
                            </button>
                        }
                        <button type='button' style={{
                            background: type === 'warning' ? 'transparent' : assets.color, 
                            borderColor: assets.color,
                            color:  type === 'warning' ? assets.color : '#fff'
                        }}
                        onClick={type === 'warning' ? close : action ? action : close}
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
