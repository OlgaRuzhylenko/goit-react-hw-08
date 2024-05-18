import { useSelector } from "react-redux";
import { selectedUser } from "../../redux/auth/selectors";

export default function UserMenu() {
  const user = useSelector(selectedUser);
  return (
    <div>
      <p>Welcome, {user.name}</p>
      <button type="button">Logout</button>
    </div>
  );
}
