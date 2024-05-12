import { useDispatch } from "react-redux";
import { deleteContact1 } from "../../redux/contactsOps.js";
import css from "./ContactListItem.module.css";

export default function ContactListItem({ name, number, id }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact1(id));

  return (
    <div>
      <h1>{name}</h1>
      <p>{number}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
