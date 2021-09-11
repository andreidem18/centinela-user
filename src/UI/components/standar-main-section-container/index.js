import React from 'react';
import { Link } from 'react-router-dom';
import { AlternativeBackground, LateralMenu, NavBar } from '..';

import './styles.scss';

export const StandarMainSectionContainer = ({children, title, sectionSelected}) => {
    return (
        <AlternativeBackground>
            <NavBar />
                <Link to='/' className='house-link'>
                    <i className="icon-house"></i>
                </Link>
                <h3 className='main-container-title'>{title}</h3>
                <div className="main-container-card">
                    {children}
                </div>
            <LateralMenu  selected={sectionSelected} />
        </AlternativeBackground>
    );
};
