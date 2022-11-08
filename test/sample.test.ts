/**
 * @jest-environment jsdom
 */
import { Magic } from "magic-sdk";
import { rejectFunction, resolveFunction } from "../src/normal_promise";

describe("login", () => {
  const magic = new Magic(process.env.MAGIC_API_KEY!, {
    testMode: true,
  });
  // Error: thrown: "Exceeded timeout of 5000 ms for a test.
  // Use jest.setTimeout(newTimeout) to increase the timeout value, if this is a long-running test."
  test("login", async () => {
    const didToken = await magic.auth.loginWithMagicLink({
      email: "test+success@magic.link",
    });
    expect(didToken).toBe("success");
  });
});

describe("login2", () => {
  const magic = new Magic(process.env.MAGIC_API_KEY!, {
    testMode: true,
  });
  // Error: thrown: "Exceeded timeout of 5000 ms for a test.
  // Use jest.setTimeout(newTimeout) to increase the timeout value, if this is a long-running test."
  test("login", async () => {
    await expect(
      magic.auth.loginWithMagicLink({ email: "test+success@magic.link" })
    ).resolves.toBe("success");
  });
});

describe("promise", () => {
  test("resolve", async () => {
    const ret = await resolveFunction();
    expect(ret).toBe("success");
  });
  test("reject", async () => {
    await expect(rejectFunction()).rejects.toThrowError(Error);
  });
});
