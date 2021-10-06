import React from 'react';
import { Link } from 'react-router-dom';
import { ChatButton, MainLayout } from 'UI/components';

import "./styles.scss";

export const Surveys = () => {

    return (
        <section className="surveys">
            <MainLayout title='Encuestas'>
                <h4 className="survey-title">
                    Pendientes
                </h4>
                {
                    fakeSurveys.map(survey => (
                        survey.status === 'pending' &&
                            <Link className='survey' key={survey.id} to={`/encuestas/${survey.id}`}>
                                {survey.title}
                            </Link>
                    ))
                }
                <h4 className="survey-title mt">
                    Realizadas
                </h4>
                {
                    fakeSurveys.map(survey => (
                        survey.status === 'done' &&
                            <Link className='survey' key={survey.id} to={`/encuestas/${survey.id}`}>
                                {survey.title}
                            </Link>
                    ))
                }
                <ChatButton />
            </MainLayout>
        </section>
    );
};


const fakeSurveys = [
    {
        id: 1,
        title: "Servicios brindados",
        status: "pending"
    },
    {
        id: 2,
        title: "Cambio de administración",
        status: "pending"
    },
    {
        id: 3,
        title: "Discusión sobre la normativa de mascotas",
        status: "done"
    }
]
