import { Link } from "react-router-dom";
import "./menu.css";

export type MenuOption = {
  label: string;
  path: string;
};
export const menuOptions: MenuOption[] = [
  { label: "Home", path: "/home" },
  { label: "Dashboard", path: "/dashboard" },
  { label: "Productos", path: "/products" },
  { label: "Movimientos", path: "/movements" },
  { label: "Filtro", path: "/products/filter" },
];

export type MenuProps = {
  options: MenuOption[];
};

export function Menu({ options }: MenuProps) {
  return (
    <div className="menu__container">
      <nav className="menu__nav">
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
    </div>
  );
}
