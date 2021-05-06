const filterByUsername = (usersArray, username) => {
	return usersArray.filter((user) => user.username === username);
};

const addKey = () => {};

module.exports = { filterByUsername, addKey };
