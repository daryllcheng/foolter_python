import React from 'react';
import Nutrients from './Nutrients';

const Food = ({ food }) => (
  <div className="food">
    <div className="foodName">
      { food.name }
    </div>
    <Nutrients nutrients={ food.nutrients } />
  </div>
)

export default Food;