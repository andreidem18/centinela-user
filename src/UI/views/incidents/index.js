import { Link } from 'react-router-dom';
import { nuevoReporte, iconoChat, invitacionesEnviadas } from 'UI/assets';
import { NavBar, LateralMenu, AlternativeBackground } from 'UI/components';

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
                    <Link to="/incidentes/registro">
                        <img src={invitacionesEnviadas} alt="Invitado frecuente" />
                        <span>Registro de reportes</span>
                        <div className="inner"></div>
                    </Link>
                </div>
                <button className="chat-button">
                    <img src={iconoChat} alt="" />
                </button>
                <LateralMenu  selected="" />
            </AlternativeBackground>
        </section>
    );
};
