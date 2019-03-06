const path = require("path");
const formRoutes = require("./form");
const resultRoutes = require("./result");

function constructorMethod(app) {
	app.use("/", formRoutes);
	app.use("/result", resultRoutes);

	app.use("*", (req, res) => {
		res.status(404).json({error: "Route does not exist."});
	});
};

module.exports = constructorMethod;