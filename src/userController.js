const cacheService = require("./cacheService");

/**
 * User Details are fetched from cache if available or else from db.
 */
const getUserDetails = async (req, res) => {
	try {
		const email = req.params.email;
		console.log(email);
		var user = await cacheService.getCache(email);
		console.log(user);
		if (!user) {
			// db call
			user = {
				name: "user1",
				role: "user",
				email: email,
			};
			await cacheService.setCache(email, user);
			res.setHeader("fromCache", "false");
		} else {
			res.status(200).setHeader("fromCache", "true");
		}
		res.send({ data: user });
	} catch (err) {
		console.log(err);
		res.status(500).send({ message: "Error retrieving user" });
	}
};

module.exports = {
	getUserDetails,
};
