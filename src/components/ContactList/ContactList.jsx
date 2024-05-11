import ContactListItem from "../ContactListItem/ContactListItem";
import css from "./ContactList.module.css";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { selectContacts, selectFilteredContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import { useSelector } from "react-redux";

export default function ContactList() {
// const contacts = useSelector(selectFilteredContacts)

  const contacts = useSelector(selectContacts);
  const nameFilter = useSelector(selectNameFilter);

  if (!contacts) {
    return;
  }

  const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(nameFilter.toLowerCase()))
  // const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(nameFilter ? nameFilter.toLowerCase() : ""))


    return (
    <ul>
      {filteredContacts.map((contact) => (
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
  );
}
