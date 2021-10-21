import React, { useState } from 'react';
import { VehicleForm } from './components';

import "./styles.scss";
import { VehiclesView } from './vehicles-view';

export const Vehicles = () => {

    const [ selected, setSelected ] = useState(null);

    return (
        <section className="vehicles">
                { 
                    selected ? (
                        <VehicleForm selected={selected} comeBack={() => setSelected(null)} />
                    ) : (
                        <VehiclesView vehicles={fakeVehicles} setSelected={setSelected} />
                    )
                }
        </section>
    );
};


const fakeVehicles = [
    {
        id: 1,
        brand: 'Nissan',
        model: 'Sentra',
        license: 'LXD 2034',
        color: 'Perla'
    },
    {
        id: 2,
        brand: 'Ford',
        model: 'Fusion',
        license: 'LXD 2034',
        color: 'Perla'
    }
]
