const request = require("supertest");
const { app } = require("../index");

describe("GET /user/:email", () => {
	it("should return user details if user exists", async () => {
		const user = { name: "John", email: "john@gmail.com", role: "admin" };
		const res = await request(app).get("/user/john@gmail.com");

		expect(res.status).toBe(200);
		expect(res.header["fromcache"]).toEqual("true");
		expect(res.body.data).toEqual(user);
	});
});
