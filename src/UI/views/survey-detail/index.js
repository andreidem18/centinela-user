import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { showInfoModal } from 'redux/actions';
import { useParams } from 'react-router-dom';

import "./styles.scss";
import { SurveyDetailView } from './survey-detail-view';

export const SurveyDetail = () => {

    const { id } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const survey = fakeSurveys.find(s => s.id === parseInt(id));

    const comeback = () => {
        // Para que al volver muestre advertencia sólo si son encuestas no respondidas
        if(survey.questions[0].answer){
            history.push('/encuestas');
        } else {
            dispatch(showInfoModal({ type: 'warning', actionModal: () => history.push('/encuestas'), message: "¿Seguro que deseas salir? Se perderá toda la información guardada", title: "Advertencia" }));
        }
    }

    return (
        <SurveyDetailView survey={survey} comeback={comeback} />
    );
};

const fakeSurveys = [
    {
        id: 1,
        title: "Servicios brindados",
        status: "pending",
        description: "Encuesta para evaluar los servicios brindados por la unidad residencial los últimos meses",
        questions: [
            {
                id: 1,
                question: '¿Cómo evaluas la administración?',
                type: 'multiple',
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
                type: 'multiple',
                options: [
                    {
                        id: 4,
                        option: 'Buena'
                    },
                    {
                        id: 5,
                        option: 'Regular'
                    },
                    {
                        id: 6,
                        option: 'Mala'
                    }
                ]
            },
            {
                id: 3,
                question: '¿Qué evaluarías la mesa directiva?',
                type: 'multiple',
                options: [
                    {
                        id: 7,
                        option: 'Buena'
                    },
                    {
                        id: 8,
                        option: 'Regular'
                    },
                    {
                        id: 9,
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
                        id: 10,
                        option: 'Si'
                    },
                    {
                        id: 11,
                        option: 'No'
                    }
                ]
            },
            {
                id: 2,
                question: '¿Se debería recurrir a una nueva organización de la administración?',
                type: 'multiple',
                options: [
                    {
                        id: 12,
                        option: 'Si'
                    },
                    {
                        id: 13,
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
                type: 'multiple',
                options: [
                    {
                        id: 14,
                        option: 'Buena'
                    },
                    {
                        id: 15,
                        option: 'Regular'
                    },
                    {
                        id: 16,
                        option: 'Mala'
                    }
                ],
                answer: 14
            },
            {
                id: 2,
                question: '¿Cómo evaluas la administración?',
                type: 'multiple',
                options: [
                    {
                        id: 17,
                        option: 'Buena'
                    },
                    {
                        id: 18,
                        option: 'Regular'
                    },
                    {
                        id: 19,
                        option: 'Mala'
                    }
                ],
                answer: 18
            },
            {
                id: 3,
                question: '¿Qué evaluarías la mesa directiva?',
                type: 'multiple',
                options: [
                    {
                        id: 20,
                        option: 'Buena'
                    },
                    {
                        id: 21,
                        option: 'Regular'
                    },
                    {
                        id: 22,
                        option: 'Mala'
                    }
                ],
                answer: 22
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
