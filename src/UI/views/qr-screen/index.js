import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { UserView, VisitorView } from './components';
import { get } from 'utils';

import "./styles.scss";
import { useDispatch } from 'react-redux';
import { setLoading } from 'redux/actions';

export const QRScreen = () => {

    const [ imgLoaded, setImgLoaded ] = useState(false);
    const [ isInvalid, setIsInvalid ] = useState(false);
    const { code } = useParams();
    const dispatch = useDispatch();

    // Validación para saber si el código existe
    useEffect(() => {
        get(`items/guest_code_unique?filter[code]=${code}`)
            .then(res => {
                if(!res.data.data.length || !res.data.data[0].status) setIsInvalid(true);
            })
    }, [ code ]);

    
    useEffect(() => {
        if(localStorage.getItem('token') && !isInvalid){
            if(imgLoaded) dispatch(setLoading(false));
            else dispatch(setLoading(true));
        }
    }, [ dispatch, isInvalid, imgLoaded ]);


    const generateQr = () => `https://chart.googleapis.com/chart?chs=150x150&cht=qr&choe=UTF-8&chl=${encodeURIComponent(`${process.env.REACT_APP_HOST}/visitas/codigo/${code}`)}`
    

    return (
        !localStorage.getItem('token') ? (
            <VisitorView qr={ generateQr() } isInvalid={isInvalid} setImgLoaded={setImgLoaded} />
        ) : (
            <UserView qr={ generateQr() } isInvalid={isInvalid} code={code} setImgLoaded={setImgLoaded} />
        )
    );
};
