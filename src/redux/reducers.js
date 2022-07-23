import { createReducer } from '@reduxjs/toolkit';
import { filterContacts } from './actions';
 

const filterContactsReducer = (state, action) => {

  state = action.payload
  return state
}

export const filterReducer = createReducer('',{
  [filterContacts]: filterContactsReducer,
})

