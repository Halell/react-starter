import React from 'react';

const XxxPreview = ({ id, color, diameter, height, material, name, price, shape, volume }) => {
  return (
    <div className="vase-preview">
      <h3>{name}</h3>
      <p>ID: {id}</p>
      <p>Color: {color}</p>
      <p>Diameter: {diameter}</p>
      <p>Height: {height}</p>
      <p>Material: {material}</p>
      <p>Price: {price}</p>
      <p>Shape: {shape}</p>
      <p>Volume: {volume}</p>
    </div>
  );
};

export default XxxPreview;
