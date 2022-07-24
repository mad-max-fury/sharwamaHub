import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials, logout } from "../features/auth/loginslice";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://sharwamahub-api.test/api/v1",
  credentials: "include",
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json",
  },
  withCreditentials: true,
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

// const baseQueryWithRefresh = async (args, api, extraOptions) => {
//   let result = await baseQuery(args, api, extraOptions);
//   console.log(result);

//   if (result?.error?.originalStatus === 401) {
//     console.log("sending refreshtoken");

//     const refreshResult = await baseQuery("/refresh", api, extraOptions);
//     if (refreshResult?.data) {
//       const user = api.getState().auth.user;
//       api.dispatch(setCredentials({ ...refreshResult?.data, user }));

//       result = await baseQuery(args, api, extraOptions);
//     } else {
//       api.dispatch(logout());
//     }
//   }
//   return result;
// };

export const apiSlice = createApi({
  baseQuery: baseQuery,
  endpoints: () => ({}),
});
