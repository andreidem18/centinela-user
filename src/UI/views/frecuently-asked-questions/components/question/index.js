import React from 'react';

import './styles.scss';

export const Question = ({title, text, handleOpenAnswer, isOpen}) => {
    return (
        <button className="question" onClick={handleOpenAnswer}>
            <div className="question-header">
                <span className='question-name'>{title}</span>
                <span className={isOpen ? 'rotate' : ''}>
                    <i className='icon-arrow-left'></i>
                </span>
            </div>
            <div className="question-body" style={{maxHeight: isOpen ? '1000px' : '0px'}}>
                <p>{text}</p>
            </div>
        </button>
    );
};
