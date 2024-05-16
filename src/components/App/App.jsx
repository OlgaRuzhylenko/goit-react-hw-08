import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import Loader from "../Loader/Loader";
import Error from "../Error/Error.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations.js";
import { selectLoading, selectError } from "../../redux/contacts/selectors.js";
import Layout from '../Layout/Layout.jsx'

import { useEffect } from "react";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(()=> import('../../pages/HomePage/HomePage.jsx'));
const RegisterPage = lazy(()=> import('../../pages/RegisterPage/RegisterPage.jsx'));
const LoginPage = lazy(()=> import('../../pages/LoginPage/LoginPage.jsx'));
const ContactsPage = lazy(()=> import('../../pages/ContactsPage/ContactsPage.jsx'));

export default function App() {

  // const dispatch = useDispatch();
  // const isLoading = useSelector(selectLoading);
  // const isError = useSelector(selectError);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  // return (
  //   <div>
  //     <h1>Phonebook</h1>
  //     {isLoading && <Loader />}
  //     {isError && <Error></Error>}
  //     <ContactForm />
  //     <SearchBox />
  //     <ContactList />
  //   </div>
  // );

  return(
    <Layout>
<Suspense fallback={null}>
<Routes>
  <Route path="/" element={HomePage}/>
  <Route path="/register" element={RegisterPage}/>
  <Route path="/login" element={LoginPage}/>
  <Route path="/contacts" element={ContactsPage}/>
</Routes>
</Suspense>
    </Layout>
  )
}
