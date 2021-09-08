import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { invitacionesEnviadasAzul, iconoChat } from 'UI/assets';
import { AlternativeBackground, LateralMenu, NavBar } from 'UI/components';
import { InvitationDetail } from './components';

import "./styles.scss";

export const InvitationsSent = () => {

    const [ invitationSelected, setInvitationSelected ] = useState(null);
    
    return (
        <section className="invitations-sent">
            <AlternativeBackground>
                <NavBar />
                { invitationSelected ? (
                    <InvitationDetail invitation={invitationSelected} comeBack={() => setInvitationSelected(null)} />
                ) : (<>
                    <div className="come-back-button">
                        <Link to="/visitas">
                            <i className="fas fa-chevron-left"></i>
                        </Link>
                        <img src={invitacionesEnviadasAzul} alt="Agregar invitado" />
                    </div>
                    <div className="card">
                        <div className="card-title-container">
                            <h4>Invitaciones enviadas</h4>
                        </div>
                        <div className="guests">
                            {users.map(user => (
                                <div className="guest-container" key={user.id}>
                                    <div className="guest">
                                        <img src={user.avatar} alt="Invitado" />
                                        <span className="name">{user.name}</span>
                                        <button 
                                            className={`${user.status === 'Activa' ? 'active' : ''}`} 
                                            onClick={() => setInvitationSelected(user)}
                                        >
                                            <span>{user.status}</span>
                                            <i className="fas fa-caret-right"></i>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </>)}
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
        status: "Activa",
        created: new Date(2021, 8, 24),
        expires: new Date(2021, 8, 29),
        carModel: "Hyundai",
        licensePlate: "DAE - 982"
    },
    {
        id: 2,
        name: "Karla Montoya",
        avatar: "https://raw.githubusercontent.com/andreidem18/images-bank/main/users/2.jpg",
        status: "Finalizada",
        created: new Date(2021, 12, 1),
        expires: new Date(2021, 12, 13),
        carModel: "Aveo",
        licensePlate: "MAR - 4525"
    },
    {
        id: 3,
        name: "Marly Gómez",
        avatar: "https://raw.githubusercontent.com/andreidem18/images-bank/main/users/3.jpg",
        status: "Finalizada",
        created: new Date(2021, 10, 18),
        expires: new Date(2021, 10, 18),
        carModel: "Tesla",
        licensePlate: "PLA - 8MKR"
    },
    {
        id: 4,
        name: "Alejandro Fernandez",
        avatar: "https://raw.githubusercontent.com/andreidem18/images-bank/main/users/4.jpg",
        status: "Finalizada",
        created: new Date(2021, 5, 14),
        expires: new Date(2021, 5, 4),
        carModel: "Toyota",
        licensePlate: "NBI - 1688"
    },
    {
        id: 5,
        name: "Carlos Ortega",
        avatar: "https://raw.githubusercontent.com/andreidem18/images-bank/main/users/5.jpg",
        status: "Finalizada",
        created: new Date(2021, 9, 9),
        expires: new Date(2021, 9, 18),
        carModel: "Jeep",
        licensePlate: "VRA - 0000"
    }
]
