import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "products",
    }),
    getProductById: builder.query({
      query: (id) => `products/${id}`,
    }),
    searchProducts: builder.query({
      query: (query) => `products/search?q=${query}`,
    }),
    getProductsWithPagination: builder.query({
      query: ({ limit, skip, select }) =>
        `products?limit=${limit}&skip=${skip}&select=${select}`,
    }),
    getSortedProducts: builder.query({
      query: ({ sortBy, order }) => `products?sortBy=${sortBy}&order=${order}`,
    }),
    getProductCategories: builder.query({
      query: () => "products/categories",
    }),
    getProductsByCategory: builder.query({
      query: (category) => `products/category/${category}`,
    }),
    addProduct: builder.mutation({
      query: (newProduct) => ({
        url: "products/add",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: newProduct,
      }),
    }),
    updateProduct: builder.mutation({
      query: ({ id, updatedProduct }) => ({
        url: `products/${id}`,
        method: "PUT", // or 'PATCH'
        headers: { "Content-Type": "application/json" },
        body: updatedProduct,
      }),
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `products/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useSearchProductsQuery,
  useGetProductsWithPaginationQuery,
  useGetSortedProductsQuery,
  useGetProductCategoriesQuery,
  useGetProductsByCategoryQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productsApi;
