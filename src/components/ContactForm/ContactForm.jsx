import { useState } from 'react';
import s from './ContactForm.module.css'


export default function ContactForm(props) {

  const { onSubmit } = props


  const [name, setName] = useState('');
  const [number, setNumber] = useState('');


  const handleChange = event => {
    const value = event.target.attributes.name.value;

    if (value ===  "name"){ setName(event.target.value) }
    if (value ===  "number"){ setNumber(event.target.value) }

  }

  const handleSubmit = event => {
    event.preventDefault();

    const contact = { name: name, phone: number}
    //console.log('trying to add contact:', contact)

    onSubmit(contact)

    setName('');
    setNumber('');
  };


  return (
      <form onSubmit={handleSubmit} className={s.form}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={number}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" className="button">Add contact</button>
      </form>
    );
}


