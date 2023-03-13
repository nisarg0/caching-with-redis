const cacheService = require("../src/cacheService");

cacheService.setupCache();

describe("cacheService", () => {
	describe("setupCache", () => {
		it("should add some dummy data to cache", async () => {
			const user = {
				name: "John",
				role: "admin",
				email: "john@gmail.com",
			};
			const res = await cacheService.getCache(user.email);
			expect(res).toEqual(user);
		});
	});
});
