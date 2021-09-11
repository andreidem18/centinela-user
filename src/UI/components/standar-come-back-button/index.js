import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

export const StandarComeBackButton = ({ isLink, link, onClick, icon }) => {
    return (
        <div className="standar-come-back-button">
            { isLink ? (
                <Link to={link}>
                    <i className="icon-arrow-left"></i>
                </Link>
            ) : (
                <button onClick={onClick}>
                    <i className='icon-arrow-left'></i>
                </button>
            )}
            <i className={`main-icon ${icon}`}></i>
        </div>
    );
};
