import React from 'react';
import "./styles.scss";

export const Searchbox = ({onChange}) => {
    return (
        <div className="searchbox">
            <input type="text" placeholder="Buscar..." onChange={onChange}/>
            <button><i className="fas fa-search"></i></button>
        </div>
    );
};
