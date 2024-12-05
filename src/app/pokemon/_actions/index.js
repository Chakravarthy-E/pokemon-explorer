"use client";

// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";
// eslint-disable-next-line import/no-extraneous-dependencies
import { useQuery } from "react-query";
import { GET_POKEMON } from "../../../utils/API_URL";

export const useFetchPokemon = (name) => {
  const { data, isLoading } = useQuery({
    queryKey: ["pokemon", name],
    queryFn: async () => {
      try {
        const response = await axios.get(`${GET_POKEMON}/${name}`);
        if (response.status === 200) {
          const image = `https://img.pokemondb.net/artwork/${name}.jpg`;
          return { ...response.data, image };
        }
        return response.data;
      } catch (error) {
        throw new Error("error in fetchingPokemon");
      }
    },
  });
  return { data, isLoading };
};
