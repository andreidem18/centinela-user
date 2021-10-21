import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { createUserThunk, getNomenclaturesThunk, getResidencesThunk, removeNomenclatures, showInfoModal } from 'redux/actions';
import { FirstForm, NextForm } from './components';
import SignupView from './signup-view';

export const SignUp = () => {

    const [ form, setForm ] = useState(1);
    const [ residenceSelected, setResidenceSelected ] = useState([]);
    const [ nomenclatureSelected, setNomenclatureSelected ] = useState([]);
    const [ valueSelected, setValueSelected ] = useState([]);
    const [ email, setEmail ] = useState('');
    const dispatch = useDispatch();
    const residences = useSelector(state => state.residences.residences);
    const nomenclatures = useSelector(state => state.residences.nomenclatures);

    useEffect(() => dispatch(getResidencesThunk()), [ dispatch ]);


    useEffect(() => {
        if(residenceSelected.length) dispatch(getNomenclaturesThunk(residenceSelected[0].id));
        else dispatch(removeNomenclatures());
    }, [ dispatch, residenceSelected ]);


    // Para que se reinicien los valores cada vez que escriban otra residencia o nomenclatura
    useEffect(() => {
        if(residenceSelected.length === 0) setNomenclatureSelected([]);
    }, [ residenceSelected ]);
    useEffect(() => {
        if(nomenclatureSelected.length === 0) setValueSelected([]); 
    }, [ nomenclatureSelected ])



    const handleFirstSubmit = e => {
        e.preventDefault();
        // Validar que los typeaheads no estén vacíos, ya que no se les puede poner required
        if(!valueSelected.length){
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
        if(e.target[4].value !== password){ 
            return dispatch(showInfoModal({ type: 'error', autoClose: true, showingTime: 2500, message: 'Las contraseñas no coinciden', title: 'Error de validación' }));
        };
        const data = { 
            first_name: e.target[0].value, 
            last_name: e.target[1].value, 
            password,
            email: email,
            status: 'draft',
            role: 4,
            data_residential: {
                residential_unit: residenceSelected[0].id,
                nomenclature_values: [ { nomenclatures_values_id: { id: valueSelected[0].id, status: 1 } } ]
            }
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
                        nomenclatures={nomenclatures}
                        nomenclatureSelected={nomenclatureSelected}
                        setNomenclatureSelected={setNomenclatureSelected}
                        valueSelected={valueSelected}
                        setValueSelected={setValueSelected}
                    />
        }
        else return <NextForm handleSubmit={handleSecondSubmit} comeback={() => setForm(1)} />
    }

    return (
        <SignupView getForm={getForm} />
    );
};
