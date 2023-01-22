import { Component } from 'react';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  changeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  // addNewContact = () => {
  //   this.setState(({ contacts }) => ({
  //     contacts: [this.contact, ...contacts],
  //   }));
  // };

  inputChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  addContact = evt => {
    evt.preventDefault();

    const { name, number } = evt.target.elements;
    const contact = {
      id: nanoid(),
      name: name.value,
      number: number.value,
    };

    this.state.contacts.find(item => item.name === name.value)
      ? alert(`${name.value} is already in contacts!`)
      : this.setState(({ contacts }) => ({
          contacts: [contact, ...contacts],
        }));
    this.resetForm();
  };

  resetForm() {
    this.setState({ name: '', number: '' });
  }

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter, name, number } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <main>
        {/* <ContactForm
          contacts={contacts}
          onAddNewContact={() => this.addNewContact()}
          
        /> */}
        <section>
          <h2>Phonebook</h2>
          <form onSubmit={this.addContact}>
            <label>
              Name
              <input
                type="text"
                name="name"
                value={name}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={this.inputChange}
              />
            </label>
            <label>
              Number
              <input
                type="tel"
                name="number"
                value={number}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                onChange={this.inputChange}
              />
            </label>

            <button type="submit">Add contact</button>
          </form>
        </section>

        <section>
          <h2>Contacts</h2>
          <label>
            Find contacts by name
            <input type="text" value={filter} onChange={this.changeFilter} />
          </label>
          {/* <ContactList
            filter={filter}
            onVisibleContacts={visibleContacts}
            items={contacts}
            onDeleteContact={this.deleteContact}
          /> */}
          <ul>
            {visibleContacts.map(contact => {
              return (
                <li key={nanoid()}>
                  <p>
                    {contact.name}
                    {': '}
                    {contact.number}
                  </p>
                  <button
                    type="button"
                    onClick={() => this.deleteContact(contact.id)}
                  >
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
        </section>
      </main>
    );
  }
}

export default App;
