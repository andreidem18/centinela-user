import React from 'react';

import './styles.scss';

export const MultipleSelection = ({question, number}) => {
    
    return (
        <div className='multiple-selection'>
            <p className='question' number={number+'°'}>{question.question}</p>
            {
                question.options.map(option => (
                    <div className='option' key={option.id}>
                        {
                            question.answer ? (
                                <input 
                                    type="radio" 
                                    name={question.id} 
                                    id={option.id} 
                                    checked={question.answer === option.id}
                                    disabled={question.answer}
                                />
                            ) : (
                                <input 
                                    type="radio" 
                                    name={question.id} 
                                    id={option.id} 
                                />)
                        }
                        <label htmlFor={option.id}>{option.option}</label>
                    </div>
                ))
            }
        </div>
    );
};
