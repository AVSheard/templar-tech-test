const filterByUsername = (usersArray, username) => {
	return usersArray.filter((user) => user.username === username);
};

const addKey = (usersArray, newKey, defaultValue) => {
	return [];
};

module.exports = { filterByUsername, addKey };
