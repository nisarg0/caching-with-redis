const userController = require("../src/userController");

describe("userController", () => {
	describe("getUserDetails", () => {
		it("should return user details if user exists", async () => {
			const user = {
				data: { email: "john@gmail.com", name: "John", role: "admin" },
			};

			const req = { params: { email: "john@gmail.com" } };
			const res = {
				send: jest.fn(),
				status: jest.fn(() => res),
				setHeader: jest.fn(),
			};
			await userController.getUserDetails(req, res);
			expect(res.status).toHaveBeenCalledWith(200);
			expect(res.setHeader).toHaveBeenCalledWith("fromCache", "true");

			expect(res.send).toHaveBeenCalledWith(user);
		});
	});
});
