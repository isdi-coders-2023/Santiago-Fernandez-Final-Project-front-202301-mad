import { Menu } from "../menu/menu";
import "./header.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { menuOptions } from "../../components/menu/menu";
import { useEffect } from "react";
import { useUsers } from "../../hooks/use.users";
import { UsersRepo } from "../../services/repositories/user.repo";
import { Link } from "react-router-dom";

export function Header() {
  const repoUser = new UsersRepo();
  const { userLogin } = useUsers(repoUser);

  // useEffect(() => {
  //   userLogin({});
  // }, []);

  const firstName = useSelector(
    (state: RootState) => state.userState.userLogged.firstName
  );

  return (
    <header className="header">
      <div>
        <h1 className="header__logoCompany">
          <Link to="/">ERP</Link>
        </h1>
      </div>
      <div className="header__menu">
        <Menu options={menuOptions}></Menu>
      </div>
      <div className="header__userLoggedInitials">{firstName}</div>
    </header>
  );
}
