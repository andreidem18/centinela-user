import React from 'react';
import { StandarContainer, StandarComeBackButton } from 'UI/components';

import './styles.scss';

export const ContactUs = () => {

    return (
        <section className='contact-us'>
            <StandarContainer>
                <StandarComeBackButton 
                    isLink={true}
                    link='/ayuda'
                    icon='icon-contact'
                />
                <div className="standar-card-container">
                    <p>
                        Antes de contactar a un asesor te
                        invitamos a que revises nuestro
                        apartado de preguntas frecuentes,
                        si despues de leer las opciones
                        disponibles no encuentras, solucion
                        a tu problema procede a contactar
                        a nuestros asesores
                    </p>
                    <h3>Comunícate con nosotros</h3>
                    <textarea placeholder="Escribe una breve descripción de tu problema" rows="6" />
                    <button className='button-send'>Enviar</button>
                </div>
            </StandarContainer>
        </section>
    );
};
