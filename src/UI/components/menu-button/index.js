import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

export const MenuButton = ({isLink, link, onClick, className, icon, image, text}) => {
    return (
        isLink ? (
            <Link className={`menu-button ${className}`} to={link}>
                <img src={image} alt={text} />
                <span>{text}</span>
            </Link>
        ) : (
            <button className={`menu-button ${className}`} onClick={onClick}>
                <img src={image} alt={text} />
                <span>{text}</span>
            </button>
        )
    );
};
