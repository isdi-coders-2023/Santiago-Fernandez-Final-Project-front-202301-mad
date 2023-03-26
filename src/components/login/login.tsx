import { SyntheticEvent, useMemo } from "react";
// import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useProducts } from "../../hooks/use.products";
import { useUsers } from "../../hooks/use.users";
import { UserStructure } from "../../models/user.model";
import { ProductsRepo } from "../../services/repositories/product.repo";
import { UsersRepo } from "../../services/repositories/user.repo";
import "./login.css";

export function Login() {
  const repoUser = useMemo(() => new UsersRepo(), []);
  const repoProduct = useMemo(() => new ProductsRepo(), []);
  // Without memonization: const repo = new UsersRepo();

  const navigate = useNavigate();

  const { userLogin } = useUsers(repoUser);
  const { gallery } = useProducts(repoProduct);

  const handlerSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formUSer = event.currentTarget;

    const loginForm: Partial<UserStructure> = {
      email: (formUSer.elements[0] as HTMLFormElement).value,
      passwd: (formUSer.elements[1] as HTMLFormElement).value,
    };

    userLogin(loginForm);
    // gallery();

    navigate("/products");
  };
  return (
    <div className="login">
      <form onSubmit={handlerSubmit} className="login__form">
        <h1 className="login__title">Log In to ERP</h1>
        <label className="login__label">
          <div className="login__label">Email sfdezlop@gmail.com</div>
          <input
            type="email"
            name="email"
            placeholder="Enter your corporative email address"
            className="login__input"
            autoComplete=""
            required
          />
        </label>
        <label className="login__label">
          <div className="login__label"> Password santiago</div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="login__input"
            autoComplete=""
            required
          />
        </label>
        <div className="login__keepCheckbox">
          <label>
            <input type="checkbox" />
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
