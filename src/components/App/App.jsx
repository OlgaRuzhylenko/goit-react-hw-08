import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import Loader from "../Loader/Loader";
import Error from "../Error/Error.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contactsOps.js";
import { selectLoading, selectError } from "../../redux/contactsSlice.js";

import css from "./App.module.css";
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
      <ContactList />
    </div>
  );
}

