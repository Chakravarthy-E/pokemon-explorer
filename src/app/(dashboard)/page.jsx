"use client";

import Pagination from "../../components/global/pagination";
import PokemonCard from "../../components/global/pokemon-card";
import { usePokemon } from "../../context/pokemonContext";

export default function Home() {
  const {
    isLoading,
    uniquePokemonTypes,
    selectedType,
    setSelectedType,
    sortByExperience,
    setSortByExperience,
    currentPage,
    setCurrentPage,
    filteredPokemon,
    itemsPerPage,
    paginatedPokemon,
  } = usePokemon();

  const totalPages = Math.ceil(filteredPokemon.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  if (isLoading) {
    return (
      <p className="flex items-center justify-center min-h-screen">
        Loading....
      </p>
    );
  }

  return (
    <div className="py-3">
      <div className="space-x-3">
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="outline-none border rounded px-3 py-2 text-black capitalize text-xs"
          disabled={currentPage > 1}
        >
          {uniquePokemonTypes.map((type) => (
            <option key={type} value={type} className="capitalize text-xs">
              {type}
            </option>
          ))}
        </select>

        {/* eslint-disable-next-line react/button-has-type */}
        <button
          className="px-2 bg-white py-2 rounded text-black text-xs"
          onClick={() => setSortByExperience(!sortByExperience)}
        >
          {sortByExperience ? (
            <span>Sort: Default</span>
          ) : (
            <span>Sort by Experience</span>
          )}
        </button>
      </div>

      <div className="py-3 grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3">
        {paginatedPokemon.map((pokemon) => (
          <PokemonCard
            key={pokemon.name}
            image={pokemon.pokemonImage}
            name={pokemon.name}
            types={pokemon.pokemonTypes}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        handleNext={handleNextPage}
        handlePrevious={handlePreviousPage}
        totalPages={totalPages}
      />
    </div>
  );
}
