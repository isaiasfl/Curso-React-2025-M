import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import { usePokemon } from "../context/PokemonContext";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { addToFavorites } = usePokemon();

  useEffect(() => {
    fetchPokemons();
  }, []);

  const fetchPokemons = async () => {
    try {
      const reponse = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
      if (!reponse.ok) {
        throw new Error("Something went wrong");
      }

      const data = await reponse.json();
      // Ahora obtengamos la data de todos los pokemons en parallelo
      const pokemonDetais = await Promise.all(
        data.results.map(async (pokemon) => {
          const repo = await fetch(pokemon.url);
          if (!repo.ok) {
            throw new Error("Something went wrong");
          }
          return await repo.json();
        })
      );

      // seteo en el estado los pokemonDetails
      setPokemons(pokemonDetais);
    } catch (error) {
      console.log("Error fetching pokemons", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6"> Pokemons disponibles</h1>
      {/* Grid de las tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Tarjeta individual de cada Pokemon */}
        {pokemons.map((pokemon) => (
          <div key={pokemon.id} className="bg-white shadow-md rounded-md p-6">
            <div className="relative group">
              <img
                src={pokemon.sprites.other.dream_world.front_default}
                alt={pokemon.name}
                className="w-32 h-32 mx-auto transform group-hover:scale-120 transition-transform duration-500"
              />
            </div>
            <h2 className="text-xl font-semibold text-center capitalize mt-2">
              {pokemon.name}
            </h2>
            {/* Aquí van los botones  */}
            <div className="flex justify-center space-x-2 mt-4">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-800"
                // onClick={hand} aquí llamaré a la función del contexto para añadir a favoritos
                onClick={() => addToFavorites(pokemon)}
              >
                Añadir a Favoritos
              </button>

              {/* // tiene que ir a /search/${pokemon.name} */}

              <Link
                to={`/search/${pokemon.name}`}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-800"
              >
                Ver Detalles
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
