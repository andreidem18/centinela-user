import React from 'react';
import { useState } from 'react';
import { StandarContainer, StandarComeBackButton } from 'UI/components';
import { Question } from './components';

import './styles.scss';

export const FrecuentlyAskedQuestions = () => {

    const [ openAnswer, setOpenAnswer ] = useState(-1);

    const handleOpenAnswer = n => {
        if(n === openAnswer) setOpenAnswer(-1) 
        else setOpenAnswer(n)
    }
    return (
        <section className='frecuently-asked-questions'>
            <StandarContainer>
                <StandarComeBackButton 
                    isLink={true}
                    link='/ayuda'
                    icon='icon-faq'
                />
                <div className="questions-container">
                    <Question 
                        title='Pregunta 1' 
                        text="Oh, I'm an alien, I'm a legal
                            alien
                            I'm an Englishman in
                            New York. Oh, I'm an alien,
                            I'm a legal alien
                            I'm an
                            Englishman in New York." 
                        handleOpenAnswer={() => handleOpenAnswer(1)}
                        isOpen={openAnswer === 1}
                    />
                    <Question 
                        title='Pregunta 2' 
                        text="Oh, I'm an alien, I'm a legal
                            alien
                            I'm an Englishman in
                            New York. Oh, I'm an alien,
                            I'm a legal alien
                            I'm an
                            Englishman in New York." 
                        handleOpenAnswer={() => handleOpenAnswer(2)}
                        isOpen={openAnswer === 2}
                    />
                    <Question 
                        title='Pregunta 3' 
                        text="Oh, I'm an alien, I'm a legal
                            alien
                            I'm an Englishman in
                            New York. Oh, I'm an alien,
                            I'm a legal alien
                            I'm an
                            Englishman in New York." 
                        handleOpenAnswer={() => handleOpenAnswer(3)}
                        isOpen={openAnswer === 3}
                    />
                    <Question 
                        title='Pregunta 4' 
                        text="Oh, I'm an alien, I'm a legal
                            alien
                            I'm an Englishman in
                            New York. Oh, I'm an alien,
                            I'm a legal alien
                            I'm an
                            Englishman in New York." 
                        handleOpenAnswer={() => handleOpenAnswer(4)}
                        isOpen={openAnswer === 4}
                    />
                </div>
            </StandarContainer>
        </section>
    );
};
