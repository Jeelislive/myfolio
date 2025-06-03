// src/components/OnekoFollower.js
import React from 'react';
import '../style.css'; // Import your styles if needed
import oneko from '../Assets/oneko-element.js' // Import the oneko-element


const OnekoFollower = () => {


  return (
    <div className='onekocontainer'>
      <oneko-element size="medium" img-src="Assets/oneko.gif"></oneko-element>
    </div>
  );
};

export default OnekoFollower;