import React from 'react';
import PropTypes from 'prop-types';

function convertFood(food){
    switch(food){
        case 'insects':
            return '🐞'
    
        case 'meat':
            return '🥩'

        case 'plant':
            default:
            return '☘'
    }
}

function AnimalDetails({diet}) {
  return (
    <div className="details">
        <h4>Details:</h4>
        <div>
           Diet: {diet.map(food =>convertFood(food)).join(' ')}
        </div>
    </div>
  )
}
AnimalDetails.propTypes ={
    diet: PropTypes.arrayOf(PropTypes.string).isRequired
}



export default AnimalDetails