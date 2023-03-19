import { UsersRepo } from "./user.repo";

describe("Given the users repo", () => {
  let repo: UsersRepo;

  beforeEach(() => {
    repo = new UsersRepo();
  });

  describe("when we call the loginAtUsersRepo function", () => {
    test("then if the fetch is OK it should return the data", async () => {
      const mockValue = {};

      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue(mockValue),
      });
      const result = await repo.loginAtUsersRepo({}, "/test");
      expect(result).toEqual(mockValue);
    });
    test("then if the fetch is NOT OK it throw error", async () => {
      global.fetch = jest.fn().mockResolvedValue("Error test");
      const result = repo.loginAtUsersRepo({ id: "1" }, "/test");
      await expect(result).rejects.toThrow();
    });
  });
});
