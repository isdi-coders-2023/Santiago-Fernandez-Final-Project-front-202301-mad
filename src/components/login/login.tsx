// import { SyntheticEvent, useMemo } from "react";
import { SyntheticEvent } from "react";
import { Link } from "react-router-dom";
import "./login.css";

// import { useUsers } from "../../hooks/use-users";
// import { User } from "../../model/user";
// import { UsersRepo } from "../../services/user-repo";

export function Login() {
  // const repo = useMemo(() => new UsersRepo(), []);

  // const { userLogin } = useUsers(repo);

  const handlerSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    // const formUSer = event.currentTarget;

    // const loginForm: Partial<User> = {
    //   email: (formUSer.elements[0] as HTMLFormElement).value,
    //   password: (formUSer.elements[1] as HTMLFormElement).value,
    // };

    // userLogin(loginForm);
  };

  return (
    <div className="login">
      <form onSubmit={handlerSubmit} className="login__form">
        <h1 className="login__title">Log In to ERP</h1>
        <label className="login__label">
          <div className="login__label">Email</div>
          <input
            type="email"
            name="email"
            placeholder="Enter your corporative email address"
            className="login__input"
            required
          />
        </label>
        <label className="login__label">
          <div className="login__label"> Password</div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="login__input"
            required
          />
        </label>
        <div className="login__keepCheckbox">
          <label>
            <input type="checkbox" id="loginKeepCheckbox" />
            Keep me logged
          </label>
        </div>

        <button type="submit" className="login__button">
          Log In
        </button>
        <div>
          <Link to="/register" className="login__register">
            Forgot your password?
          </Link>
        </div>
      </form>
    </div>
  );
}
