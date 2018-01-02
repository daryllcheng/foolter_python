import React from 'react';

const Nutrients = ({ nutrients }) => (
  <div>
    {
      nutrients.map(nutrient => (
        <span key={ nutrient.nutrient_id }>
          <div className="nutrient">
            <img src={ `assets/icons/${ nutrient.nutrient_id }.png` } alt="nutrientIcon" />
            <div>{ `${ nutrient.gm } ${ nutrient.unit }` }</div>
          </div>
        </span>
      ))
    }
  </div>
)

export default Nutrients;