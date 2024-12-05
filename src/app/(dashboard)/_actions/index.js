"use client";

// eslint-disable-next-line import/no-extraneous-dependencies
import { useQuery } from "react-query";
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";
import { GET_POKEMON } from "../../../utils/API_URL";

export const useFetchAllPokemon = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["all-pokemon"],
    // eslint-disable-next-line consistent-return
    queryFn: async () => {
      try {
        const response = await axios.get(`${GET_POKEMON}?limit=100&offset=0`);
        if (response.status === 200) {
          const pokemon = await Promise.all(
            response.data?.results?.map(async (item) => {
              const res = await axios.get(item.url);
              const pokemonDetails = res.data;
              const pokemonImage = `https://img.pokemondb.net/artwork/${item.name}.jpg`;
              const pokemonTypes = pokemonDetails.types.map((t) => t.type.name);

              return { ...item, pokemonDetails, pokemonImage, pokemonTypes };
            }),
          );
          return pokemon;
        }
        // eslint-disable-next-line no-shadow
      } catch (error) {
        throw new Error("Failed to fetch Pokémon data", error);
      }
    },
  });

  return { data, isLoading, error };
};
