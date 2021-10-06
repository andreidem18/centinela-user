import React from 'react';
import { useHistory } from 'react-router-dom';
import { useIncident } from 'hooks';

import './styles.scss';
import { MainLayout } from 'UI/components';

export const FinalScreen = ({ comeBack }) => {

    const history = useHistory();

    const { resetForm } = useIncident();

    const submit = () => {
        history.push('/incidentes');
        resetForm();
    }

    return (
        <MainLayout title='Reportar incidente' comeback={comeBack}>
            <h4 className="done-title">¡Listo!</h4>
            <p className="description">
                Al pulsar “enviar”, el administrador del complejo recibirá tu reporte, y procederá a 
                darle seguimiento, notificandote las acciones y cierre del mismo.
            </p>
            <div className="buttons-container">
                <button className="btn-primary" onClick={submit}>
                    Enviar
                </button>
                <button className="btn-secondary" onClick={comeBack}>
                    Atras
                </button>
            </div>
        </MainLayout>
    );
};