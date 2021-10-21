import React from 'react';
import { ChatButton, StandarContainer } from 'UI/components';
import { SectionsSlider } from './components';

export const HomeView = ({ loggedUser, viewSelected, setViewSelected, getViewSelected, views }) => {

    return (
        <StandarContainer sectionSelected='home'>
            <section className="home-user">
                <div>
                    <h1>Hola <span>{loggedUser.first_name}</span></h1>
                    <div className="sections-slider-container">
                        <p className='question'>¿Qué vas a consultar?</p>
                        <SectionsSlider />
                    </div>
                    <div className="view-buttons">
                        
                        <button 
                            className={viewSelected === 0 ? 'selected' : ''} 
                            onClick={() => setViewSelected(0)}
                        >
                            Comunicados
                        </button>

                        <button 
                            className={viewSelected === 1 ? 'selected' : ''} 
                            onClick={() => setViewSelected(1)}
                        >
                            Visitas
                        </button>

                        <button 
                            className={viewSelected === 2 ? 'selected' : ''} 
                            onClick={() => setViewSelected(2)}
                        >
                            Pagos
                        </button>

                    </div>
                </div>
                <div className="view-container"> 
                    { getViewSelected() } 
                </div>
                <ChatButton />
            </section>
        </StandarContainer>
    );
};
