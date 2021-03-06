const express = require("express");
const router = express.Router();
const data = require("../data");
const categoryData = data.categories;
const categoryProductData = data.categoryProducts;

router.get("/", async(req, res) => {
	try{
		const categoriesList = await categoryData.getAllcategories();
		const category_products = [];
		
		 for(var i = 0; i < categoriesList.length;i++){
            console.log(categoriesList[i]._id);
            var category_product = await categoryProductData.getPostById(categoriesList[i]._id);

            category_product.category_name = await categoriesList[i].name;
            await category_products.push(category_product);
		}
		await res.render('index',{"category_products":category_products});
	}
	catch(e){
		console.log(e);
		res.status(500).json({error: e});
	}
});

router.get("/:category_id/:key", async (req, res) => {
    try {
      //const categoryProductList = await categoryProductData.getAllcategories();

      if (req.params.category_id === "all"){
        const recipes = [];
        recipes.push(await recipesData.getRecipesByKey(req.params.key));
      }
      else{
        recipes = await recipesData.getRecipesByCatKey(req.params.category_id,req.params.key);
      }
      //res.json(recipes);
      await res.render('index',{" ":recipes});
    } catch (e) {
      res.status(404).json({ error: "Recipe not found" });
    }
  });

module.exports = router;