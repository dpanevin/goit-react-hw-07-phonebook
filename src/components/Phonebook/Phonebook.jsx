import { Toaster } from 'react-hot-toast';
import ContactForm from './ContactForm/ContactForm';
import ContactsList from './Contacts/ContactsList';
import Filter from './Filter/Filter';
import { HeadTitle, Section } from './Phonebook.styled';

export default function Phonebook() {
  return (
    <Section>
      <HeadTitle>Phonebook</HeadTitle>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
      <Toaster position="top-right" />
    </Section>
  );
}
