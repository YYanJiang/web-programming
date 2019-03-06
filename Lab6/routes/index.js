const aboutRouter = require("./about");
const storyRouter = require("./story");
const educationRouter = require("./education");

const constructorMethod = app => {
	app.use("/about", aboutRouter);
	app.use("/story", storyRouter);
	app.use("/education", educationRouter);
	
    app.use("*", (req, res) => {
        res.status(404).json({ error: "Not found" });
    });
};

module.exports = constructorMethod;