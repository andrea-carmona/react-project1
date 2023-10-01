import React from 'react';

// Avatar Component
function Avatar({ imageSrc, description }) {
  
  return (
    <img src={imageSrc} alt={description} width="100px" height="100px" />
  );
}

export default Avatar;
