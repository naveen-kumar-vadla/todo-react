import React from 'react';

const Input = ({ className,value, onChange, onKeyDown,placeholder,autoFocus }) => {
  return (
    <input
      className={className}
      type='text'
      value={value}
      onChange={event => onChange(event.target.value)}
      onKeyDown={event => onKeyDown(event.key, event.target.value)}
      placeholder={placeholder}
      autoFocus={autoFocus}
    ></input>
  );
};

export default Input;
