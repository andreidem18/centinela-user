import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

export const MenuButton = ({isLink, link, onClick, className, icon, text}) => {
    return (
        isLink ? (
            <Link className={`menu-button ${className}`} to={link}>
                <i className={icon}></i>
                <span>{text}</span>
                <div className="inner"></div>
            </Link>
        ) : (
            <button className={`menu-button ${className}`} onClick={onClick}>
                <i className={icon}></i>
                <span>{text}</span>
                <div className="inner"></div>
            </button>
        )
    );
};
