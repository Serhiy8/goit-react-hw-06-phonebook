import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts, getFilterValue } from 'redux/selectors';
import { ListStyled, ListItem, ListItemText } from './ContactsList.styled';
import { Button } from 'components/App.styled';

const ContactsList = () => {
  const contactsArray = useSelector(getContacts);
  const filterValue = useSelector(getFilterValue);

  const visibleContacts = () => {
    const normalizedFilter = filterValue.toLowerCase();
    return contactsArray.filter(({ userName }) =>
      userName.toLowerCase().includes(normalizedFilter)
    );
  };
  const dispatch = useDispatch();
  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };
  return (
    <ListStyled>
      {visibleContacts().map(({ id, userName, number }) => (
        <ListItem key={id}>
          <ListItemText>
            {userName}: {number}
          </ListItemText>
          <Button onClick={() => onDeleteContact(id)}>delete</Button>
        </ListItem>
      ))}
    </ListStyled>
  );
};

export default ContactsList;
