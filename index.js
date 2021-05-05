const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
/** 
* Brief,

Create a GET enpoint that returns a 
user from the array from the urlPARAM id
* Create an POST endpoint that accepts
*  a username and password and then 
*  returns the user object below if
   the password is the same

Create an POST enpoint that adds 
username and password to the
users array
*/
const users = [
	{
		id: 0,
		username: "test",
		password: "test",
	},
	{
		id: 1,
		username: "admin",
		password: "test",
	},
];
module.exports = app;
