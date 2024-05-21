import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  changeNameFilter,
  changeNumberFilter,
} from "../../redux/filters/slice";
import {
  selectNameFilter,
  selectNumberFilter,
} from "../../redux/filters/selectors";

export default function SearchBox() {
  const dispatch = useDispatch();
  const nameFilter = useSelector(selectNameFilter);
  const numberFilter = useSelector(selectNumberFilter);

  const handleNameChange = (evt) => {
    dispatch(changeNameFilter(evt.target.value));
  };

  const handleNumberChange = (evt) => {
    dispatch(changeNumberFilter(evt.target.value));
  };

  return (
    <div className={css.container}>
      <p>Find contacts by name</p>
      <input
        className={css.searchInput}
        type="text"
        value={nameFilter}
        onChange={handleNameChange}
      />
      {/* <p>Find contacts by number</p>
      <input
        className={css.searchInput}
        type="text"
        value={numberFilter}
        onChange={handleNumberChange}
      /> */}
    </div>
  );
}
