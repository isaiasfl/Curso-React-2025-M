import { createContext, useContext, useState } from "react";
import { toast } from "sonner";
// creamos el contexto.
const PokemonContext = createContext();

export function PokemonProvider({ children }) {
  const [favorites, setFavorites] = useState([]);
  // añadir pokemons a favoritos.

  const addToFavorites = (pokemon) => {
    // comprobar si el pokemon ya está en favoritos.
    if (favorites.some((p) => p?.id === pokemon.id)) {
      // pokemon ya repetido en favorites. Luego mensaje de eror
      toast.error(`El pokemon ${pokemon.name} ya está en favoritos`, {
        style: {
          background: "red",
          color: "white",
          border: "1px solid black",
        },
        icon: "⭐",
      });
      return;
    }
    // añadimos el pokemon a favoritos.;
    setFavorites((prevFavorites) => [...prevFavorites, pokemon]);
    // toast que todo ok.
    toast.success(`Pokemon ${pokemon.name} añadido a favoritos`, {
      style: {
        background: "green",
        color: "white",
        border: "1px solid black",
      },
      icon: "⭐",
    });
  };
  const removeFromFavorites = (pokemonId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((p) => p?.id !== pokemonId)
    );
    // sonner mensaje de OK
    toast.info("Pokemon eliminado de favoritos", {
      style: {
        background: "blue",
        color: "white",
        border: "1px solid black",
      },
      icon: "🗑️",
    });
  };

  return (
    <PokemonContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites }}
    >
      {children}
    </PokemonContext.Provider>
  );
}

//// ------------ Hook para consumir el contexto ------------
export const usePokemon = () => {
  const context = useContext(PokemonContext);
  if (context === undefined) {
    throw new Error("usePokemon debe ser usado dentro de un PokemonProvider");
  }
  return context;
};
