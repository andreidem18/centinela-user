import React from 'react';
import { defaultAvatar } from 'UI/assets';
import { getAvatar } from 'utils';
import history from 'utils/history';
import './styles.scss';

export const Header = ({ contact }) => {
    const getRole = () => {
        switch(contact.role){
            case 1:
            case 3:
                return 'Administrador'
            case 2:
                return 'Vigilante'
            default:
                return 'Usuario'
        }
    }

    return (
        <div className='header'>
            <div className="contact-info">
                <button className="btn-comeback" onClick={() => history.goBack()}>
                    <i className="fas fa-chevron-left"></i>
                </button>
                {
                    contact ? (
                        <>
                            <span className='name'>
                                {contact.first_name} {contact.last_name}
                            </span>
                            <span className='role'>
                                {getRole()}
                            </span>
                        </>
                    ) : (
                        <span className='wait-message'>
                            Un vigilante se pondrá en contacto contigo...
                        </span>
                    )
                }
            </div>
            <div className="avatar">
                <img src={
                    contact 
                        ? getAvatar(contact.first_name, contact.last_name)
                        : defaultAvatar
                } alt="" />
            </div>
        </div>
    );
};
