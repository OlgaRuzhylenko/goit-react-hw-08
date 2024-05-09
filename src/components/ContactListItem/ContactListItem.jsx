import { useDispatch} from "react-redux";
import {deleteContact} from '../../redux/contactsSlice'
import css from "./ContactListItem.module.css";

export default function ContactListItem({ name, number, id}) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id))
 
  return (
    <div>
      <h1>{name}</h1>
      <p>{number}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
