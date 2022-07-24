import ContactForm from "components/ContactForm/ContactForm";
import Filter from "components/Filter/Filter";
import ContactList from 'components/ContactList/ContactList';
import { useSelector } from "react-redux";
import { useGetContactsQuery, useAddContactMutation } from '../redux/ContactsSlice.js'


const App = () => {

  const filter = useSelector(state => state.filter)
  const [addContact] = useAddContactMutation()

  const { data: contacts, error, isLoading } = useGetContactsQuery()

  //console.log('contacts', contacts)
  //console.log('filter', filter)

  const getVisibleContacts = () => {
    const normilizedFilter = filter.toLowerCase();

    const result = contacts.filter(contact => contact.name.toLowerCase().includes(normilizedFilter))
    return result;
  }

  const handleAddContact = async contact => {
    if(contacts.some(c => c.name ===contact.name)) {
      alert(contact.name +' is already in contacts')
      return
    }

    try {
      await addContact(contact)
    } catch (error) {
      console.log('error', error)
    }
  }
 

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleAddContact}/>
      <h2>Contacts</h2>
      <Filter/>
      {error && <p>An error occurred:{error}</p>}
      {isLoading && <p>Loading...</p>}
      {contacts && <ContactList contacts={getVisibleContacts()}/>}
    </div>
  )
}

export default App;
