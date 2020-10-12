import React, { useState } from 'react';

const withDelete = Component => {
  return props => {
    const [isHovered, setIsHovered] = useState(false);
    return (
      <div
        className='flex-container'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Component {...props} />
        {isHovered ? (
          <i
            className='fas fa-times'
            onClick={() => props.deleteMethod(props.id)}
          ></i>
        ) : (
          <></>
        )}
      </div>
    );
  };
};

export default withDelete;
