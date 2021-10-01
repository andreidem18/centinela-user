import React, { useState, useEffect } from 'react';
import { useAuth, useGuest } from 'hooks';
import "./styles.scss";
import { StandarContainer } from 'UI/components';
import { PaymentsHome, SectionsSlider, StatementsHome, VisitsHome } from './components';

export const Home = () => {

    const { loggedUser, getUser } = useAuth();
    const { getGuests } = useGuest();
    const [ viewSelected, setViewSelected ] = useState(0);


    useEffect(() => {
        getUser();
        getGuests();
    }, [getUser, getGuests]);
    

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
                        <button className={viewSelected === 0 ? 'selected' : ''} onClick={() => setViewSelected(0)}>
                            Comunicados
                        </button>
                        <button className={viewSelected === 1 ? 'selected' : ''} onClick={() => setViewSelected(1)}>
                            Visitas
                        </button>
                        <button className={viewSelected === 2 ? 'selected' : ''} onClick={() => setViewSelected(2)}>
                            Pagos
                        </button>
                    </div>
                </div>
                <div className="view-container">
                    {
                        viewSelected === 0 ? ( 
                            <StatementsHome />
                        ) : ( 
                            viewSelected === 1 ? (
                                <VisitsHome />
                            ) : ( 
                                <PaymentsHome /> 
                            )
                        )
                    }
                </div>
            </section>
        </StandarContainer>
    );
};
