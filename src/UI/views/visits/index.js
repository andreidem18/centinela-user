import { Link } from 'react-router-dom';
import { agregarInvitado, iconoChat, invitacionesEnviadas } from 'UI/assets';
import { NavBar, LateralMenu, AlternativeBackground } from 'UI/components';

import "./styles.scss";

export const Visits = () => {

    return (
        <section className="visits">
            <AlternativeBackground>
                <NavBar />
                <h3>Invitados</h3>
                <div className="card">
                    <Link className="mb" to="/visitas/nueva-invitación">
                        <img src={agregarInvitado} alt="Agregar invitado" />
                        <span>Agregar invitado</span>
                        <div className="inner"></div>
                    </Link>
                    <Link to="/visitas/invitaciones-enviadas">
                        <img src={invitacionesEnviadas} alt="Invitado frecuente" />
                        <span>Invitaciones enviadas</span>
                        <div className="inner"></div>
                    </Link>
                </div>
                <button className="chat-button">
                    <img src={iconoChat} alt="" />
                </button>
                <LateralMenu  selected="visits" />
            </AlternativeBackground>
        </section>
    );
};
