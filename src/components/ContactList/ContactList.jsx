import s from './ContactList.module.css';
import PropTypes from 'prop-types';
import { useDeleteContactMutation } from '../../redux/ContactsSlice.js'


const ContactList = ({ contacts }) => {

    const [deleteContact] = useDeleteContactMutation()

    return (
        <ul className={s.list}>
            {contacts.map(contact => 
            <li key={contact.id} className={s.item}>
                {contact.name} : {contact.phone} 
                <button 
                    className = "button" 
                    type="button" 
                    onClick={() => deleteContact(contact.id)}
                >Delete</button>
            </li>)}
        </ul>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.array,
  };

export default ContactList;