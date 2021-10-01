import React, { useState } from 'react';
import { vehiculo } from 'UI/assets';
import { ChatButton, HomeLink, StandarContainer } from 'UI/components';
import { VehicleForm } from './components';

import "./styles.scss";

export const Vehicles = () => {

    const [ selected, setSelected ] = useState(null);

    return (
        <section className="vehicles">
            <StandarContainer background>
                { 
                    selected ? (
                        <VehicleForm selected={selected} comeBack={() => setSelected(null)} />
                    ) : (
                        <>
                            <HomeLink />
                            <h3 className='vehicles-title'>Vehiculos</h3>
                            <div className="card">
                                <div className='vehicle-icon'>
                                    <img src={vehiculo} alt="Icono Vehículo" />
                                </div>
                                <div className="add-vehicle-button">
                                    <button onClick={() => setSelected({})}>   
                                        <span className='text'>Agregar vehículo <i className="fas fa-plus"></i></span>
                                    </button>   
                                </div>
                                {
                                    fakeVehicles.map(vehicle => (
                                        <div className='vehicle' key={vehicle.id}>
                                            <button 
                                                className='vehicle-name' 
                                                onClick={() => setSelected(vehicle)}
                                            >
                                                {vehicle.property1} {vehicle.property2}</button>
                                            <button className='trash' onClick={() => console.log('clic a trash')}><i className="far fa-trash-alt"></i></button>
                                        </div>
                                    ))
                                }
                            </div>
                            <ChatButton />
                        </>
                    )
                }
            </StandarContainer>
        </section>
    );
};


const fakeVehicles = [
    {
        id: 1,
        property1: 'Nissan',
        property2: 'Sentra',
        property3: 'LXD 2034',
        property4: 'Perla'
    },
    {
        id: 2,
        property1: 'Ford',
        property2: 'Fusion',
        property3: 'LXD 2034',
        property4: 'Perla'
    }
]
