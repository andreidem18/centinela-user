import React from 'react';
import { MainLayout, ChatButton } from 'UI/components';

export const VehiclesView = ({ vehicles, setSelected}) => {
    return (
        <MainLayout title='Vehículos'>
            <div className="add-vehicle-button">
                <button onClick={() => setSelected({})}>   
                    <span className='text'>Agregar vehículo <i className="fas fa-plus"></i></span>
                </button>   
            </div>
            {
                vehicles.map(vehicle => (
                    <div className='vehicle' key={vehicle.id}>
                        <button 
                            className='vehicle-name' 
                            onClick={() => setSelected(vehicle)}
                        >
                            {vehicle.brand} {vehicle.model}</button>
                        <button className='trash' onClick={() => console.log('clic a trash')}><i className="far fa-trash-alt"></i></button>
                    </div>
                ))
            }
            <ChatButton />
        </MainLayout>
    );
};
