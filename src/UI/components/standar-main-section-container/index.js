import React from 'react';
import { AlternativeBackground, LateralMenu, NavBar } from '..';
import { HomeLink } from '../home-link';

import './styles.scss';

export const StandarMainSectionContainer = ({children, title, sectionSelected}) => {
    return (
        <div className="standar-main-section-container">
            <AlternativeBackground>
                <NavBar />
                    <HomeLink/>
                    <h3 className='main-container-title'>{title}</h3>
                    <div className="main-container-card">
                        {children}
                    </div>
                <LateralMenu  selected={sectionSelected} />
            </AlternativeBackground>
        </div>
    );
};
