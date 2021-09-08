import React, { useReducer } from 'react';
import { Input, InputLight } from 'UI/components';
import { useProfile } from 'hooks';

import './styles.scss';


export const FormAddProfile = ({isOpen, handleClose}) => {

    const [state, dispatch] = useReducer(formAddProfileReducer, initialState);
    const { createProfile } = useProfile();


    const handleChangePhone = (property, index, e) => {
        dispatch({
            type: 'changePhone', 
            payload: {property, index, value: e.target.value}
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        createProfile(state);
        dispatch({type: 'resetState'});
        handleClose();
    }

    return (
        <>
            <div className="form-add-profile" style={{bottom: isOpen ? '-20px' : '-100%'}}>
                <form action="" onSubmit={handleSubmit}>
                    <h3>Nuevo perfil</h3>
                    <InputLight 
                        label='nombre' 
                        className="input-name"
                        value={state.name}
                        onChange={e => dispatch({type: 'changeName', payload: e.target.value})}
                        required
                     />
                    {
                        state.phones.map((phone, i) => (
                            <div className="phone-container" key={phone.id}>
                                <div className="phone-header">
                                    <span className="phones-counter">Teléfono {i+1}</span>
                                    {state.phones.length > 1 &&
                                        <button 
                                            className="delete-phone" 
                                            type="button"
                                            onClick={() => dispatch({type: 'deletePhone', payload: phone.id})}
                                        >
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    }
                                </div>
                                <Input 
                                    className='light' 
                                    label='Dueño' 
                                    onChange={e => handleChangePhone('owner', i, e)} 
                                    value={state.phones[i].owner}
                                    required
                                />
                                <Input 
                                    className='light' 
                                    label='Número de teléfono' 
                                    onChange={e => handleChangePhone('phone', i, e)} 
                                    value={state.phones[i].phone}
                                    required
                                />
                                <Input 
                                    className='light' 
                                    label='Tipo (movil, casa...)' 
                                    onChange={e => handleChangePhone('type', i, e)} 
                                    value={state.phones[i].type}
                                    required
                                />
                            </div>
                        ))
                    }
                    <button 
                        className="add-phone" 
                        onClick={() => dispatch({type: 'addPhone'})}
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


const initialState = {name: '', phones: [{id: 1, owner: '', phone: '', type: ''}]};

const formAddProfileReducer = (state, action) => {
const phones = state.phones
  switch (action.type) {
    case 'changeName':
        return {...state, name: action.payload}
    case 'changePhone':
        const index = action.payload.index
        const property = action.payload.property
        phones[index][property] = action.payload.value
        return {...state, phones };
    case 'addPhone':
        const lastId = phones[phones.length-1].id
        return{ ...state, phones: [...phones, {id: lastId+1, owner: '', phone: '', type: ''}]}
    case 'deletePhone':
        return {...state, phones: phones.filter(p => p.id !== action.payload)}
    case 'resetState':
        return initialState;
    default:
      return state
  }
}
