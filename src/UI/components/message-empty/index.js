import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

export const MessageEmpty = ({ message, link, linkMessage }) => {
    return (
        <div className='message-empty'>
            <i className="fas fa-search"></i>
            <p> { message } </p>
            {
                link &&
                    <Link to={link}>{linkMessage}</Link>
            }
        </div>
    );
};
