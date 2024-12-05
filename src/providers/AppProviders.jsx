"use client";

import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { QueryClientProvider, QueryClient } from "react-query";
import { PokemonProvider } from "../context/pokemonContext";

const queryClient = new QueryClient();

function AppProviders({ children }) {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <PokemonProvider>{children}</PokemonProvider>
      </QueryClientProvider>
    </div>
  );
}

export default AppProviders;
