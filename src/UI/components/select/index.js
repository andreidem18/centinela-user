import React from 'react';
import "./styles.scss";

export const Select = ({array, k, element, id, className, onChange, title, name, value, disabled, required = false}) => {
    return (
        <div className="select">
            <select id={id} className={className} onChange={onChange} name={name} value={value} required={required} disabled={disabled}>
                { title &&
                    <option hidden value="" >{title}</option>}
                {
                    array.map(arr => {
                        return(
                            value ? (
                                <option value={arr[value]} key={arr[k]}>{arr[element]}</option>
                            ) : (
                                <option value={arr[element]} key={arr[k]}>{arr[element]}</option>
                            )
                        )
                    })
                }
            </select>
        </div>
    );
};
