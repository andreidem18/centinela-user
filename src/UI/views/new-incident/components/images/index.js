import React, { useState, useEffect, useRef } from 'react';
import { StepProgressBar } from '..';
import { useIncident } from 'hooks';
import { FinalScreen } from '../final-screen';

import './styles.scss';

export const Images = ({ comeBack }) => {

    const [ nextScreen, setNextScreen ] = useState(false);
    const [ selectedFiles, setSelectedFiles ] = useState(null);
    const [ imgData, setImgData ] = useState(null);
    const [ error, setError ] = useState(false);

    const handleSelectedFile = e => {
        let canUpload = true;
        for (let i = 0; i < e.target.files.length; i++) {
            if(e.target.files[i].type !== 'image/jpeg'){
                setError(true);
                canUpload = false;
            }
        }
        if(canUpload){
            setSelectedFiles(e.target.files)
            const reader = new FileReader();
            reader.addEventListener('load', () => {
                setImgData(reader.result);
            });
            reader.readAsDataURL(e.target.files[0]);
        }
    }

    const deleteFile = () => {
        setSelectedFiles(null);
        setImgData("");
    }

    const { setStep } = useIncident();

    let defaultBtn = useRef(null);

    useEffect(() => {
        setStep(3)
    }, [setStep]);


    useEffect(() => {
        let timeout = null;
        if(error){
            timeout = setTimeout(() => setError(false), 4000);
        }
        return () => clearTimeout(timeout);
    }, [error])


    return (
        nextScreen ? (
            <FinalScreen comeBack={() => setNextScreen(false)} images={selectedFiles} />
        ) : (
            <>
                <div className="card-title-container">
                    <h4>Reporte de incidentes</h4>
                </div>
                <StepProgressBar />
                <p className="description">
                    Adjunta imagenes como evidencia <strong>(opcional)</strong>
                </p>
                <div className="upload-images-container">
                    <div className="wrapper">
                        <div className="image" onClick={() => defaultBtn.click()}>
                            <img src={imgData} alt="" />
                        </div>
                        <div className="content">
                            <div className="icon">
                                <i className="fas fa-cloud-upload-alt"></i>
                            </div>
                            <div className="text">A??n no has seleccionado ning??n archivo</div>
                        </div>
                        <div id="cancel-btn" style={{display: imgData ? 'block' : 'none'}} onClick={deleteFile}>
                            <i className="fas fa-times"></i>
                        </div>
                    </div>
                    <input type="file" id="default-btn" ref={el => defaultBtn=el} onChange={handleSelectedFile} multiple />
                </div>
                <div className="buttons-container">
                    <button className="btn-secondary" onClick={comeBack}>
                        Atras
                    </button>
                    <button className="btn-primary" onClick={() => setNextScreen(true)}>
                        Siguiente
                    </button>
                </div>
                { error &&
                    <div className="error-modal">
                        <div className="content">
                            <i className="far fa-times-circle"></i>
                            <p>
                                S??lo puedes subir archivos .jpg
                            </p>
                        </div>
                        <div className="overlay"></div>
                    </div>
                }
            </>
        )
    );
};
