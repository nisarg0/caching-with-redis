const redis = require("redis");
const config = require("./config");
const cacheExpiry = 60 * 60 * 24; // 1 day

const cacheClient = redis.createClient({
	configFile: "./redis.conf",
});

// Connect to Redis
cacheClient
	.connect()
	.then(() => console.log("Connected to Redis"))
	.catch((err) => console.log("Error connecting to Redis"));

const setCache = async (key, value) => {
	res = await cacheClient.set(key, JSON.stringify(value), "EX", cacheExpiry);
	console.log(res);
	if (res == "OK") console.log("Cache set successfully");
	else console.log("Error setting cache");
};

const getCache = async (key) => {
	var res = await cacheClient.get(key);
	if (res) {
		console.log("Cache hit");
		return JSON.parse(res);
	}
	return null;
};

/**
 * This is a dummy function to setup cache with dummy data
 */
const setupCache = () => {
	// Set up few user profiles and roles
	const userData = config.dummyUserData;
	for (let user in userData) setCache(user.email, user);

	console.log("Cache setup complete");
};

module.exports = {
	setCache,
	getCache,
	setupCache,
};
