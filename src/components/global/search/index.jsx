"use client";

import React from "react";
import { usePokemon } from "../../../context/pokemonContext";
import Card from "./card";

function Search() {
  const { searchQuery, setSearchQuery, filteredPokemon, handleCardClick } =
    usePokemon();

  return (
    <div className="relative z-10">
      <input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="outline-none text-black px-2 py-2 rounded w-full border  focus:outline-none"
        placeholder="Search Pokemon...."
      />
      {searchQuery.trim() && (
        <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded shadow-lg mt-1 max-h-60 overflow-y-auto z-20">
          {filteredPokemon.length > 0 ? (
            filteredPokemon
              .slice(0, 10)
              .map((pokeman) => (
                <Card
                  key={pokeman.name}
                  name={pokeman.name}
                  image={pokeman.pokemonImage}
                  types={pokeman.pokemonTypes}
                  onCardClick={handleCardClick}
                />
              ))
          ) : (
            <div className="px-4 py-2 text-gray-500">No Pokémon found</div>
          )}
        </div>
      )}
    </div>
  );
}

export default Search;
