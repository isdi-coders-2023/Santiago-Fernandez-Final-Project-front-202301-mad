import { useDispatch, useSelector } from "react-redux";
import { UserStructure } from "../models/user.model";
import { UsersRepo } from "../services/repositories/user.repo";
import { AppDispatch, RootState } from "../store/store";
import {
  initialState,
  loginGallery,
  loginToken,
  loginUser,
} from "../reducers/user.slice";

export function useUsers(repo: UsersRepo) {
  const userLoggedToken = useSelector(
    (state: RootState) => state.userState.userLoggedToken
  );

  const initialStateToken = initialState.userLoggedToken;

  const dispatch = useDispatch<AppDispatch>();

  const userLogin = async (loginForm: Partial<UserStructure>) => {
    const serverLoginResponse: any = await repo.readTokenAndUser(
      loginForm,
      "users/login"
    );

    try {
      await dispatch(loginToken(serverLoginResponse.results[0]));
      await dispatch(loginUser(serverLoginResponse.results[1]));

      if (userLoggedToken !== initialStateToken) {
        localStorage.setItem("token", userLoggedToken);
      }
      console.log("Token in userState: ", userLoggedToken);
      console.log("Token in localStorage: ", localStorage.token);
      const serverGalleryResponse: any = await repo.readGallery(
        localStorage.token,
        "users"
      );
      await dispatch(loginGallery(serverGalleryResponse.results));
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  return {
    loginToken,
    loginUser,
    loginGallery,
    userLogin,
  };
}
