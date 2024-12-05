"use client";

import { createContext, useContext, useState, useMemo } from "react";
/* eslint-disable import/no-extraneous-dependencies */
import { useQuery } from "react-query";
import axios from "axios";
import { GET_POKEMON } from "../utils/API_URL";

const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const {
    data: pokemonData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["all-pokemon"],
    queryFn: async () => {
      const response = await axios.get(`${GET_POKEMON}?limit=100&offset=0`);
      if (response.status === 200) {
        const pokemon = await Promise.all(
          response.data.results.map(async (item) => {
            const res = await axios.get(item.url);
            const pokemonDetails = res.data;
            const pokemonImage = `https://img.pokemondb.net/artwork/${item.name}.jpg`;
            const pokemonTypes = pokemonDetails.types.map((t) => t.type.name);

            return { ...item, pokemonDetails, pokemonImage, pokemonTypes };
          }),
        );
        return pokemon;
      }
      throw new Error("Failed to fetch Pokémon data");
    },
  });

  const filteredPokemon = useMemo(() => {
    if (!pokemonData) return [];

    return pokemonData.filter((pokemon) => {
      const matchesSearch = pokemon.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      return matchesSearch;
    });
  }, [pokemonData, searchQuery]);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = {
    pokemonData,
    isLoading,
    error,
    searchQuery,
    setSearchQuery,
    filteredPokemon,
  };

  return (
    <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>
  );
};

export const usePokemon = () => useContext(PokemonContext);
