import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from './reducers'
import { phonebookApi } from './ContactsSlice'

export const store = configureStore({
    reducer: {
        filter: filterReducer,
        [phonebookApi.reducerPath]: phonebookApi.reducer,
    },
    middleware: getDefaultMiddleware =>
    [...getDefaultMiddleware(), phonebookApi.middleware],

})