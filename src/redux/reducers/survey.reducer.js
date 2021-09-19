import { surveyActions } from "redux/actions";

const surveyReducer = (state = initialState, action) => {
    switch (action.type) {
        case surveyActions.setAnswer:
            const surveys = state.surveys;
            const { surveyId, questionId, optionId, text } = action.payload;
            const survey = state.surveys.findIndex(s => s.id === surveyId);
            const question = survey.questions.findIndex(q => q.id === questionId);
            const option = question.options.findIndex(o => o.id === optionId);
            surveys[survey].questions[question].answer = {
                option: surveys[survey].questions[question].options[option], 
                text
            }
            return {...state, surveys }

        
        default:
            return state;
    }
}


const initialState = {
    surveys: [
        {
            id: 1,
            title: "Servicios brindados",
            status: "pending",
            description: "Encuesta para evaluar los servicios brindados por la unidad residencial los últimos meses",
            questions: [
                {
                    id: 1,
                    question: '¿Cómo evaluas la administración?',
                    type: 'options',
                    options: [
                        {
                            id: 1,
                            option: 'Buena'
                        },
                        {
                            id: 2,
                            option: 'Regular'
                        },
                        {
                            id: 3,
                            option: 'Mala'
                        }
                    ]
                },
                {
                    id: 2,
                    question: '¿Cómo evaluas la administración?',
                    type: 'options',
                    options: [
                        {
                            id: 1,
                            option: 'Buena'
                        },
                        {
                            id: 2,
                            option: 'Regular'
                        },
                        {
                            id: 3,
                            option: 'Mala'
                        }
                    ]
                },
                {
                    id: 3,
                    question: '¿Qué evaluarías la mesa directiva?',
                    type: 'options',
                    options: [
                        {
                            id: 1,
                            option: 'Buena'
                        },
                        {
                            id: 2,
                            option: 'Regular'
                        },
                        {
                            id: 3,
                            option: 'Mala'
                        }
                    ]
                },
                {
                    id: 4,
                    question: '¿Qué nos sugieres para mejorar?',
                    type: 'opinion',
                    limit: 350
                }
            ]
        },
        {
            id: 2,
            title: "Cambio de administración",
            description: 'Encuesta para evaluar la posibilidad de cambios en la administración',
            status: "pending",
            questions: [
                {
                    id: 1,
                    question: '¿Consideras que la administración ha sido deficiente los últimos meses?',
                    type: 'multiple',
                    options: [
                        {
                            id: 1,
                            option: 'Si'
                        },
                        {
                            id: 2,
                            option: 'No'
                        }
                    ]
                },
                {
                    id: 2,
                    question: '¿Se debería recurrir a una nueva organización de la administración?',
                    type: 'Múltiple',
                    options: [
                        {
                            id: 1,
                            option: 'Si'
                        },
                        {
                            id: 2,
                            option: 'No'
                        }
                    ]
                }
            ]
        },
        {
            id: 3,
            title: "Discusión sobre la normativa de mascotas",
            status: "done",
            questions: [
                {
                    id: 1,
                    question: '¿Cómo evaluas la administración?',
                    type: 'options',
                    options: [
                        {
                            id: 1,
                            option: 'Buena'
                        },
                        {
                            id: 2,
                            option: 'Regular'
                        },
                        {
                            id: 3,
                            option: 'Mala'
                        }
                    ],
                    answer: 1
                },
                {
                    id: 2,
                    question: '¿Cómo evaluas la administración?',
                    type: 'options',
                    options: [
                        {
                            id: 1,
                            option: 'Buena'
                        },
                        {
                            id: 2,
                            option: 'Regular'
                        },
                        {
                            id: 3,
                            option: 'Mala'
                        }
                    ],
                    answer: 2
                },
                {
                    id: 3,
                    question: '¿Qué evaluarías la mesa directiva?',
                    type: 'options',
                    options: [
                        {
                            id: 1,
                            option: 'Buena'
                        },
                        {
                            id: 2,
                            option: 'Regular'
                        },
                        {
                            id: 3,
                            option: 'Mala'
                        }
                    ],
                    answer: 3
                },
                {
                    id: 4,
                    question: '¿Qué nos sugieres para mejorar?',
                    type: 'opinion',
                    limit: 350,
                    answer: 'Creo que ya están perfectos así, sobretodo cuándo añadieron la app centinela :D'
                }
            ]
        }
    ]
}

export default surveyReducer;
