import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import css from "./ContactForm.module.css";
import { addContact1 } from "../../redux/contacts/operations";

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const newContact = {
      name: values.username,
      number: values.usernumber,
    };
    dispatch(addContact1(newContact));

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
