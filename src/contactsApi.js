import axios from 'axios';

const contactsApi = axios.create({
  baseURL: 'http://localhost:3000/contacts',
});

export default contactsApi;
