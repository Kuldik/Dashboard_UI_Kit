import React, { useState } from 'react';

export const Switch = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  }

  const switchStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 60,
    height: 30,
    borderRadius: 20,
    backgroundColor: isActive ? '#16DBCC' : '#DFEAF2',
    cursor: 'pointer',
  };

  const ballStyle = {
    width: 25,
    height: 25,
    borderRadius: '50%',
    backgroundColor: '#FFFFFF',
    transition: 'transform 0.2s ease-in-out',
    transform: isActive ? 'translateX(30px)' : 'translateX(3px)',
  };

  return (
    <div style={switchStyle} onClick={handleClick}>
      <div style={ballStyle} />
    </div>
  )
}