import React from 'react';
import { MainLayout } from 'UI/components';

import './styles.scss';

export const FinalScreen = ({ comeback, submit }) => {
    return (
        <MainLayout title='Reportar incidente' comeback={comeback}>
            <h4 className="done-title">¡Listo!</h4>
            <p className="description">
                Al pulsar “enviar”, el administrador del complejo recibirá tu reporte, y procederá a 
                darle seguimiento, notificandote las acciones y cierre del mismo.
            </p>
            <div className="buttons-container">
                <button className="btn-primary" onClick={submit}>
                    Enviar
                </button>
                <button className="btn-secondary" onClick={comeback}>
                    Atras
                </button>
            </div>
        </MainLayout>
    );
};