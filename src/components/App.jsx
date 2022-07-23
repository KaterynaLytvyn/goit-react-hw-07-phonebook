import ContactForm from "components/ContactForm/ContactForm";
import Filter from "components/Filter/Filter";
import ContactList from 'components/ContactList/ContactList';
import { useSelector } from "react-redux";
import { useGetContactsQuery } from '../redux/ContactsSlice.js'


const App = () => {

  const filter = useSelector(state => state.filter)

  const { data: contacts, error, isLoading } = useGetContactsQuery()

  //console.log('contacts', contacts)
  //console.log('filter', filter)

  const getVisibleContacts = () => {
    const normilizedFilter = filter.toLowerCase();

    const result = contacts.filter(contact => contact.name.toLowerCase().includes(normilizedFilter))
    return result;
  }

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm/>
      <h2>Contacts</h2>
      <Filter/>
      {error && <p>An error occurred:{error}</p>}
      {isLoading && <p>Loading...</p>}
      {contacts && <ContactList contacts={getVisibleContacts()}/>}
    </div>
  )
}

export default App;
