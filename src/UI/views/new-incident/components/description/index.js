import React, { useState, useEffect } from 'react';
import { StepProgressBar } from '..';
import { useIncident } from 'hooks';
import { Images } from '../images';
import { MainLayout } from 'UI/components';

export const Description = ({ comeBack }) => {

    const [ nextScreen, setNextScreen ] = useState(false);

    const { incidentDescription, setIncidentDescription, setStep } = useIncident();

    useEffect(() => {
        setStep(2)
    }, [setStep]);

    return (
        nextScreen ? (
            <Images comeBack={() => setNextScreen(false)} />
        ) : (
            <MainLayout title='Reportar incidente' bottomMenu={false} comeback={comeBack}>
                <StepProgressBar />
                <p className="description">
                    Describe detalladamente el incidente que quieres reportar.
                </p>
                <textarea 
                    type="text" 
                    value={incidentDescription} 
                    onChange={setIncidentDescription} 
                    rows="5"
                    required 
                />
                <div className="buttons-container">
                    <button className="btn-primary" onClick={() => setNextScreen(true)}>
                        Siguiente
                    </button>
                    <button className="btn-secondary" onClick={comeBack}>
                        Atras
                    </button>
                </div>
            </MainLayout>
        )
    );
};
