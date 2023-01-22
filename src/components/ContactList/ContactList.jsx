import { nanoid } from 'nanoid';

function ContactList({ onDeleteContact, items }) {
  // console.log(onVisibleContacts);
  console.log(items);
  return (
    <ul>
      {items.map(contact => {
        console.log('MAP');
        return (
          <li key={nanoid()}>
            <p>
              {contact.name}
              {': '}
              {contact.number}
            </p>
            <button type="button" onClick={() => onDeleteContact(contact.id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default ContactList;
