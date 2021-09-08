import React from 'react';
import { Link } from 'react-router-dom';
import { agregarInvitado, iconoChat } from 'UI/assets';
import { AlternativeBackground, LateralMenu, NavBar } from 'UI/components';

import "./styles.scss";

export const NewInvitation = () => {
    return (
        <section className="visits">
            <AlternativeBackground>
                <NavBar />
                <h3>
                    <Link to="/visitas">
                        <i className="fas fa-chevron-left"></i>
                    </Link>
                    Nueva Invitación
                </h3>
                <Link className="new-guest-link" to="/visitas/nueva-invitación/agregar-invitado" >
                    <div className="info">
                        <h4>Invitado nuevo</h4>
                        <div className="icon"><img src={agregarInvitado} alt="Agregar invitado" /></div>
                    </div>
                    <div className="arrow">
                        <i className="fas fa-caret-right"></i>
                    </div>
                </Link>
                <div className="card">
                    <div className="card-title-container">
                        <h4>Invitados guardados</h4>
                        <button>Ver todos</button>
                    </div>
                    <div className="guests">
                        {users.map(user => (
                            <div className="guest-container col-md-4 col-lg-5" key={user.id}>
                                <button>
                                    <img src={user.avatar} alt="Invitado" />
                                    <span>{user.name}</span>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
                <button className="chat-button">
                    <img src={iconoChat} alt="" />
                </button>
                <LateralMenu  selected="visits" />
            </AlternativeBackground>
        </section>
    );
};

const users = [
    {
        id: 1,
        name: "Eugenio Ortiz",
        avatar: "https://raw.githubusercontent.com/andreidem18/images-bank/main/users/1.jpg",
    },
    {
        id: 2,
        name: "Karla Montoya",
        avatar: "https://raw.githubusercontent.com/andreidem18/images-bank/main/users/2.jpg",
    },
    {
        id: 3,
        name: "Marly Gómez",
        avatar: "https://raw.githubusercontent.com/andreidem18/images-bank/main/users/3.jpg",
    },
    {
        id: 4,
        name: "Alejandro Fernandez",
        avatar: "https://raw.githubusercontent.com/andreidem18/images-bank/main/users/4.jpg",
    },
    {
        id: 5,
        name: "Carlos Ortega",
        avatar: "https://raw.githubusercontent.com/andreidem18/images-bank/main/users/5.jpg",
    }
]
