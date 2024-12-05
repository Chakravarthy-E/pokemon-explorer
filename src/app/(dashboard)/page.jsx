"use client";

import PokemonCard from "../../components/global/pokemon-card";
import { usePokemon } from "../../context/pokemonContext";

export default function Home() {
  const { pokemonData, isLoading } = usePokemon();
  if (isLoading) {
    return (
      <p className="flex items-center justify-center min-h-screen">
        Loading....
      </p>
    );
  }

  return (
    <div className="py-3 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-5 md:grid-cols-2 sm:grid-cols-2 gap-3">
      {pokemonData.map((pokemon) => (
        <PokemonCard
          key={pokemon.name}
          image={pokemon.pokemonImage}
          name={pokemon.name}
          types={pokemon.pokemonTypes}
        />
      ))}
    </div>
  );
}
