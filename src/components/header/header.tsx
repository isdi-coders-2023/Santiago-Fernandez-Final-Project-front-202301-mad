import { Menu } from "../menu/menu";
import "./header.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { menuOptions } from "../../components/menu/menu";

export function Header() {
  const firstName = useSelector(
    (state: RootState) => state.userState.userLogged.firstName
  );

  return (
    <header className="header">
      <div>
        <h1 className="header__logoCompany">ERP</h1>
      </div>
      <div className="header__menu">
        <Menu options={menuOptions}></Menu>
      </div>
      <div className="header__userLoggedInitials">{firstName}</div>
    </header>
  );
}
