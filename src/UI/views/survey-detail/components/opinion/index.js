import React from 'react';

import './styles.scss';

export const Opinion = ({ question, number }) => {
    return (
        <div className='opinion'>
            <p className='question' number={number+'°'}>{question.question}</p>
            {
                question.answer ? (
                    <textarea rows="5" value={question.answer} disabled />
                ) : (
                    <textarea rows="5" />
                )
            }
        </div>
    );
};
