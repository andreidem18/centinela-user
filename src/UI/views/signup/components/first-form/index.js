import React from 'react';
import { InputLight } from 'UI/components';
import { Typeahead } from 'react-bootstrap-typeahead';
import { useHistory } from 'react-router'

import "./styles.scss";
import { Link } from 'react-router-dom';

export const FirstForm = ({ 
    email,
    setEmail,
    handleSubmit, 
    residences, 
    residenceSelected, 
    setResidenceSelected, 
    nomenclatures, 
    nomenclatureSelected, 
    setNomenclatureSelected,
    valueSelected,
    setValueSelected
}) => {

    const history = useHistory();

    return (
        <form action="" onSubmit={handleSubmit}>
            <div className="input-container">
                <InputLight label="Correo electrónico" value={email} onChange={e => setEmail(e.target.value)} required/> 
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
    );
};
