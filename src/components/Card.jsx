import React from 'react'
import "../stylesCard.css";

function Card({img, name, peso, numPokedex}) {
    
  return (
    
  
    <div className="rounded-5 shadow  border border-dark mr-4 card  d-flex justify-content-center align-items-center h-100 text-capitalize " >
          <img src={img} alt={name} className=" card-img-top imgP shadow-sm  rounded-5"/>
          <div className=' card-body text fs-6 text-center mw-100'>
              <h5 className=" text fs-5 border-bottom border-grey pb-1">{name}</h5>
              <p className='card-text'>Peso: {peso} kg</p>
          </div>
          <div className="card-footer  text-center ">
              <small className="text-muted ">Pokedex #{numPokedex}</small>
          </div>
      </div>
    
  

  )
}

export default Card