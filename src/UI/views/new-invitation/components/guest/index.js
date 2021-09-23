import React, { useState, useMemo } from 'react';
import { getAvatar } from 'utils';
import { useGuest } from 'hooks';

import './styles.scss';

export const Guest = ({guest, select}) => {

    const [ showOptions, setShowOptions ] = useState(false);
    const { deleteGuest } = useGuest();
    const avatar = useMemo(() => getAvatar(guest.first_name, guest.last_name), [guest]);

    return (
        <div className="guest-container">
            <div className="guest">

                <button className="guest-info" onClick={() => select(guest)}>
                    <div className="img">
                        <img src={avatar} alt="Avatar" />
                    </div>
                    <span>{guest.first_name} {guest.last_name}</span>
                </button>
                <button className="options-guest" onClick={() => setShowOptions(!showOptions)}>
                    <i className="fas fa-ellipsis-v"></i>
                </button>


                <div className="options-guest-list" style={{transform: showOptions ? 'scale(1)' : 'scale(0)'}}>
                    <button onClick={() => deleteGuest(guest.id)}>
                        Eliminar de invitados guardados
                    </button>
                </div>


                { showOptions &&
                    <div className="overlay" onClick={() => setShowOptions(false)}></div>
                }
            </div>
        </div>
    );
};
