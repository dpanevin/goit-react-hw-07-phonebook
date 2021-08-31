import contactsApi from 'contactsApi';
import { nanoid } from 'nanoid';
import toast from 'react-hot-toast';
import {
  addContactsError,
  addContactsRequest,
  addContactsSuccess,
  deleteContactError,
  deleteContactRequest,
  deleteContactSuccess,
  fetchContactsError,
  fetchContactsRequest,
  fetchContactsSuccess,
} from './pb-actions';

export const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());

  try {
    const { data } = await contactsApi.get();

    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error));
  }
};

export const addContact =
  ({ name, number }) =>
  async (dispatch, getState) => {
    dispatch(addContactsRequest());

    const { contacts } = getState();
    const contactNames = contacts.map(item => {
      return item.name;
    });

    if (contactNames.includes(name)) {
      toast.error('Такое имя уже есть в списке контактов, придумайте новое имя.');

      dispatch(fetchContactsError());
      return;
    }

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    try {
      const { data } = await contactsApi.post('', contact);

      dispatch(addContactsSuccess(data));
    } catch (error) {
      console.log(error);
      dispatch(addContactsError());
    }
  };

export const deleteContact = id => async dispatch => {
  dispatch(deleteContactRequest());

  try {
    await contactsApi.delete(`/${id}`);
    const { data } = await contactsApi.get();

    dispatch(deleteContactSuccess(data));
  } catch (error) {
    console.log(error);
    dispatch(deleteContactError());
  }
};
