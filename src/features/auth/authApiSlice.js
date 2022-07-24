import { apiSlice } from "../../api/apislice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: {
          ...credentials,
        },
      }),
    }),
  }),
});

export const { useLoginMutation } = authApiSlice;
