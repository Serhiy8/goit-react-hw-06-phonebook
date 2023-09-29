import { useDispatch, useSelector } from 'react-redux';
import ContactsList from './ContactsList/ContactsList';
import FormPhonebook from './FormPhoneBook/PhormPhoneBook';
import FilterByName from './Filter/Filter';
import { setFilter } from 'redux/filterSlice';
import { deleteContact } from 'redux/contactsSlice';
import { Container } from './App.styled';

export const App = () => {
  const dispatch = useDispatch();
  const contactsArray = useSelector(state => state.contatcs);
  const filterValue = useSelector(state => state.filter);

  const changeFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const visibleContacts = () => {
    const normalizedFilter = filterValue.toLowerCase();
    return contactsArray.filter(({ userName }) =>
      userName.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <Container>
      <FormPhonebook />
      <h2>Contacts</h2>
      <FilterByName onChange={changeFilter} />
      <ContactsList
        contacts={visibleContacts()}
        onDeleteContact={handleDeleteContact}
      />
    </Container>
  );
};
