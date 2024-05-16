import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

export default function Navigation() {
    return (
        <nav>
            <NavLink className={css.link}>Home</NavLink>
            <NavLink className={css.link}>Contacts</NavLink>
        </nav>
    )
};
