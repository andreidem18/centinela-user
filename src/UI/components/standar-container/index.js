import React from 'react';
import { AlternativeBackground, BottomMenu, NavBar } from '..';

import './styles.scss';

export const StandarContainer = ({ children, sectionSelected, background }) => {
    return (
        <div>
            <div className="standar-container">
                <NavBar />
                <div className="content">
                    {
                        background ? (
                            <AlternativeBackground>
                                {children}
                            </AlternativeBackground>
                        ) : children
                    }
                </div>
                <BottomMenu selected={sectionSelected} />
            </div>
        </div>
    );
};
