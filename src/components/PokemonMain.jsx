import React from 'react'
import { useState, useEffect } from "react";
import Card from './Card';

function PokemonMain({peso, name, img, numPokedex}) {
   
    const [pokemonMain, setPokemonMain] = useState([])
   

useEffect(()=>{
    
    getPokemonMain()
}, [] )

const getPokemonMain = async () => {
  const dato = await fetch(`https://pokeapi.co/api/v2/pokemon/1`)
  const datoPokemonMain = await dato.json();
  setPokemonMain(datoPokemonMain)
}

  return (
    <div className='border- mx-auto  col-4 col-lg-3 mt-2 '>
        <Card  peso={peso} name={name} img={img.front_default} numPokedex={numPokedex} />
    </div>
  )
}

export default PokemonMain