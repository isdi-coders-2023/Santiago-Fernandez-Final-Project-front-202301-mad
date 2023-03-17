import { Link } from "react-router-dom";
import { menuOptions } from "../../models/menu.model";
import "./menu.css";

export function Menu() {
  return (
    <nav className="menu__container">
      <ul className="menu__list">
        {menuOptions.map((item) => (
          <li key={item.label} className="menu__option">
            <Link to={item.path as string} className="menu__link">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
