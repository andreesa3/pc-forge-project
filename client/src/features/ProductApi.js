import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const ProductApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `/mockfile.json`,
    }),
  }),
});

export const { useGetAllProductsQuery } = ProductApi;
