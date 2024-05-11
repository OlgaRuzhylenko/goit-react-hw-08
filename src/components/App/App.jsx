import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import Loader from "../Loader/Loader";
import Error from "../Error/Error.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contactsOps.js";
import { selectLoading, selectError } from "../../redux/contactsSlice.js";

import css from "./App.module.css";
import { useState } from "react";
import { useEffect } from "react";

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      {isLoading && <Loader />}
      {isError && <Error></Error>}
      <ContactForm />
      <SearchBox />
      {/* <SearchBox value={filter} onFilter={setFilter} /> */}
      <ContactList />
    </div>
  );
}

// export default function App() {
//   const [contacts, setContacts] = useState(() => {
//     const savedContacts = localStorage.getItem("updatedContacts");
//     if (savedContacts !== null) {
//       return JSON.parse(savedContacts);
//     }
//     return initialContacts;
//   });
//   const [filter, setFilter] = useState("");
//   const visibleContacts = contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );

//   const handleAddContact = (newContact) => {
//     setContacts((prevContacts) => {
//       return [...prevContacts, newContact];
//     });
//   };

//   const handleDeleteTask = (contactId) => {
//     setContacts((prevContacts) => {
//       return prevContacts.filter((contact) => contact.id !== contactId);
//     });
//   };

//   useEffect(() => {
//     localStorage.setItem("updatedContacts", JSON.stringify(contacts));
//   }, [contacts]);

//   return (
//     <div>
//       <h1>Phonebook</h1>
//       <ContactForm onAdd={handleAddContact} />
//       <SearchBox value={filter} onFilter={setFilter} />
//       <ContactList contacts={visibleContacts} onDelete={handleDeleteTask} />
//     </div>
//   );
// }
