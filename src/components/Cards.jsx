import React from 'react'
import "../stylesCard.css";

function Cards({id, img, name, weight}) {
 
 
  return (
    
      <div className="shadow  border border-dark mr-4 card  d-flex justify-content-center align-items-center h-100 text-capitalize " >
          <img src={img} alt={name} className=" card-img-top imgP shadow-sm "/>
          <div className=' card-body text-center'>
              <h5 className=" text fs-6 border-bottom border-grey pb-1">{name}</h5>
              <p className='card-text text fs-6'>Peso: {weight} kg</p>
          </div>
          <div className="card-footer  text-center ">
              <small className="text-muted ">Pokedex #{id}</small>
          </div>
      </div>
    
  )
}

export default Cards


/* <div key={pokemon.id} className="card " >
                      <img src={pokemon.sprites.front_default
  } alt={pokemon.name} className="card-img-top"/>
                      <div className='card-body'>
                        <h5 className="card-title">{pokemon.name}</h5>
                        <p className="card-text"> descripcion</p>
                      </div>
                      <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
    </div>
                  </div> */