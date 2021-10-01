import React, { useState } from 'react';
import { HomeLink, StandarContainer } from 'UI/components';
import { comunicados } from 'UI/assets';

import './styles.scss';

export const Statements = () => {

    const [ open, setOpen ] = useState(null);

    const handleOpen = idStatement => {
        if(open === idStatement) setOpen(null);
        else setOpen(idStatement);
    }

    return (
        <section className='statements'>
            <StandarContainer background>
                <HomeLink />
                <h3 className='standar-section-title'>Comunicados</h3>
                <div className="main-image">
                    <img src={comunicados} alt="" />
                </div>
                <div className="standar-card-container">
                    <div className="statements-container">
                        {
                            fakeStatements.map(statement => (
                                <div className="statement" key={statement.id}>
                                    <button className="statement-header" onClick={() => handleOpen(statement.id)}>
                                        <span>{statement.title}</span>
                                        <div className={`icon ${open === statement.id ? 'rotate' : ''}`}>
                                            <i className="icon-arrow-left"></i>
                                        </div>
                                    </button>
                                    <div className={`statement-body ${open === statement.id ? 'open' : ''}`}>
                                        <div className="message">
                                            {statement.text}
                                        </div>
                                        <button className="button-download">
                                            <i className="icon-download"></i>
                                        </button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </StandarContainer>
        </section>
    );
};

const fakeStatements = [
    {
        id: 1,
        title: 'cambio de administración',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam labore cupiditate odio corrupti debitis impedit eveniet ex, modi molestiae non harum quibusdam aliquid quidem? Blanditiis cumque magni nisi nulla assumenda?'
    },
    {
        id: 2,
        title: 'Horario de fiestas',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro accusantium numquam praesentium soluta ex blanditiis illum! Quidem, incidunt? Commodi sint numquam praesentium maxime atque? Eaque minus ea hic a veritatis.'
    }
]
