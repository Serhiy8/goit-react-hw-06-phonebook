import ContactsList from './ContactsList/ContactsList';
import FormPhonebook from './FormPhoneBook/PhormPhoneBook';
import FilterByName from './Filter/Filter';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <FormPhonebook />
      <h2>Contacts</h2>
      <FilterByName />
      <ContactsList />
    </Container>
  );
};
