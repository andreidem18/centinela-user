import { AlternativeBackground, HomeLink, LateralMenu, NavBar, StandarComeBackButton } from 'UI/components';
import { Report } from './components';

import "./styles.scss";

export const GeneratedReports = () => {
    
    return (
        <section className="generated-reports">
            <AlternativeBackground>
                <NavBar />
                <HomeLink />
                <StandarComeBackButton
                    isLink={true}
                    link="/incidentes"
                    icon='icon-reports'
                />
                <div className="card">
                    <div className="card-title-container">
                        <h4>Reportes Generados</h4>
                    </div>
                    <div className="reports">
                        {fakeReports.map(report => (
                            <Report report={report} id={report.id}/>
                        ))}
                    </div>
                </div>
                <LateralMenu />
            </AlternativeBackground>
        </section>
    );
};

const fakeReports = [
    {
        id: 1,
        title: 'Vecino no mueve el carro que me bloquea el paso',
        incident: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut corporis dolorum corrupti natus! Assumenda corrupti dolorum',
        answer: 'am adipisci culpa, ducimus recusandae officia sit similique placeat reiciendis obcaecati ullam vel minus. A hic laboriosam rem vel non!'
    },
    {
        id: 2,
        title: 'Niños rompieron mi TV',
        incident: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut corporis dolorum corrupti natus! Assumenda corrupti dolorum',
        answer: 'am adipisci culpa, ducimus recusandae officia sit similique placeat reiciendis obcaecati ullam vel minus. A hic laboriosam rem vel non!'
    },
    {
        id: 3,
        title: 'Vecino estaba martillando en la madrugada',
        incident: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut corporis dolorum corrupti natus! Assumenda corrupti dolorum',
        answer: null
    }
]
