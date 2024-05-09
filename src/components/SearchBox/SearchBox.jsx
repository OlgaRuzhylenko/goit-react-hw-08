import css from "./SearchBox.module.css";
import { useDispatch, useSelector} from "react-redux";
import {selectNameFilter, changeFilter} from '../../redux/filtersSlice'

export default function SearchBox() {
  const dispatch = useDispatch();
  const reduxValue = useSelector(selectNameFilter);

  return (
    <div className={css.container}>
      <p>Find contacts by name</p>
      <input
        className={css.searchInput}
        type="text"
        value={reduxValue}
        onChange={(evt) => dispatch(changeFilter(evt.target.value))}
      />
    </div>
  );
}
