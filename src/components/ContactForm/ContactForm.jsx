import { Component } from 'react';
import { nanoid } from 'nanoid';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  // static contact = {};

  inputChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  addContact = evt => {
    evt.preventDefault();
    const { contacts, onAddNewContact } = this.props;
    // console.dir(this.props.onCheckExistContact);

    const { name, number } = evt.target.elements;
    this.contact = {
      id: nanoid(),
      name: name.value,
      number: number.value,
    };

    console.log(this.contact);
    // onCheckExistContact(name, this.contact);

    contacts.find(item => item.name === name.value)
      ? alert(`${name.value} is already in contacts!`)
      : onAddNewContact();
    // : this.setState(({ contacts }) => ({
    //     contacts: [this.contact, ...contacts],
    //   }));
    this.resetForm();
  };

  resetForm() {
    this.setState({ name: '', number: '' });
  }

  render() {
    const { name, number } = this.state;
    // const { onAddContact } = this.props;
    // console.log(this.contact);

    return (
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
    );
  }
}

export default ContactForm;
