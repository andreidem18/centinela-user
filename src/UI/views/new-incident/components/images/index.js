import React, { useRef } from 'react';
import { StepProgressBar } from '..';

import './styles.scss';
import { MainLayout } from 'UI/components';

export const Images = ({ comeback, submit, setSelectedFiles, selectedFilesImages, deleteFile }) => {

    let defaultBtn = useRef(null);

    return (
        <MainLayout title='Reportar incidente' bottomMenu={false} comeback={comeback}>
            <StepProgressBar step={3} />
            <p className="description" style={{marginBottom: '30px'}}>
                Adjunta imagenes como evidencia <b>(opcional)</b>
            </p>
            <form action="" onSubmit={submit}>


                <div className="upload-images-container">
                    <div className="wrapper">
                        <div className="image" onClick={() => defaultBtn.click()}>
                            <img src={selectedFilesImages.length ? selectedFilesImages[0] : null} alt="" />
                        </div>
                        <div className="content">
                            <div className="icon">
                                <i className="fas fa-cloud-upload-alt"></i>
                            </div>
                            <div className="text">Aún no has seleccionado ningún archivo</div>
                        </div>
                        <div 
                            id="cancel-btn" 
                            style={{display: selectedFilesImages.length ? 'block' : 'none'}} 
                            onClick={deleteFile}
                        >
                            <i className="fas fa-times"></i>
                        </div>
                    </div>
                    <input 
                        type="file" 
                        id="default-btn" 
                        ref={el => defaultBtn=el} 
                        onChange={setSelectedFiles} 
                        accept="image/png, image/jpeg"
                        multiple 
                    />
                </div>


                <div className="buttons-container">
                    <button className="btn-primary">
                        Siguiente
                    </button>
                    <button className="btn-secondary" onClick={comeback} type='button'>
                        Atras
                    </button>
                </div>
            </form>
        </MainLayout>
    );
};
