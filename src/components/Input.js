import React, { useState } from 'react';

const onKeyDown = (event, setValue, props) => {
  const value = event.target.value;
  if (value !== '' && event.key === 'Enter') {
    setValue(props.value);
    props.onEnter(value);
  }
};

const Input = props => {
  const [value, setValue] = useState(props.value);
  return (
    <input
      className={props.className}
      type='text'
      value={value}
      onChange={e => setValue(e.target.value)}
      onKeyDown={e => onKeyDown(e, setValue, props)}
      autoFocus={props.autoFocus}
    />
  );
};

export default Input;
