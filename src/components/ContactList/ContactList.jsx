import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import css from '../ContactList/contactList.module.css';

function ContactList({ onDeleteContact, onVisibleContacts }) {
  return (
    <ul className={css.list}>
      {onVisibleContacts.map(contact => {
        return (
          <li key={nanoid()} className={css.listItem}>
            <p className={css.text}>
              {contact.name}
              {': '}
              {contact.number}
            </p>
            <button
              type="button"
              onClick={() => onDeleteContact(contact.id)}
              className={css.btn}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default ContactList;

ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  onVisibleContacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
