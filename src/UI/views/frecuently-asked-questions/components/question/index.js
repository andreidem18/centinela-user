import React from 'react';

import './styles.scss';

export const Question = ({title, text, handleOpenAnswer, isOpen}) => {
    return (
        <div className="question">
            <div className="question-header">
                <span className='question-name'>{title}</span>
                <button onClick={handleOpenAnswer} className={isOpen ? 'rotate' : ''}>
                    <i className='icon-arrow-left'></i>
                </button>
            </div>
            <div className="question-body" style={{height: isOpen ? '116px' : '0px'}}>
                <p>{text}</p>
            </div>
        </div>
    );
};
