import React from 'react';
import { Header, Input, Messages } from './components';

import './styles.scss';

export const Chat = () => {

    return (
        <section className='chat'>
            <Header contact={contact} />
            <Messages userId={5} messages={messages} />
            <Input />
        </section>
    );
};

const contact = {
    id: 1,
    first_name: 'Pablo',
    last_name: 'Gómez',
    role: 2
}

const messages = [
    {
        id: 1, 
        user: 5,
        message: 'Buen día, ¿No ha pasado la basura?',
        created_at: new Date('October 28, 2021 12:10:00')
    },
    {
        id: 2,
        user: 3,
        message: 'Debió pasar a la 1, no debe tardar',
        created_at: new Date('October 28, 2021 12:11:00')
    },
    {
        id: 3,
        user: 3,
        message: '¿Tiene comida por entrar?',
        created_at: new Date('October 28, 2021 12:11:00')
    },
    {
        id: 4, 
        user: 5,
        message: 'Si',
        created_at: new Date('October 28, 2021 12:12:00')
    },
    {
        id: 5, 
        user: 5,
        message: 'Ya lo registré en la aplicación',
        created_at: new Date('October 28, 2021 12:12:00')
    }
]
