import React, { useState, useEffect, useRef } from 'react';
import { StepProgressBar } from '..';
import { useIncident } from 'hooks';
import { FinalScreen } from '../final-screen';

import './styles.scss';
import { MainLayout } from 'UI/components';

export const Images = ({ comeBack }) => {

    const [ nextScreen, setNextScreen ] = useState(false);
    const [ selectedFiles, setSelectedFiles ] = useState(null);
    const [ imgData, setImgData ] = useState(null);
    const [ error, setError ] = useState(false);

    const handleSelectedFile = e => {
        let canUpload = true;
        if(e.target.files.length < 1) return;
        for (let i = 0; i < e.target.files.length; i++) {
            console.log(e.target.files[i].type)
            if(e.target.files[i].type !== 'image/jpeg' && e.target.files[i].type !== 'image/png'){
                setError(true);
                canUpload = false;
                break;
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
        setImgData(null);
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
            <MainLayout title='Reportar incidente' bottomMenu={false} comeback={comeBack}>
                <StepProgressBar />
                <p className="description" style={{marginBottom: '30px'}}>
                    Adjunta imagenes como evidencia <b>(opcional)</b>
                </p>
                <div className="upload-images-container">
                    <div className="wrapper">
                        <div className="image" onClick={() => defaultBtn.click()}>
                            <img src={imgData === '' ? null : imgData} alt="" />
                        </div>
                        <div className="content">
                            <div className="icon">
                                <i className="fas fa-cloud-upload-alt"></i>
                            </div>
                            <div className="text">Aún no has seleccionado ningún archivo</div>
                        </div>
                        <div id="cancel-btn" style={{display: imgData ? 'block' : 'none'}} onClick={deleteFile}>
                            <i className="fas fa-times"></i>
                        </div>
                    </div>
                    <input type="file" id="default-btn" ref={el => defaultBtn=el} onChange={handleSelectedFile} multiple />
                </div>
                <div className="buttons-container">
                    <button className="btn-primary" onClick={() => setNextScreen(true)}>
                        Siguiente
                    </button>
                    <button className="btn-secondary" onClick={comeBack}>
                        Atras
                    </button>
                </div>
                { error &&
                    <div className="error-modal">
                        <div className="content">
                            <i className="far fa-times-circle"></i>
                            <p>
                                Sólo puedes subir archivos .jpg o .png
                            </p>
                        </div>
                        <div className="overlay"></div>
                    </div>
                }
            </MainLayout>
        )
    );
};
