import React from 'react';
import { MainLayout } from 'UI/components';

import './styles.scss';

export const ContactUs = () => {

    return (
        <section className='contact-us'>
            <MainLayout title='Contáctanos' bottomMenu={false}>
                <p>
                    Antes de contactar a un asesor te
                    invitamos a que revises nuestro
                    apartado de preguntas frecuentes.
                    Si despues de leer las opciones
                    disponibles no encuentras solucion
                    a tu problema, procede a contactar
                    a nuestros asesores
                </p>
                <h3>Comunícate con nosotros</h3>
                <textarea placeholder="Escribe una breve descripción de tu problema" rows="6" />
                <button className='btn-primary'>Enviar</button>
            </MainLayout>
        </section>
    );
};
