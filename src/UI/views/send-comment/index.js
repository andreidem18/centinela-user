import React from 'react';
import { MainLayout } from 'UI/components';

import './styles.scss';

export const SendComment = () => {
    return (
        <MainLayout title='Enviar comentario' bottomMenu={false}>
            <section className='send-comment'>
                <form action="">
                    <label htmlFor="comment">Cuéntanos, ¿En qué podemos mejorar?</label>
                    <textarea rows="9" id="comment" />
                    <button className='btn-primary'>Enviar</button>
                </form>
            </section>
        </MainLayout>
    );
};
