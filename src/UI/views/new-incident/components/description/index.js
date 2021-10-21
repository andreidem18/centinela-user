import React from 'react';
import { StepProgressBar } from '..';
import { MainLayout } from 'UI/components';

export const Description = ({ comeback, incidentDescription, setIncidentDescription, submit }) => {

    return (
        <MainLayout title='Reportar incidente' bottomMenu={false} comeback={comeback}>
            <StepProgressBar step={2} />
            <p className="description">
                Describe detalladamente el incidente que quieres reportar.
            </p>
            <form action="" onSubmit={submit}>
                <textarea 
                    type="text" 
                    value={incidentDescription} 
                    onChange={e => setIncidentDescription(e.target.value)} 
                    rows="5"
                    required 
                />
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
