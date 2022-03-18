import request from "supertest";
import app from "../index";

describe("GET / - Demo api endpoint", () => {
  it("Hello API request", async () => {
    const result = await request(app).get("/");
    expect(result.text).toContain("⚡");
    expect(result.statusCode).toEqual(200);
  });
});
