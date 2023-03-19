import { Menu } from "../menu/menu";
import "./header.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export function Header() {
  const firstName = useSelector(
    (state: RootState) => state.users.userLogged.firstName
  );

  return (
    <header className="header">
      <h1 className="header__logoCompany">ERP</h1>
      <div className="header__menu">
        <Menu></Menu>
      </div>
      <div className="header__userLoggedInitials">{firstName}</div>
    </header>
  );
}
