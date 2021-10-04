import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

export const MessageEmpty = ({ message, link, action, linkMessage }) => {
    return (
        <div className='message-empty'>
            <i className="fas fa-search"></i>
            <p> { message } </p>
            {
                (link || action) &&
                    link ? 
                        <Link to={link}>{linkMessage}</Link>
                    :
                        <button onClick={action}>{linkMessage}</button>
            }
        </div>
    );
};
