const express = require("express");
const router = express.Router();
const data = require("../data");
const recipesData = data.recipes;

router.get("/", async (req, res) => {
    try {
      const recipesList = await recipesData.getAllRecipes();
      res.json(recipesList);
    } catch (e) {
      res.status(500).json({ error: e });
    }
});

router.get("/:id", async (req, res) => {
  try {
    const recipes = await recipesData.getRecipesById(req.params.id);
    res.json(recipes);
  } catch (e) {
    res.status(404).json({ error: "Recipe not found" });
  }
});

router.post("/", async (req, res) => {
  const blogRecipesData = req.body;
  try {
    const { title, ingredients, steps } = blogRecipesData;
    const newRecipes = await recipesData.addRecipes(title, ingredients, steps);
    res.json(newRecipes);
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

router.put("/:id", async (req, res) => {
  const updatedData = req.body;
  try {
    await recipesData.getRecipesById(req.params.id);
  } catch (e) {
    res.status(404).json({ error: "Recipe not found" });
  }

  try {
    const updatedRecipe = await recipesData.replaceRecipes(req.params.id, updatedData);
    res.json(updatedRecipe);
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

router.patch("/:id", async (req, res) => {
    const updatedData = req.body;
    try {
        await recipesData.getRecipesById(req.params.id);
    } catch (e) {
        res.status(404).json({ error: "Recipe not found" }); 
    }
    
    try {
        const updatedRecipe = await recipesData.updateRecipes(req.params.id, updatedData);
        res.json(updatedRecipe);
    } catch (e) {
        res.status(500).json({ error: e });
    }
  });


router.delete("/:id", async (req, res) => {
  try {
    await recipesData.getRecipesById(req.params.id);
  } catch (e) {
    res.status(404).json({ error: "Recipe not found" });
  }
  try {
    await recipesData.removeRecipes(req.params.id);
    // res.json({"delete":"completely"});
    res.sendStatus(200);
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

module.exports = router;