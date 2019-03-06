// const path = require("path");
const palindromesRoutes = require("./palindromes");

function constructorMethod(app) {
	app.use("/palindromes", palindromesRoutes);

	app.use("*", (req, res) => {
		res.redirect("/palindromes/static");
		res.status(404).json({error: "Route does not exist."});
	});
};

module.exports = constructorMethod;