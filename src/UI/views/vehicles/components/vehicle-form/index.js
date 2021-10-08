import React, { useState } from 'react';
import { MainLayout } from 'UI/components';

import "./styles.scss";

export const VehicleForm = ({ selected, comeBack }) => {

    const [ brand, setBrand ] = useState(selected?.brand || '');
    const [ model, setModel ] = useState(selected?.model || '');
    const [ license, setLicense ] = useState(selected?.license || '');
    const [ color, setColor ] = useState(selected?.color || '');

    return (
        <MainLayout title='Vehiculos' comeback={comeBack} bottomMenu={false}>
            <div className="vehicle-form">
                <h3 className='vehicle-name'>
                    {((selected.brand || '') + ' ' + (selected.model || ''))}
                </h3>
                <form action="">
                    <label>
                        Marca
                        <input 
                            value={brand}
                            onChange={e => setBrand(e.target.value)}
                        />
                    </label>
                    <label>
                        Modelo
                        <input  
                            value={model}
                            onChange={e => setModel(e.target.value)}
                        />
                    </label>
                    <label>
                        Placas
                        <input 
                            value={license}
                            onChange={e => setLicense(e.target.value)}
                        />
                    </label>
                    <label>
                        Nombre
                        <input 
                            label='nombre' 
                            value={color}
                            onChange={e => setColor(e.target.value)}
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
