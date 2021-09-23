import React, { useState } from 'react';
import "./styles.scss";

export const InputLight = ({ className, value, onChange, type, name, placeholder, required = false, classNameContainerInput, label, classNameLabel, id, disabled, ref, onBlur, onFocus, onKeyDown }) => {
    const [ showPassword, setShowPassword ] = useState(false);
    
    return (
        <div className={`input-box-light ${type === 'password' ? 'password' : ''} ${className}`}>
            <input ref={ref} id={id} name={name} value={value} onChange={onChange} onBlur={onBlur} onFocus={onFocus} type={showPassword ? "text" : type} placeholder={placeholder} required={required} disabled={disabled} onKeyDown={onKeyDown}  />
            
            { label && <label>{label}</label> }      
            
            { type === 'password' && 
                <button onClick={() => setShowPassword(!showPassword)} className="show-password" type="button">
                    {showPassword ? <i className="fas fa-eye"></i> : <i className="fas fa-eye-slash"></i>}
                </button> 
            }
        </div>
    );
  };