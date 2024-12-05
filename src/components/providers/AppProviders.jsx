"use client";

import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

function AppProviders({ children }) {
  return (
    <div>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </div>
  );
}

export default AppProviders;
