import "./footer.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export function Footer() {
  const token = useSelector(
    (state: RootState) => state.userState.userLoggedToken
  );
  const firstName = useSelector(
    (state: RootState) => state.userState.userLogged.firstName
  );
  const lastName = useSelector(
    (state: RootState) => state.userState.userLogged.lastName
  );

  // const errorToShow =console.error(new Error("Whoops, something bad happened"));

  return (
    <div className="footer">
      <p>
        {"Last 5 characters of the token at State: " +
          token.slice(token.length - 5)}
      </p>
      <p>{"Name: " + firstName + " " + lastName}</p>
      {/* <p>{errorToShow}</p> */}
      <p>
        {"Last 5 characters of the token at localStorage: " +
          localStorage.getItem("tokenERP")}
      </p>
    </div>
  );
}
