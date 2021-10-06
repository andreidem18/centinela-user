import React, { useState } from 'react';
import { MainLayout } from 'UI/components';

import "./styles.scss";

export const VehicleForm = ({ selected, comeBack }) => {

    const [ property1, setProperty1 ] = useState(selected?.property1 || '');
    const [ property2, setProperty2 ] = useState(selected?.property2 || '');
    const [ property3, setProperty3 ] = useState(selected?.property3 || '');
    const [ property4, setProperty4 ] = useState(selected?.property4 || '');

    return (
        <MainLayout title='Vehiculos' comeback={comeBack} bottomMenu={false}>
            <div className="vehicle-form">
                <h3 className='vehicle-name'>
                    {((selected.property1 || '') + ' ' + (selected.property2 || ''))}
                </h3>
                <form action="">
                    <label>
                        Nombre
                        <input 
                            label='nombre' 
                            value={property1}
                            onChange={e => setProperty1(e.target.value)}
                            required 
                        />
                    </label>
                    <label>
                        Nombre
                        <input 
                            label='nombre' 
                            value={property2}
                            onChange={e => setProperty2(e.target.value)}
                            required 
                        />
                    </label>
                    <label>
                        Nombre
                        <input 
                            label='nombre' 
                            value={property3}
                            onChange={e => setProperty3(e.target.value)}
                            required 
                        />
                    </label>
                    <label>
                        Nombre
                        <input 
                            label='nombre' 
                            value={property4}
                            onChange={e => setProperty4(e.target.value)}
                            required 
                        />
                    </label>
                    <button className='btn-primary'>Guardar cambios</button>
                    <button className='btn-secondary' type='button'>Asignar auto</button>
                </form>
            </div>
        </MainLayout>
    );
};
