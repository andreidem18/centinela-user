import React from 'react';
import { Link } from 'react-router-dom';
import { BottomMenu, NavBar } from '..';

import './styles.scss';

export const StandarMainSectionContainer = ({children, title, sectionSelected}) => {
    return (
        <div className="main-layout">
            <NavBar />
                <div className="standar-main-section-container">
                    <div className="header">
                        <div className="header-content">
                            <h2>{title}</h2>
                            <Link to="/"><i className="icon-home-empty"></i></Link>
                        </div>
                        <div className="wave wave1"></div>
                        <div className="wave wave2"></div>
                        <div className="wave wave3"></div>
                    </div>
                    <div className='main-section-content'>
                        <div className='content'>
                            {children}
                        </div>
                    </div>
                </div>
            <BottomMenu selected={sectionSelected} />
        </div>
    );
};
