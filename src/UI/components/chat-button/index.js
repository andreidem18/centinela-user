import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

export const ChatButton = () => {
    return (
        <Link to='/chat' className="chat-button">
            <i className='icon-chat'></i>
        </Link>
    );
};
