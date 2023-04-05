import "./footer.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export function Footer() {
  const errorLogArray = useSelector(
    (state: RootState) => state.appState.errorLog
  );
  const firstName = useSelector(
    (state: RootState) => state.userState.userLogged.firstName
  );
  const lastName = useSelector(
    (state: RootState) => state.userState.userLogged.lastName
  );

  return (
    <>
      <div className="footer">
        <p>{"Name: " + firstName + " " + lastName}</p>
      </div>
    </>
  );
}
