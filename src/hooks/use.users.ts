import { useDispatch, useSelector } from "react-redux";
import { UserStructure } from "../models/user.model";
import { UsersRepo } from "../services/repositories/user.repo";
import { AppDispatch, RootState } from "../app/store";
import { loginToken, loginUser } from "../reducers/user.slice";

export function useUsers(repo: UsersRepo) {
  const userLoggedToken = useSelector((state: RootState) => state.users);
  const userLogged = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch<AppDispatch>();

  const userLogin = async (loginForm: Partial<UserStructure>) => {
    const serverResponse: any = await repo.loginAtUsersRepo(
      loginForm,
      "users/login"
    );
    try {
      dispatch(loginToken(serverResponse.results[0]));
    } catch (error) {
      console.error((error as Error).message);
    }

    try {
      dispatch(loginUser(serverResponse.results[1]));
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  return {
    userLoggedToken,
    userLogged,
    userLogin,
  };
}
