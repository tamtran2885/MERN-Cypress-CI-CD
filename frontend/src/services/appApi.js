import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// create the API

export const appApi = createApi({
  reducerPath: "appApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
    // baseUrl: "https://ecommerbackend.herokuapp.com",
  }),
  endpoints: (builder) => ({
    /**** For user ****/
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

    /*** For admin ****/
    createProduct: builder.mutation({
      query: (product) => ({
        url: "/products",
        method: "POST",
        body: product,
      }),
    }),
    deleteProduct: builder.mutation({
      query: ({ product_id, user_id }) => ({
        url: `/products/${product_id}`,
        method: "DELETE",
        body: { user_id },
      }),
    }),
    updateProduct: builder.mutation({
      query: (product) => ({
        url: `/products/${product.id}`,
        body: product,
        method: "PATCH",
      }),
    }),

    /**** For user when purchasing****/
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
  useDeleteProductMutation,
  useUpdateProductMutation,
  useAddToCartMutation,
  useRemoveFromCartMutation,
  useIncreaseCartProductMutation,
  useDecreaseCartProductMutation,
  useCreateOrderMutation,
} = appApi;

export default appApi;
