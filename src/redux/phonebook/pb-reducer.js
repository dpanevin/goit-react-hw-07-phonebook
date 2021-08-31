import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addContactsError,
  addContactsRequest,
  addContactsSuccess,
  changeFilter,
  deleteContactError,
  deleteContactRequest,
  deleteContactSuccess,
  fetchContactsError,
  fetchContactsRequest,
  fetchContactsSuccess,
} from './pb-actions';

const filterReducer = createReducer('', {
  [changeFilter]: (_, { payload }) => payload.toLowerCase(),
});

const contactsReducer = createReducer([], {
  [fetchContactsSuccess]: (_, action) => action.payload,
  [addContactsSuccess]: (state, action) => [...state, action.payload],
  [deleteContactSuccess]: (_, action) => action.payload,
});

const isLoading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  [addContactsRequest]: () => true,
  [addContactsSuccess]: () => false,
  [addContactsError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

const error = createReducer(null, {
  [fetchContactsError]: (_, action) => action.payload,
  [fetchContactsRequest]: () => null,
  [addContactsError]: (_, action) => action.payload,
  [addContactsRequest]: () => null,
  [deleteContactError]: (_, action) => action.payload,
  [deleteContactRequest]: () => null,
});

export default combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  isLoading,
  error,
});
