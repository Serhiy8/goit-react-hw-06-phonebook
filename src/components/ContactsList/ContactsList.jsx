import { ListStyled, ListItem, ListItemText } from './ContactsList.styled';
import { Button } from 'components/App.styled';

const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <ListStyled>
      {contacts.map(({ id, userName, number }) => (
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
