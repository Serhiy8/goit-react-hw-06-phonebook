import { Form } from './PhormPhoneBook.styled';
import { Label, Input, Button } from 'components/App.styled';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

const FormPhonebook = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const elements = e.target.elements;
    const userName = elements.userName.value;
    const userNumber = elements.number.value;
    dispatch(addContact(userName, userNumber));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="userName"
          //   value={userName}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Phone number
        <Input
          type="tel"
          name="number"
          //   value={number}
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
