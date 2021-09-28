import React from 'react';
import { BottomMenu, NavBar } from '..';

import './styles.scss';

export const StandarContainer = ({ children, sectionSelected }) => {
    return (
        <div>
            <div className="standar-container">
                <NavBar />
                <div className="content">
                    {children}
                </div>
                <BottomMenu selected={sectionSelected} />
            </div>
        </div>
    );
};
