import React from 'react';
import { formatTime } from 'utils';

import './styles.scss';

export const Messages = ({ userId, messages}) => {
    return (
        <div className='messages'>
            {
                messages.map(message => {
                    const hour = formatTime(message.created_at)
                    return (
                        <div className={`message ${message.user === userId ? 'myself' : ''}`} key={message.id}>
                            <div className="message-text">
                                {message.message}
                            </div>
                            <div className="message-hour">
                                { hour }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};
