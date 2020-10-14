import React, { useState } from 'react';

import Input from './Input.js';

const TodoHeader = props => {
  const [isEditing, setIsEditing] = useState(false);
  const updateName = name => {
    setIsEditing(false);
    props.updateName(name);
  };
  const header = (
    <div className='todo-name' onClick={() => setIsEditing(true)}>
      {props.value}
    </div>
  );
  const inputHeader = (
    <Input
      className='todo-name-edit-mode'
      value={props.value}
      onEnter={updateName}
      autoFocus={true}
    />
  );
  return isEditing ? inputHeader : header;
};

export default TodoHeader;
