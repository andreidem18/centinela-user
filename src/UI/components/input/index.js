import React from "react";
import "./styles.scss";

export const Input = ({ className, value, onChange, type, name, placeholder, required = false, label, id, disabled, ref, onBlur, onFocus }) => {
  return (
    <div className={`input-box ${className}`}>
      <input ref={ref} id={id} name={name} value={value} onChange={onChange} onBlur={onBlur} onFocus={onFocus} type={type} placeholder={placeholder} required={required} disabled={disabled}  />
      {
        label &&
          <span>{label}</span>
      }      
    </div>
  );
};

