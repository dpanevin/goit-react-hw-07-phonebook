import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as pbOperations from 'redux/phonebook/pb-operations';
import { selectFilteredContacts } from 'redux/phonebook/pb-selectors';
import { ContactsListItem, DeleteBtn } from '../Phonebook.styled';

export default function ContactsList() {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(pbOperations.fetchContacts());
  }, [dispatch]);

  function onClicked(e) {
    dispatch(pbOperations.deleteContact(e.target.id));
  }

  return (
    <ul>
      {filteredContacts.map(({ name, number, id }) => {
        return (
          <ContactsListItem key={id}>
            {name}: {number}
            <DeleteBtn id={id} onClick={onClicked}>
              Удалить
            </DeleteBtn>
          </ContactsListItem>
        );
      })}
    </ul>
  );
}
