import React from 'react';
import { MainLayout } from 'UI/components';
import { StepProgressBar } from '..';

export const InitialScreen = ({ incidentTitle, setIncidentTitle, submit }) => {
    return (
        <MainLayout title='Reportar incidente' bottomMenu={false}>
            <p className="description" style={{margin: '0 0 30px'}}>
                Te guiaremos en el trancurso de tu proceso, para reportar tu incidente en tan solo 3 pasos
            </p>
            <StepProgressBar step={1} />
            <p className="description" style={{margin: '10px 0 0'}}>
                Utiliza una descripción breve para nombrar tu reporte.
            </p>
            <form action="" onSubmit={submit}>
                <input 
                    type="text" 
                    value={incidentTitle} 
                    onChange={e => setIncidentTitle(e.target.value)}
                    required
                />
                <div className="buttons-container">
                    <button className="btn-primary">Siguiente</button>
                </div>
            </form>
        </MainLayout>
    );
};
