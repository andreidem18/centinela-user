import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { createUserThunk, getApartmentsThunk, getResidencesThunk, removeApartments, showInfoModal } from 'redux/actions';
import { FirstForm, NextForm } from './components';
import SignupView from './signup-view';

export const SignUp = () => {

    const [ form, setForm ] = useState(1);
    const [ residenceSelected, setResidenceSelected ] = useState([]);
    const [ apartmentSelected, setApartmentSelected ] = useState([]);
    const [ email, setEmail ] = useState('');
    const dispatch = useDispatch();
    const residences = useSelector(state => state.residences.residences);
    const apartments = useSelector(state => state.residences.apartments);

    useEffect(() => dispatch(getResidencesThunk()), [ dispatch ]);


    useEffect(() => {
        if(residenceSelected.length) dispatch(getApartmentsThunk(residenceSelected[0].id));
        else dispatch(removeApartments());
    }, [ dispatch, residenceSelected ]);


    // Para que se reinicien los valores cada vez que escriban otra residencia o nomenclatura
    useEffect(() => {
        if(residenceSelected.length === 0) setApartmentSelected([]);
    }, [ residenceSelected ]);



    const handleFirstSubmit = e => {
        e.preventDefault();
        // Validar que los typeaheads no estén vacíos, ya que no se les puede poner required
        if(!apartmentSelected.length){
            return dispatch(showInfoModal({ 
                type: 'error', 
                autoClose: false, 
                title: 'Error de validación',
                message: 'Tienes algunos campos vacíos o con valores inválidos. Recuerda que debes pulsar en las opciones de autocompletado para que queden seleccionadas'
            }));
        } 
        setForm(2);
    }
    

    const handleSecondSubmit = (e, passwordStrength, password) => {
        e.preventDefault();
        if(passwordStrength.number < 3) return dispatch(showInfoModal({ type: 'error', message: 'Una buena contraseña debería tener al menos 8 caracteres, una letra mayúscula, una letra minúscula y un número', title: 'Error de validación' }));
        if(e.target[3].value !== password){ 
            return dispatch(showInfoModal({ type: 'error', autoClose: true, showingTime: 2500, message: 'Las contraseñas no coinciden', title: 'Error de validación' }));
        };
        const data = {
            name: e.target[0].value,
            email: email.toLowerCase(),
            residence: residenceSelected[0].id,
            apartment: apartmentSelected[0].id,
            role: 1,         
            password,
            phones: [
                {
                    phone: e.target[5].value,
                    type: 'celular'
                }
            ]
        }
        dispatch(createUserThunk(data));
    }


    const getForm = () => {
        if(form === 1) {
            return  <FirstForm 
                        email={email}
                        setEmail={setEmail}
                        handleSubmit={handleFirstSubmit}
                        residences={residences}
                        residenceSelected={residenceSelected}
                        setResidenceSelected={setResidenceSelected}
                        apartments={apartments}
                        apartmentSelected={apartmentSelected} 
                        setApartmentSelected={setApartmentSelected}
                    />
        }
        else return <NextForm handleSubmit={handleSecondSubmit} comeback={() => setForm(1)} />
    }

    return (
        <SignupView getForm={getForm} />
    );
};
