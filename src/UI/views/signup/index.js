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

    const { residences, nomenclatures, getResidences, getNomenclatures, clearNomenclatures } = useResidence();

    const [ dataForm, setDataForm ] = useState(null);
    const [ residenceSelected, setResidenceSelected ] = useState([]);
    const [ nomenclatureSelected, setNomenclatureSelected ] = useState([]);
    const [ valueSelected, setValueSelected ] = useState([]);
    const { showInfoModal } = useApp();

    useEffect(() => getResidences(), [ getResidences ]);


    useEffect(() => {
        if(residenceSelected.length) getNomenclatures(residenceSelected[0].id);
        else clearNomenclatures();
    }, [ residenceSelected, getNomenclatures, clearNomenclatures ]);


    // Para que se reinicien los valores cada vez que escriban otra residencia o nomenclatura
    useEffect(() => {
        if(residenceSelected.length === 0) setNomenclatureSelected([]);
    }, [ residenceSelected ]);
    useEffect(() => {
        if(nomenclatureSelected.length === 0) setValueSelected([]); 
    }, [ nomenclatureSelected ])



    const handleSubmit = e => {
        e.preventDefault();
        // Validar que los typeaheads no estén vacíos, ya que no se les puede poner required
        if(!valueSelected.length){
            return showInfoModal({ type: 'error', autoClose: false, message: 'Tienes algunos campos vacíos o con valores inválidos. Recuerda que debes pulsar en las opciones de autocompletado para que queden seleccionadas', title: 'Error de validación' });
        } 

        const data = { 
            email: e.target[0].value, 
            data_residential: {
                residential_unit: residenceSelected[0].id,
                nomenclature_values: [ { nomenclatures_values_id: { id: valueSelected[0].id, status: 1 } } ]
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
                                {
                                    nomenclatures.length > 0 &&
                                        <div className="input-container">
                                            <Typeahead 
                                                id='residences'
                                                className='residences-typeahead'
                                                selected={nomenclatureSelected}
                                                onChange={setNomenclatureSelected}
                                                labelKey='value'
                                                options={nomenclatures} 
                                                placeholder={nomenclatures[0].type}
                                            />
                                        </div>
                                }
                                {
                                    nomenclatureSelected.length > 0 &&
                                        <div className="input-container">
                                            <Typeahead 
                                                id='residences'
                                                className='residences-typeahead'
                                                selected={valueSelected}
                                                onChange={setValueSelected}
                                                labelKey='value'
                                                options={nomenclatureSelected[0].values} 
                                                placeholder={nomenclatureSelected[0].values[0].type}
                                            />
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
