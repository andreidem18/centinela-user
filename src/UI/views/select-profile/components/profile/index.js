import React, { useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { deleteProfileThunk, selectProfileThunk, showInfoModal } from 'redux/actions';
import { getAvatar } from 'utils';

import './styles.scss';

export const Profile = ({ profile }) => {

    const [ showOptions, setShowOptions ] = useState(false);
    const dispatch = useDispatch();

    const handleDelete = id => {
        setShowOptions(false);
        dispatch(showInfoModal({ type: 'warning', actionModal: () => dispatch(deleteProfileThunk(id)), title: '¿Estas seguro de borrar este perfil?', message: 'Se eliminará permanentemente toda la información de este perfil, ¿Deseas continuar?' }));
    }

    const avatar = useMemo(() => getAvatar(profile.name), [ profile.name ]);

    const selectProfile = () => {
        if(profile.is_logged){
            dispatch(showInfoModal({ type: 'error', title: 'Perfil actualmente en uso', message: 'Por seguridad, un perfil sólo puede tener una sesión iniciada a la vez. ¡Crea uno nuevo!' }))
        } else dispatch(selectProfileThunk(profile));
    }

    return (
        <div className="profile-container">
            <div className="profile">
                <div className="img">
                    <img src={avatar} alt="" />
                </div>
                <button className="name" onClick={() => selectProfile()}>
                    {profile.name}
                </button>
                <button className="options-profile" onClick={() => setShowOptions(!showOptions)}>
                    <i className="fas fa-ellipsis-v"></i>
                </button>
                <div className="options-profile-list" style={{transform: showOptions ? 'scale(1)' : 'scale(0)'}}>
                    <button onClick={() => handleDelete(profile.id)}>
                        Eliminar perfil
                    </button>
                </div>
                { showOptions &&
                    <div className="overlay" onClick={() => setShowOptions(false)}></div>
                }
            </div>
        </div>
    );
};
