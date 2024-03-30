import React from 'react';
import './AnimalDesign.css';
import PropTypes from 'prop-types';
import AnimalDetails from './AnimalDetails';

function AnimalDesign({diet,name,size}) {
  return (
    <div>
        <h3>{name}</h3>
        {/* <h5>{diet.join(', ')}</h5> */}
        <AnimalDetails diet={diet} />
        <h5>{size}</h5>
    </div>
  )
}
AnimalDesign.propTypes = {
    diet: PropTypes.arrayOf(PropTypes.string).isRequired,
    name: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    }
    

export default AnimalDesign