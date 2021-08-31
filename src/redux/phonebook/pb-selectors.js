import { createSelector } from '@reduxjs/toolkit';

export const selectFilter = state => state.filter;
export const selectContacts = state => state.contacts;
export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) =>
    contacts.filter(({ name }) => {
      return name.toLowerCase().includes(filter);
    }),
);
