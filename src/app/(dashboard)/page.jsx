"use client";

import PokemonCard from "../../components/global/pokemon-card";
import { useFetchAllPokemon } from "./_actions";

export default function Home() {
  const { data, isLoading } = useFetchAllPokemon();
  console.log({ data });
  if (isLoading) {
    return (
      <p className="flex items-center justify-center min-h-screen">
        Loading....
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-5 md:grid-cols-2 sm:grid-cols-2 gap-3">
      {data.map((pokemon) => (
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
