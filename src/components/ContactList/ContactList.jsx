import ContactListItem from "../ContactListItem/ContactListItem";
import css from "./ContactList.module.css";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import {selectContacts} from '../../redux/contactsSlice'
import {selectNameFilter} from '../../redux/filtersSlice'
import { useSelector } from 'react-redux';

export default function ContactList() {
const contacts = useSelector((state) => state.contacts.items)
// console.log(contacts);


  // const reduxContacts = useSelector(selectContacts);
  // const reduxFilter = useSelector(selectNameFilter);
  

  // const filteredContacts = reduxContacts.filter(contact => contact.name.toLowerCase().includes(reduxFilter.toLowerCase()))
  if (!contacts) {
    return;
  }

  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id} className={css.item}>
          <BsFillPersonFill />
          <BsFillTelephoneFill />
          <ContactListItem
            name={contact.name}
            number={contact.number}
            id={contact.id}
          />

         
        </li>
      ))}
    </ul>
  )
}
