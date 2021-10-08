import { Link } from 'react-router-dom';
import { MainLayout } from 'UI/components';

import "./styles.scss";

export const GeneratedReports = () => {
    
    return (
        <section className="generated-reports">
            <MainLayout title='Reportes generados'>
                {fakeReports.map(report => (
                    <Link 
                        className='report'
                        to={`/incidentes/reportes-generados/${report.id}`}
                        key={report.id}
                    >
                        <span className='descriptive-text'>
                            {/* Si tiene más de 26 caracteres, acórtalo */}
                            {report.title.length > 22 ? report.title.substring(0, 20) + '...' : report.title}
                        </span>
                        <i className={report.answer ? 'answered' : 'pending'}></i>
                    </Link>
                ))}
            </ MainLayout>
        </section>
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
        files: ['']
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
