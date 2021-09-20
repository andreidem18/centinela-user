import React from 'react';
import { StandarComeBackButton, StandarContainer } from 'UI/components';

import './styles.scss';

export const ReportError = () => {
    return (
        <section className='report-error'>
            <StandarContainer>
                <StandarComeBackButton 
                    isLink={true}
                    link='/comentarios'
                    icon='icon-reports'
                />
                <div className="standar-card-container">
                    <h4>Informar error</h4>
                    <form action="">
                        <textarea rows="7" placeholder='Cuéntanos, ¿Qué esta fallando?' />
                        <button>Enviar</button>
                    </form>
                </div>
            </StandarContainer>
        </section>
    );
};
