import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectLoading } from "../../redux/contacts/selectors";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";

export default function ContactsPage() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

//    useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);
    
    return (
    <div>
   <h1>Phonebook</h1>
   {/* {isLoading && <Loader />} */}
     {/* {isError && <Error></Error>} */}
    <ContactForm />
      <SearchBox />
     <ContactList/>
  </div>
  );
}
