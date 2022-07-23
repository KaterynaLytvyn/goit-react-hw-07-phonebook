import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const phonebookApi = createApi({
    reducerPath: 'contacts',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'https://62d99f305d893b27b2ea9553.mockapi.io/' 
    }),
    tagTypes: ['Contact'],
    endpoints: (builder) => ({
      getContacts: builder.query({
        query: () => `contacts`,
        providesTags: ['Contact'],
      }),
      addContact: builder.mutation({
        query: contact => ({
            url: `contacts`,
            method: 'POST',
            body: contact,
        }),
        invalidatesTags: ['Contact'],
      }),
      deleteContact: builder.mutation({
        query: id => ({
            url: `contacts/${id}`,
            method: 'DELETE',
        }),
        invalidatesTags: ['Contact'],
      })
    }),
  })

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
    useGetContactsQuery, 
    useAddContactMutation, 
    useDeleteContactMutation,
} = phonebookApi