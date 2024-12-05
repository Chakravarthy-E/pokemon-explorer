"use client";

import React from "react";
import Image from "next/image";
import { useFetchPokemon } from "../_actions";

function PokemonPage({ params }) {
  const pokemonName = params.name;
  const { data, isLoading } = useFetchPokemon(pokemonName);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen ">
        <p className="text-xl font-semibold ">Loading Pokémon data...</p>
      </div>
    );
  }

  const renderMoves = (moves) =>
    moves.slice(0, 10).map((item) => (
      <div key={item.move.name} className="flex justify-between text-sm ">
        <span>{item.move.name.toUpperCase()}</span>
      </div>
    ));
  const renderAbilities = (abilities) =>
    abilities.map((item) => (
      <div key={item.ability.name} className="flex justify-between text-sm ">
        <span>{item.ability.name.toUpperCase()}</span>
      </div>
    ));

  const renderStats = (stats) =>
    stats.map((stat) => (
      <div
        key={stat.stat.name}
        className="flex justify-between text-sm space-x-3 "
      >
        <span>{stat.stat.name.toUpperCase()}</span>
        <span className="text-blue-500 font-semibold">{stat.base_stat}</span>
      </div>
    ));

  const renderTypes = (types) =>
    types.map((item) => (
      <div key={item.type.name} className="flex items-start text-sm ">
        <span className="capitalize font-semibold">
          {item.type.name.toUpperCase()}
        </span>
      </div>
    ));

  return (
    <div className="flex flex-col min-h-screen ">
      <div className="py-3 space-y-2">
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2  gap-4">
          {/* Image and Name */}
          <div className="p-4 flex items-center flex-col rounded-lg shadow-md border w-full">
            <Image
              src={data.image}
              alt={data.name}
              width={250}
              height={250}
              className="rounded-lg shadow-lg mb-4 w-full h-72 object-contain"
            />
            <p className="text-2xl font-bold text-center capitalize">
              {data.name}
            </p>
          </div>

          {/* Basic Details */}
          <div className="p-4 rounded-lg shadow-md border w-full">
            <h2 className="text-xl font-semibold mb-2 underline">
              Basic Details
            </h2>
            <p className="capitalize font-semibold space-x-2">
              <span>ID:</span> <span>{data.id}</span>
            </p>
            <p className="capitalize font-semibold space-x-2">
              <span>Experience:</span> <span>{data.base_experience}</span>
            </p>
            <p className="capitalize font-semibold space-x-2">
              <span>Height:</span> <span>{data.height}</span>
            </p>
            <p className="capitalize font-semibold space-x-2">
              <span>Weight:</span> <span>{data.weight}</span>
            </p>
          </div>

          {/* Moves */}
          <div className="p-4 rounded-lg shadow-md border w-full">
            <h2 className="text-xl font-semibold mb-2 underline">Moves</h2>
            <div className="space-y-2">{renderMoves(data.moves)}</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2  gap-4">
          {/* Stats */}
          <div className="p-4 rounded-lg shadow-md border w-full">
            <h2 className="text-xl font-semibold mb-2 underline">Stats</h2>
            <div className="space-y-2">{renderStats(data.stats)}</div>
          </div>

          {/* Abilities */}
          <div className="p-4 rounded-lg shadow-md border w-full">
            <h2 className="text-xl font-semibold mb-2 underline">Abilities</h2>
            <div className="space-y-2">{renderAbilities(data.abilities)}</div>
          </div>

          {/* Types */}
          <div className="p-4 rounded-lg shadow-md border w-full">
            <h2 className="text-xl font-semibold mb-2 underline">Types</h2>
            <div className="space-y-2">{renderTypes(data.types)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonPage;
