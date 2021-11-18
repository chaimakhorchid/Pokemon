import { useState, useEffect } from 'react'

const Home = () => {
  const [pokemon, setPokemon] = useState(null)
  
  useEffect(() => { 
    fetch("https://pokeapi.co/api/v2/pokemon/1")
      .then(response => response.json()) 
      .then(result => { setPokemon(result) }) 
  }, [])

  const Random = () => {
    const min = 1
    const max = 151
    const pokemonID = Math.floor(Math.random() * (max - min + 1) + min) 
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`)
      .then(response => response.json()) 
      .then(result => { setPokemon(result) }) 
  }
  console.log({pokemon});

  return(
    <>
        <h1 className="text-center bg-success text-light p-3 col-5 my-2 mx-auto">Home</h1>
        <button type="button"  className="text-center bg-success text-light p-3 col-4 my-2 mx-auto" onClick={() => Random()}>Random</button>
        {pokemon === null ? "" : 
          <>
          <div  style={{
          border: "5px solid black",
          borderRadius: "12px",
          opacity: "0.9",
          background:
            "linear-gradient(rgba(245, 246, 252, 0.52), rgba(0, 100, 0, 0.5))",
        }}
        className="col-3 mx-auto bg-light text-dark p-5">
            <img style={{ width: "60%", height: "auto" }} src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name} />
            <p className="mx-2 bg-light border border-dark rounded text-center p-3 text-primary">{pokemon.name}</p>
            <p className="mx-2 bg-light border border-dark rounded text-center p-3 text-primary">{pokemon.height}</p>
            <p className="mx-2 bg-light border border-dark rounded text-center p-3 text-primary">{pokemon.weight}</p>
            <p>{pokemon.types.map(element => element.type.name)}</p>
            </div>
          </>
        }
    </>
  )
}

export default Home