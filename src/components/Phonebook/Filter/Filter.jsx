import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/phonebook/pb-actions';
import { selectFilter } from 'redux/phonebook/pb-selectors';
import { FormInput } from '../Phonebook.styled';

export default function Filter() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  function hendleChange(e) {
    dispatch(changeFilter(e.target.value));
  }

  return (
    <label>
      Поиск по списку контактов:
      <FormInput
        onChange={hendleChange}
        value={filter}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Фильтр"
        required
      />
    </label>
  );
}
