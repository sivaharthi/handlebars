//express
var express = require("express");
var app = express();
app.listen(6060, startup);
function startup()
{
	console.log("Server started at port 6060");
}

//express-handlebars
var expresshandlebars = require("express-handlebars");
app.engine("hbs", expresshandlebars());
app.set("view engine", "hbs");

//home
app.get("/", fun1);
function fun1(request, response)
{
	var data = {
		"name": "Scott",
		"age": 20,
		"myemp": { "empid":101, "empname":"Smith", "salary": 5000 },
		"admin": true,
		"students":
		[
			{ "studentname":"abc", "marks":70 },
			{ "studentname":"def", "marks":45 },
			{ "studentname":"ghi", "marks":95 },
			{ "studentname":"jkl", "marks":25 }
		]
	};
	response.render("index", data);
}


