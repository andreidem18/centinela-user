import React from 'react';
import { AlternativeBackground, LateralMenu, NavBar } from '..';

import './styles.scss';

export const StandarContainer = ({children, sectionSelected}) => {
    return (
        <AlternativeBackground>
            <NavBar />
            {children}
            <LateralMenu  selected={sectionSelected} />
        </AlternativeBackground>
    );
};