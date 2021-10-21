import React from 'react';

import './styles.scss';

export const StepProgressBar = ({ step }) => {
    
    return (
        <div className='step-progress-bar-container'>
            <ul className='progress-bar'>
                <li className={`${step >= 1 ? 'active' : ''}`}></li>
                <li className={`${step >= 2 ? 'active' : ''}`}></li>
                <li className={`${step >= 3 ? 'active' : ''}`}></li>
            </ul>
        </div>
    );
};
