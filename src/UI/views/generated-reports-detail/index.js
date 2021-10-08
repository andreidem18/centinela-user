import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { MainLayout } from 'UI/components';
import { formatDate, formatTime } from 'utils';

import './styles.scss';

export const GeneratedReportsDetail = () => {

    const { id } = useParams();
    const [ report, setReport ] = useState(null);
    const date = formatDate(report?.date);
    const hour = formatTime(report?.date);
    const dateAnswer = formatDate(report?.answer?.date);
    const hourAnswer = formatTime(report?.answer?.date);

    useEffect(() => {
        const data = fakeReports.find(report => report.id === +id);
        setReport(data);
    }, [ id ])

    return (
        <MainLayout title='Reportes generados'>
            {
                report &&
                    <div className="report-detail">
                        <div className='date'>{date.day}/{date.month}/{date.year} {hour}</div>
                        <h4>{report.title}</h4>
                        {
                            report.files.length > 0 &&
                                <button className="download-files">
                                    Descargar adjuntos
                                    <i className="fas fa-cloud-download-alt"></i>
                                </button>
                        }
                        <p className='incident-description'>{report.incident}</p>
                        {
                            report.answer ? (<>
                                <div className="date">
                                    {dateAnswer.day}/{dateAnswer.month}/{dateAnswer.year} {hourAnswer}
                                </div>
                                <h4 style={{color: 'rgba(0, 0, 0, .8)'}}>Respuesta del administrador</h4>
                                <p>{report.answer.answer}</p>
                            </>) : (
                                <p className="non-answer">
                                    Esperando repuesta del administrador...
                                </p>
                            )
                        }
                    </div>
            }
        </MainLayout>
    );
};


const fakeReports = [
    {
        id: 1,
        title: 'Vecino no mueve el carro que me bloquea el paso',
        incident: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut corporis dolorum corrupti natus! Assumenda corrupti dolorum',
        answer: {
            answer: 'am adipisci culpa, ducimus recusandae officia sit similique placeat reiciendis obcaecati ullam vel minus. A hic laboriosam rem vel non!',
            date: new Date("October 1, 2021 10:30:00")
        },
        date: new Date("September 29, 2021 16:30:00"),
        files: ['photo']
    },
    {
        id: 2,
        title: 'Niños rompieron mi TV',
        incident: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut corporis dolorum corrupti natus! Assumenda corrupti dolorum',
        answer: {
            answer: 'am adipisci culpa, ducimus recusandae officia sit similique placeat reiciendis obcaecati ullam vel minus. A hic laboriosam rem vel non!',
            date: new Date("October 29, 2021 12:30:00")
        },
        date: new Date("October 28, 2021 08:30:00"),
        files: []
    },
    {
        id: 3,
        title: 'Vecino estaba martillando en la madrugada',
        incident: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut corporis dolorum corrupti natus! Assumenda corrupti dolorum',
        files: ['photo'],
        date: new Date("August 28, 2021 12:30:00"),
        answer: null
    }
]
