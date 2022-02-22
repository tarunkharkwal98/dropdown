import React from 'react';
import './style.css'
const DropDownV2 = ({ items }) => {
  return (
    <select className="select-container">
      {items.map(item => (
        <option className='option-container' value={item.id}>{item.value}</option>
      ))}
    </select>
  );
};

export default DropDownV2;
