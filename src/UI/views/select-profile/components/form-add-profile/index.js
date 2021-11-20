import React from 'react';
import { Input, InputLight } from 'UI/components';

import './styles.scss';


export const FormAddProfile = ({isOpen, handleClose, newProfile, setNewProfile, submit}) => {

    const deletePhone = i => {
        const profileCopy = { ...newProfile }
        profileCopy.phones.splice(i, 1);
        setNewProfile(profileCopy);
    } 

    const editPhone = (index, key, e) => {
        const profileCopy = { ...newProfile }
        profileCopy.phones[index][key] = e.target.value;
        setNewProfile(profileCopy);
    }

    const addNewPhone = () => {
        const profileCopy = { ...newProfile }
        profileCopy.phones.push({type: '', phone: ''});
        setNewProfile(profileCopy);
    }
    

    return (
        <>
            <div className="form-add-profile" style={{bottom: isOpen ? '-20px' : '-100%'}}>
                <form action="" onSubmit={submit}>
                    <h3>Nuevo perfil</h3>
                    <InputLight 
                        label='nombre' 
                        className="input-name"
                        value={newProfile.name}
                        onChange={e => setNewProfile(profile => ({ ...profile, name: e.target.value}))}
                        required
                     />
                    {
                        newProfile.phones.map((phone, i) => (
                            <div className="phone-container" key={i}>
                                <div className="phone-header">
                                    <span className="phones-counter">Teléfono {i+1}</span>
                                    {newProfile.phones.length > 1 &&
                                        <button 
                                            className="delete-phone" 
                                            type="button"
                                            onClick={() => deletePhone(i)}
                                        >
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    }
                                </div>
                                <Input 
                                    className='light' 
                                    label='Número de teléfono' 
                                    onChange={e => editPhone(i, 'phone', e)} 
                                    value={phone.phone}
                                    required
                                />
                                <Input 
                                    className='light' 
                                    label='Tipo (celular, casa...)' 
                                    onChange={e => editPhone(i, 'type', e)} 
                                    value={phone.type}
                                    required
                                />
                            </div>
                        ))
                    }
                    <button 
                        className="add-phone" 
                        onClick={() => addNewPhone()}
                        type="button"
                    >
                        <i className="fas fa-plus"></i>
                    </button>
                    <button className="save-button">
                        Guardar
                    </button>
                </form>
            </div>
            <div className="overlay" onClick={handleClose} style={{display: isOpen ? 'block' : 'none'}}></div>
        </>
    );
};

