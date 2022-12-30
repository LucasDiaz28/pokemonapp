import React, {useState} from 'react'
import PokemonMain from './PokemonMain';
import "../stylesCardMain.css";

function Search() {
    const poke = {
        "sprites": {
            "front_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
    },
        "name":  "Bulbasaur",
        "weight": 90,
        "id": 1
}  

    const [datos, setDatos] = useState();
    const [datoPokemon, setDatoPokemon] = useState(poke)
    
    
    function getDato(e){
        //trae lo del input y lo convierte en minusculas
        let minusculas = e.target.value.toLowerCase()
        setDatos(minusculas)
        
    }


    
const getPokemon = async(datos) =>{
        
    const requests = await fetch(`https://pokeapi.co/api/v2/pokemon/${datos}`);
    const response = await requests.json()
    setDatoPokemon(response)
}
   
  return (
    <div className='main mt-3 pt-5 pb-4 mb-4 border border-success rounded-pill'>
        <div className=' mb-3 d-flex justify-content-center align-items-center'>
                <input className='rounded-4 text-center' type="text" placeholder='Escribi el nombre o id del pokemon' onChange={(e)=>(
                    getDato(e)
                )}/>
        </div>
        <div className=' mb-5 d-flex justify-content-center align-items-center'>
                <button className='btn btn-outline-dark' onClick={()=>(
                    getPokemon(datos)
                )} >Buscar pokemon</button>
        </div>
        <div>
            <PokemonMain peso={datoPokemon.weight} name={datoPokemon.name} img={datoPokemon.sprites} numPokedex={datoPokemon.id}  />
        </div>
    </div>
  )
}

export default Search