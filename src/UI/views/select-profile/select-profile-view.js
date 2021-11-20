import { escudoAncho } from 'UI/assets';
import { Profile } from './components';

import './styles.scss';

export const SelectProfileView = ({ profiles, handleAddProfile, doLogout, deleteProfile, selectProfile }) => {


    return (
        <>
            <div className="select-profile-content">
                <img src={escudoAncho} alt='Escudo' className="logo" />
                {profiles.map(profile => (
                    <Profile profile={profile} key={profile.id} deleteProfile={deleteProfile} selectProfile={selectProfile} />
                ))}
                <div className="options">
                    <button className="button-add" onClick={handleAddProfile}>
                        <i className="fas fa-plus"></i>
                        <span>Añadir perfil</span>
                    </button>
                </div>
            </div>
            <div className="logout-button">
                <button onClick={() => doLogout()}>Cerrar sesión</button>
            </div>
        </>
    );
};
