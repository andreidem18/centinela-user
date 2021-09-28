import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from 'hooks';

import './styles.scss';

export const BottomMenu = ({ selected }) => {

    const { showInfoModal } = useApp();

    return (
        <div className='bottom-menu'>
            <Link className={selected === 'home' ? 'active' : ''} to='/'>
                <i className="icon-home"></i>
                <span>Principal</span>
            </Link>
            <Link className={selected === 'visits' ? 'active' : ''} to='/visitas'>
                <i className="icon-group"></i>
                <span>Visitas</span>
            </Link>
            <button className={selected === 'emergency' ? 'active' : ''} onClick={() => showInfoModal({ type: 'warning', actionModal: null, title: 'Advertencia', message: '¿Estas seguro de querer enviar una alerta?' })}>
                <i className="icon-warning"></i>
                <span>Emergencia</span>
            </button>
            <Link className={selected === 'events' ? 'active' : ''} to='/eventos'>
                <i className="icon-calendar"></i>
                <span>Eventos</span>
            </Link>
            <Link className={selected === 'payments' ? 'active' : ''} to='/pagos'>
                <i className="icon-payments"></i>
                <span>Pagos</span>
            </Link>
        </div>
    );
};
