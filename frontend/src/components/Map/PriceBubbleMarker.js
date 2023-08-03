import React from 'react';
import './PriceBubbleMarker.css';

const PriceBubbleMarker = ({ price }) => {
  return <div className="price-bubble-marker">${price}</div>;
};

export default PriceBubbleMarker;
