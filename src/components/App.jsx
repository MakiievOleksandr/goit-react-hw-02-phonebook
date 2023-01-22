import { Component } from 'react';

import Section from './Section/Secton';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = contactData => {
    this.state.contacts.find(item => item.name === contactData.name)
      ? alert(`${contactData.name} is already in contacts!`)
      : this.setState(({ contacts }) => ({
          contacts: [contactData, ...contacts],
        }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
    this.setState({ filter: '' });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  changeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  render() {
    const { filter, contacts } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <>
        <Section title="Phonebook">
          <ContactForm onAddContact={this.addContact} />
        </Section>
        {contacts.length > 0 && (
          <Section title="Contacts">
            <Filter filter={filter} onChangeFilter={this.changeFilter} />
            <ContactList
              onVisibleContacts={visibleContacts}
              onDeleteContact={this.deleteContact}
            />
          </Section>
        )}
      </>
    );
  }
}

export default App;
