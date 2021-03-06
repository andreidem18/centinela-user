import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { nuevoReporteAzul } from 'UI/assets';
import { AlternativeBackground, LateralMenu, NavBar } from 'UI/components';
import { StepProgressBar, Description } from './components';
import { useIncident } from 'hooks';

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
            <AlternativeBackground>
                <NavBar />
                <div className="come-back-button">
                    <Link to="/incidentes">
                        <i className="fas fa-chevron-left"></i>
                    </Link>
                    <img src={nuevoReporteAzul} alt="Agregar invitado" />
                </div>
                <div className="card">
                    { nextScreen ? (
                        <Description comeBack={() => setNextScreen(false)} />
                    ) : (<>
                        <div className="card-title-container">
                            <h4>¿Quieres reportar un incidente?</h4>
                        </div>
                        <p className="description">
                            Te guiaremos en el trancurso de tu proceso, para reportar tu incidente en tan solo 3 pasos
                        </p>
                        <StepProgressBar />
                        <p className="description">
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
                    </>)}
                </div>
                <LateralMenu  selected="" />
            </AlternativeBackground>
        </section>
    );
};
