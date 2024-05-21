import { Formik, Form, Field } from "formik";
import {register} from '../../redux/auth/operations'
import { useDispatch } from "react-redux";
import css from './RegistrationForm.module.css'
import { toast } from "react-hot-toast";

export default function RegistrationForm() {
const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    // values це newUser із register із auth/operations
    dispatch(register(values))
    .unwrap()
    .then((data) => {
      toast.success("Success!!!");
    })
    .catch((error) => {
      toast.error("Try again");
    });
    actions.resetForm();
  };

  return (
      <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Username
          <Field type="text" name="name" />
        </label>
        <label className={css.label}>
          Email
          <Field type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <Field type="password" name="password" />
        </label>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}
