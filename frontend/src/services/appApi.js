import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// create the API

export const appApi = createApi({
  reducerPath: "appApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
    // baseUrl: "https://ecommerbackend.herokuapp.com",
  }),
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (user) => ({
        url: "/users/signup",
        method: "POST",
        body: user,
      }),
    }),
    login: builder.mutation({
      query: (user) => ({
        url: "/users/login",
        method: "POST",
        body: user,
      }),
    }),
    createProduct: builder.mutation({
      query: (product) => ({
        url: "/products",
        method: "POST",
        body: product,
      }),
    }),
    addToCart: builder.mutation({
      query: (cartInfo) => ({
        url: "/products/add-to-cart",
        method: "POST",
        body: cartInfo,
      }),
    }),
    removeFromCart: builder.mutation({
      query: (body) => ({
        url: "/products/remove-from-cart",
        method: "POST",
        body,
      }),
    }),
    increaseCartProduct: builder.mutation({
      query: (body) => ({
        url: "/products/increase-cart",
        method: "POST",
        body,
      }),
    }),
    decreaseCartProduct: builder.mutation({
      query: (body) => ({
        url: "/products/decrease-cart",
        method: "POST",
        body,
      }),
    }),
    createOrder: builder.mutation({
      query: (body) => ({
        url: "/orders",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useSignupMutation,
  useLoginMutation,
  useCreateProductMutation,
  useAddToCartMutation,
  useRemoveFromCartMutation,
  useIncreaseCartProductMutation,
  useDecreaseCartProductMutation,
  useCreateOrderMutation,
} = appApi;

export default appApi;
