import React from 'react';
import { MainLayout } from 'UI/components';

import './styles.scss';

export const ReportError = () => {
    return (
        <MainLayout title='Reportar error'>
            <section className='report-error'>
                <form action="">
                    <label htmlFor="comment">Cuéntanos, ¿Qué esta fallando?</label>
                    <textarea rows="9" id="comment" />
                    <button className='btn-primary'>Enviar</button>
                </form>
            </section>
        </MainLayout>
    );
};
