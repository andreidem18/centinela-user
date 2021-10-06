import React from 'react';
import { BottomMenu, NavBar } from '..';
import { Textfit } from 'react-textfit';
import { useHistory } from 'react-router';

import './styles.scss';

export const MainLayout = ({ children, sectionSelected, bottomMenu = true, title, comeback }) => {

    const history = useHistory();

    return (
        <div className="main-layout">
            <NavBar />
            <div className="content">
                <div className="header">
                    <div className="header-content">
                        <h2>
                            <Textfit mode="single" max={30}> {title} </Textfit>
                        </h2>
                        <button onClick={comeback ?? (() => history.goBack())}>
                            <i className="fas fa-chevron-left"></i>
                        </button>
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
            { bottomMenu && <BottomMenu selected={sectionSelected} /> }
        </div>
    );
};
