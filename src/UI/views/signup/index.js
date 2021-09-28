import React, { useState, useEffect } from 'react';
import { logo } from 'UI/assets';
import { NextForm } from './components';
import { InputLight } from 'UI/components';
import { useHistory, Link } from 'react-router-dom';
import { useApp, useResidence } from 'hooks';

import "./styles.scss";
import { Typeahead } from 'react-bootstrap-typeahead';
import { Background } from 'UI/components/background';

export const SignUp = () => {

    const { residences, getResidences } = useResidence();

    const [ dataForm, setDataForm ] = useState(null);
    const [ residenceSelected, setResidenceSelected ] = useState([]);
    const { showInfoModal } = useApp();


    useEffect(() => getResidences(), [getResidences]);

    const handleSubmit = e => {
        e.preventDefault();
        // Lógica para traer los id's de los valores de las nomenclaturas (typeaheads)
        const values = [];
        for(let i = 3; i < e.target.length; i++){ // i = 3 porque es donde empiezan los typeaheads de los valores
            if(e.target[i].value){ // Para evitar que itere sobre algo que no sea un input
                residenceSelected[0].nomenclature.forEach(n => { // Se itera sobre cada una de las nomenclaturas para buscar la que coincida con el valor del typeahead, y así guardar el id
                    const value = n.values.find(v => v.value === e.target[i].value );
                    if(value) values.push({ nomenclatures_values_id: value.id })
                })
            }
        }
        // Validar que los typeaheads no estén vacíos, ya que no se les puede poner required
        if(residenceSelected.length === 0 || values.length !== residenceSelected[0].nomenclature.length){
            showInfoModal({ type: 'error', autoClose: true, showingTime: 3000, message: 'Por favor, llena todos los datos', title: 'Error de validación' });
            return;
        } 

        const data = { 
            email: e.target[0].value, 
            data_residential: {
                residential_unit: residenceSelected[0].id,
                nomenclature_values: values
            }
        }
        setDataForm(data);
    }

    const history = useHistory();


    return (
        <Background>
            <section className="signup">
                <div>
                    <img src={logo} alt="Logo" />
                    <div className="form-container">
                        { dataForm ? <NextForm previusData={dataForm} comeback={() => setDataForm(null)} />
                        : (
                            <form action="" onSubmit={handleSubmit}>
                                <div className="input-container">
                                    <InputLight label="Correo electrónico" required/> 
                                </div>
                                <div className="input-container">
                                    <Typeahead 
                                        id='residences'
                                        className='residences-typeahead'
                                        selected={residenceSelected}
                                        onChange={setResidenceSelected}
                                        labelKey='name'
                                        options={residences} 
                                        placeholder="Unidad residencial"
                                    />
                                </div>
                                { residenceSelected.length > 0 &&
                                    <div className="doble-input-container">
                                        {residenceSelected[0].nomenclature?.map((n, i) => (
                                            <div className="container" key={n.id}>
                                                <Typeahead 
                                                    id='values'
                                                    className='residences-typeahead'
                                                    // selected={valuesSelected[i]}
                                                    // onChange={handleValue}
                                                    labelKey='value'
                                                    options={n.values} 
                                                    placeholder={n.type}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                }
                                <div className="buttons-signup">
                                    <button type="submit" className="button-next">
                                        <span>SIGUIENTE</span>
                                        <div className="inner"></div>
                                    </button>
                                    <button type="button" onClick={() => history.push("/login")}>CANCELAR</button>
                                </div>
                                <span className="login-link">¿Ya tienes una cuenta? <Link to="login">INGRESAR</Link></span>
                            </form>
                        )}
                    </div>
                </div>
            </section>
        </Background>
    );
};
