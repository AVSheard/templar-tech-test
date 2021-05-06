const filterByUsername = (usersArray, username) => {
	return usersArray.filter((user) => user.username === username);
};

const addKey = (usersArray, newKey, defaultValue) => {
	return usersArray.map((user) => {
		user[newKey] = undefined;
		return user;
	});
};

module.exports = { filterByUsername, addKey };
