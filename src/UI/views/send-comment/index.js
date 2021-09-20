import React from 'react';
import { StandarComeBackButton, StandarContainer } from 'UI/components';

import './styles.scss';

export const SendComment = () => {
    return (
        <section className='send-comment'>
            <StandarContainer>
                <StandarComeBackButton 
                    isLink={true}
                    link='/comentarios'
                    icon='icon-reports'
                />
                <div className="standar-card-container">
                    <h4>Enviar comentario</h4>
                    <form action="">
                        <textarea rows="7" placeholder='Cuéntanos, ¿En qué podemos mejorar?' />
                        <button>Enviar</button>
                    </form>
                </div>
            </StandarContainer>
        </section>
    );
};
