import { Formik, Form, Field } from "formik";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import css from "./ContactForm.module.css";
import {addContact} from '../../redux/contactsSlice'

export default function ContactForm() {
  const dispatch = useDispatch();
  
  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.username,
      number: values.usernumber,
    };
    dispatch(addContact(newContact.name, newContact.number))
    // onAdd(newContact);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{
        username: "",
        usernumber: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.item}>
          <label htmlFor="">Name</label>
          <Field name="username" />
        </div>
        <div className={css.item}>
          <label htmlFor="">Number</label>
          <Field name="usernumber" />
        </div>

        <button type="submit" className={css.formBtn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
