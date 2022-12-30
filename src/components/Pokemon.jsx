import React, {useEffect}  from 'react'
import { useState } from 'react'
import Cards from './Cards';




function Pokemon() {


    const [pokemons, setPokemon] = useState([])

    useEffect(()=>{
       const info = [];
       const infoPokemon = async () => {
        for (let i = 1; i <100; i++){
             const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
           const infoPokemons = await data.json()            
             info.push(infoPokemons)
             setPokemon(info)
            }
          }     
         
               
         
infoPokemon();
    }, [])

  return (

        <div className = "d-flex justify-content-center align-items-center">
          <div className='row'>
            {
               pokemons.map(pokemon => {
                 return (
                     <div  className='mx-auto  col-4 col-lg-2 mt-2 ' key={pokemon.id}>
                       <Cards id={pokemon.id} img={pokemon.sprites.front_default} name={pokemon.name} weight={pokemon.weight} />
                     </div>
                 )
             })
            }
            
          </div>
        </div>
  )
}

export default Pokemon









