import { Menu } from "../menu/menu";
import "./header.css";

export function Header() {
  return (
    <header className="header">
      <h1 className="header__logoCompany">ERP</h1>
      <div className="header__menu">
        <Menu></Menu>
      </div>
      <div className="header__userLoggedInitials">SF</div>
    </header>
  );
}
