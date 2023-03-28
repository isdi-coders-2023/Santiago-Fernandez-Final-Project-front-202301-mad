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
        localStorage.setItem("tokenERP", userLoggedToken);
      }
      console.log("Token in userState: ", userLoggedToken);
      console.log("Token in localStorage: ", localStorage.tokenERP);
      const serverGalleryResponse: any = await repo.readGallery(
        localStorage.token,
        "users"
      );
      await dispatch(loginGallery(serverGalleryResponse.results));
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  const userLoginWithToken = async (
    tokenAtLocalStorage: string,
    urlExtraPath: string
  ) => {
    try {
      const serverResponse: any = await repo.loginWithToken(
        tokenAtLocalStorage,
        urlExtraPath
      );

      await dispatch(loginToken(serverResponse.results[0]));
      await dispatch(loginUser(serverResponse.results[1]));

      if (userLoggedToken !== initialStateToken) {
        await localStorage.setItem("tokenERP", userLoggedToken);
      }
      console.log("Token in userState: ", userLoggedToken);
      console.log("Token in localStorage: ", localStorage.tokenERP);
      // const serverGalleryResponse: any = await repo.readGallery(
      //   localStorage.token,
      //   "users"
      // );
      // await dispatch(loginGallery(serverGalleryResponse.results));
    } catch (error) {
      localStorage.setItem("tokenERP", "Sin Token");
      console.error((error as Error).message);
    }
  };

  return {
    loginToken,
    loginUser,
    loginGallery,
    userLogin,
    userLoginWithToken,
  };
}
