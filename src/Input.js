import React from 'react';

const Input = props => {
  return (
    <input
      className={props.className}
      type='text'
      value={props.value}
      onChange={event => props.onChange(event.target.value)}
      onKeyDown={event => props.onKeyDown(event.key, event.target.value)}
      placeholder={props.placeholder}
      autoFocus={props.autoFocus}
    ></input>
  );
};

export default Input;
