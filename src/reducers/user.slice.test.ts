import { PayloadAction } from "@reduxjs/toolkit";
import { UserStructure } from "../models/user.model";
import { userReducer, UserStateStructure } from "./user.slice";

// const mockUser = {
//   id: "1",
//   email: "foo@foo.foo",
//   passwd: "test",
// };

const mockedInitialState: UserStateStructure = {
  userLoggedToken: "Sin Token",
  userLogged: {} as UserStructure,
  userLoggedMenuOptions: [],
  userLoggedInitials: "",
  users: [],
};

describe("Given the userSlice", () => {
  describe("When the method LOGIN is called", () => {
    test("Then it should return in the state property loginToken the mocked token", () => {
      const mockedAction: PayloadAction = {
        payload: "test",
        type: "users/loginToken",
      };
      const element = userReducer(mockedInitialState, mockedAction);
      expect(element.userLoggedToken).toBe("test");
    });
  });
});
