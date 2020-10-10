import React from 'react';

const Input = ({ value, onChange, onKeyDown }) => {
  return (
    <input
      type='text'
      value={value}
      onChange={event => onChange(event.target.value)}
      onKeyDown={event => onKeyDown(event.key, event.target.value)}
    ></input>
  );
};

export default Input;
