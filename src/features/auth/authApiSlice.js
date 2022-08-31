import { apiSlice } from "../../api/apislice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
      query: (credentials) => ({
        url: "/api/v1/user",
        method: "Get",
        headers: {
          Authorization: `Bearer ${credentials}`,
        },
      }),
    }),
  }),
});

export const { useLoginMutation } = authApiSlice;
