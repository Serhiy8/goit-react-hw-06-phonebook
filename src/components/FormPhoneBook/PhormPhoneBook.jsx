import { Form } from './PhormPhoneBook.styled';
import { Label, Input, Button } from 'components/App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';

const FormPhonebook = () => {
  const dispatch = useDispatch();
  const contactsArray = useSelector(getContacts);

  const checkContact = userName => {
    const normalizedNewContactName = userName.toLowerCase();
    return contactsArray.some(
      contact => contact.userName.toLowerCase() === normalizedNewContactName
    );
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const newUserName = form.elements.userName.value;
    const newUserNumber = form.elements.userNumber.value;
    checkContact(newUserName)
      ? alert('This contact is already in list')
      : dispatch(addContact(newUserName, newUserNumber));
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="userName"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Phone number
        <Input
          type="tel"
          name="userNumber"
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>

      <Button type="submit">Add contact</Button>
    </Form>
  );
};

export default FormPhonebook;
