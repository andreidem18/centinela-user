import React, { useState, useEffect } from 'react';
import { StepProgressBar, Description } from './components';
import { useIncident } from 'hooks';
import { MainLayout } from 'UI/components';

import './styles.scss';

export const NewIncident = () => {

    const [ nextScreen, setNextScreen ] = useState(false);
    const { incidentTitle, setIncidentTitle, setStep } = useIncident();

    useEffect(() => {
        setStep(1)
    }, [setStep]);


    const submit = e => {
        if(e.key === 'Enter') setNextScreen(true)
    }

    return (
        <section className="new-incident">
            { nextScreen ? (
                <Description comeBack={() => setNextScreen(false)} />
            ) : (
                <MainLayout title='Reportar incidente' bottomMenu={false}>
                    <p className="description" style={{margin: '0 0 30px'}}>
                        Te guiaremos en el trancurso de tu proceso, para reportar tu incidente en tan solo 3 pasos
                    </p>
                    <StepProgressBar />
                    <p className="description" style={{margin: '10px 0 0'}}>
                        Utiliza una descripción breve para nombrar tu reporte.
                    </p>
                    <input 
                        type="text" 
                        value={incidentTitle} 
                        onChange={setIncidentTitle} 
                        onKeyDown={submit} 
                    />
                    <div className="buttons-container" onClick={() => setNextScreen(true)}>
                        <button className="btn-primary">Siguiente</button>
                    </div>
                </MainLayout>
            )}
        </section>
    );
};
