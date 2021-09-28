import React from 'react';
import { Link } from 'react-router-dom';
import { buscando } from 'UI/assets';
import { getAvatar, timeSince } from 'utils';

import './styles.scss';

export const StatementsHome = () => {
    return (
        <div className='statements-home'>
            {
                fakeStatements.length > 0 ? (
                    fakeStatements.map(s => (
                        <Link className="card" key={s.id} to='/comunicados'>
                            <div className="header">
                                <h4>{s.title}</h4>
                                <span>
                                    <i className="icon-shorcut"></i>
                                </span>
                            </div>
                            <p>{s.text.length > 100 ? s.text.substring(0, 100) + '...' : s.text}</p>
                            <div className="bottom">
                                <img src={getAvatar(s.author.first_name, s.author.last_name)} alt="" />
                                <div className="name">
                                    <span>{s.author.first_name} {s.author.last_name}</span>
                                </div>
                            </div>
                            <div className="date">{timeSince(s.created_at)}</div>
                        </Link>
                    ))
                ) : (
                    <div className="card empty">
                        <img src={buscando} alt="" />
                        Parece que no hay comunicados
                    </div>
                )
            }
        </div>
    );
};


const fakeStatements = [
    {
        id: 1,
        title: 'cambio de administración',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam labore cupiditate odio corrupti debitis impedit eveniet ex, modi molestiae non harum quibusdam aliquid quidem? Blanditiis cumque magni nisi nulla assumenda?',
        author: {first_name: 'John', last_name: 'Doe'},
        created_at: new Date("September 26, 2021 10:30:00")
    },
    {
        id: 2,
        title: 'Horario de fiestas',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro accusantium numquam praesentium soluta ex blanditiis illum! Quidem, incidunt? Commodi sint numquam praesentium maxime atque? Eaque minus ea hic a veritatis.',
        author: {first_name: 'John', last_name: 'Doe'},
        created_at: new Date("September 20, 2021 10:30:00")
    }
]
