import React, { useState } from 'react';
import { useProfile } from 'hooks';

import './styles.scss';

export const Profile = ({profile}) => {

    const [ showOptions, setShowOptions ] = useState(false);
    const { deleteProfile, selectProfile } = useProfile();

    const handleDelete = id => {
        setShowOptions(false);
        deleteProfile(id);
    }

    const avatarBackground = colors[Math.floor(Math.random()*4)];

    return (
        <div className="profile-container">
            <div className="profile">
                <div className="img">
                    <img src={`https://ui-avatars.com/api/?background=${avatarBackground}&name=${profile.name}&color=fff`} alt="" />
                </div>
                <button className="name" onClick={() => selectProfile(profile.id)}>
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

const colors = ['D5ED8B', 'FFA17A', 'FFCD7E', 'D6E2B3']
