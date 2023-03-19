import { UserServerResponseType, UserStructure } from "../../models/user.model";
import { url_def } from "../../config";

export class UsersRepo {
  url: string;
  constructor() {
    this.url = url_def;
  }

  async loginAtUsersRepo(
    loginForm: Partial<UserStructure>,
    urlExtraPath: string
  ): Promise<UserServerResponseType> {
    const url = this.url + "/" + urlExtraPath;

    const resp = await fetch(url, {
      method: "POST",
      body: JSON.stringify(loginForm),
      headers: {
        "Content-type": "application/json",
      },
    });
    if (!resp.ok)
      throw new Error(`Error http: ${resp.status} ${resp.statusText}`);

    const data = await resp.json();

    return data;
  }
}
