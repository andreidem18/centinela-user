import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Description, InitialScreen, Images, FinalScreen } from './components';

import './styles.scss';

export const NewIncident = () => {

    const [ step, setStep ] = useState(1);
    const [ title, setTitle ] = useState('');
    const [ description, setDescription ] = useState('');
    // Archivos subidos ahorita (fotos del item)
    const [ selectedFiles, setSelectedFiles ] = useState([]);
    // Los archivos subidos transformados a imagenes para hacer preview
    const [ selectedFilesImages, setSelectedFilesImages ] = useState([]);
    const history = useHistory();

    const getUploadedImages = images => {
        const fileArray = Array.from(images).map(file => URL.createObjectURL(file));
        setSelectedFilesImages(fileArray);
    }

    const handleSelectedFiles = e => {
        const files = Array.from(selectedFiles).concat(Array.from(e.target.files));
        setSelectedFiles(files);
        getUploadedImages(files);
    }

    const deleteImageUploaded = () => {
        const newFileArray = [];
        for(let i = 1; i < selectedFiles.length; i++){
            newFileArray.push(selectedFiles[i]);
        }
        setSelectedFiles(newFileArray);
        getUploadedImages(newFileArray);
    }

    const submitScreen = (e, step) => {
        e.preventDefault();
        setStep(step);
    }


    const submit= () => {
        history.push('/incidentes')
    }


    const getScreen = () => {
        switch(step){
            case 2:
                return <Description
                            comeback={() => setStep(1)}
                            incidentDescription={description}
                            setIncidentDescription={setDescription}
                            submit={e => submitScreen(e, 3)}
                        />
            case 3:
                return <Images 
                            comeback={() => setStep(2)}
                            submit={e => submitScreen(e, 4)}
                            setSelectedFiles={handleSelectedFiles} 
                            selectedFilesImages={selectedFilesImages} 
                            deleteFile={deleteImageUploaded} 
                        />
            case 4:
                return <FinalScreen comeback={() => setStep(3)} submit={submit} />
            default:
                return <InitialScreen 
                            incidentTitle={title} 
                            setIncidentTitle={setTitle} 
                            submit={e => submitScreen(e, 2)} 
                        />
        }
    }

    return(
        <section className="new-incident">{ getScreen() }</section>
    )
};
