import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import PokemonCard from './components/PokemonCard';


const LIMIT = 150;
const pokeApi = `https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}`;


function App() {

  const [data, setData] = useState([]);

  useEffect(async () => {
    const data = await fetch(pokeApi)
    const json = await data.json()
    console.log(json)
    const final = json.results;
    setData(final);
    console.log(data);
  }, [])


  return (
    <div data-testid="app">
      <Navigation />
      <h1>Pokemon should appear here</h1>

      {data.map(d =>
        <PokemonCard name={d.name} url={d.url}></PokemonCard>)}

      {/* <PokemonCard name={"charmander"} url={"https://pokeapi.co/api/v2/pokemon/4"}></PokemonCard> */}
    </div>
  );

}

export { App };
