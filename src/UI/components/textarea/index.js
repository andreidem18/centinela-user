import React from 'react';

import './styles.scss';

export const Textarea = ({ className, value, onChange, name, rows, cols, placeholder, required = false, label, id, disabled, ref, onBlur, onFocus }) => {
    return (
      <div className={`textarea-box ${className}`}>
            <textarea ref={ref} id={id} name={name} value={value} rows={rows} cols={cols} onChange={onChange} onBlur={onBlur} onFocus={onFocus} placeholder={placeholder} required={required} disabled={disabled}  />
            
            { label && <span>{label}</span> }  
        </div>
    );
  };