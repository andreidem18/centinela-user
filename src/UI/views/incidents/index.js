import { Link } from 'react-router-dom';
import { nuevoReporte } from 'UI/assets';
import { NavBar, LateralMenu, AlternativeBackground } from 'UI/components';
import { ChatButton } from 'UI/components';

import "./styles.scss";

export const Incidents = () => {

    return (
        <section className="incidents">
            <AlternativeBackground>
                <NavBar />
                <h3>Incidentes</h3>
                <div className="card">
                    <Link className="mb" to="/incidentes/reportar-incidente">
                        <img src={nuevoReporte} alt="Agregar invitado" />
                        <span>Reportar nuevo incidente</span>
                        <div className="inner"></div>
                    </Link>
                    <Link to="/incidentes/reportes-generados">
                        <i className="icon-reports" style={{zIndex: 9, fontSize: '40px'}}></i>
                        <span>Registro de reportes</span>
                        <div className="inner"></div>
                    </Link>
                </div>
                <ChatButton />
                <LateralMenu  selected="" />
            </AlternativeBackground>
        </section>
    );
};
