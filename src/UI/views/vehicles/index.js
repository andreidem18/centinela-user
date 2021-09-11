import React, { useState } from 'react';
import { iconoChat, vehiculo } from 'UI/assets';
import { NavBar, LateralMenu, AlternativeBackground } from 'UI/components';
import { VehicleForm } from './components';

import "./styles.scss";

export const Vehicles = () => {

    const [ selected, setSelected ] = useState(fakeVehicles[0]);

    return (
        <section className="vehicles">
            <AlternativeBackground>
                <NavBar />
                { 
                    selected ? (
                        <VehicleForm selected={selected} comeBack={() => setSelected(null)} />
                    ) : (
                        <>
                            <h3 className='vehicles-title'>Vehiculos</h3>
                            <div className="card">
                                <div className='vehicle-icon'>
                                    <img src={vehiculo} alt="Icono Vehículo" />
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
                                <div className="add-vehicle-button">
                                    <button onClick={() => setSelected({})}>
                                        <span className='plus-icon'><i className="fas fa-plus"></i></span>    
                                        <span className='text'>Agregar vehículo</span>
                                    </button>   
                                </div>
                            </div>
                            <button className="chat-button">
                                <img src={iconoChat} alt="" />
                            </button>
                        </>
                    )
                }
                <LateralMenu  selected="" />
            </AlternativeBackground>
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
