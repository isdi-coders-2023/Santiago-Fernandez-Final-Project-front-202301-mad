import "./footer.css";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

export function Footer() {
  const token = useSelector((state: RootState) => state.users.userLoggedToken);
  const firstName = useSelector(
    (state: RootState) => state.users.userLogged.firstName
  );
  const lastName = useSelector(
    (state: RootState) => state.users.userLogged.lastName
  );

  return (
    <div className="footer">
      <p>
        {"Last 5 characters of the token: " + token.slice(token.length - 5)}
      </p>
      <p>{"Name: " + firstName + " " + lastName}</p>
    </div>
  );
}
