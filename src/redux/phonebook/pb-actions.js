/* eslint-disable import/no-anonymous-default-export */
import { createAction } from '@reduxjs/toolkit';

// Filter action
export const changeFilter = createAction('phonebook/changeFilter');

// Fetch action
export const fetchContactsRequest = createAction('phonebook/fetchContactsRequest');
export const fetchContactsSuccess = createAction('phonebook/fetchContactsSuccess');
export const fetchContactsError = createAction('phonebook/fetchContactsError');

// Add action
export const addContactsSuccess = createAction('phonebook/addContactsSuccess');
export const addContactsRequest = createAction('phonebook/addContactsRequest');
export const addContactsError = createAction('phonebook/addContactsError');

// Delete action
export const deleteContactSuccess = createAction('phonebook/deleteContactSuccess');
export const deleteContactRequest = createAction('phonebook/deleteContactRequest');
export const deleteContactError = createAction('phonebook/deleteContactError');
