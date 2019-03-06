const mongoCollections = require("../config/mongoCollections");
const recipes = mongoCollections.recipes;
const uuid = require("uuid/v4");

const exportedMethods = {

  async getAllRecipes() {
    const recipeCollection = await recipes();
    var arr = [];
    await recipeCollection.find({}).forEach( function(myDoc) { 
        arr.push({_id:myDoc._id,title:myDoc.title});
      } 
    );
    return arr;
    // return await recipeCollection.find({}).toArray();
  },

  async getRecipesById(id) {
    if (!id || id === undefined) throw "Please provide an ID";
    const recipeCollection = await recipes();
    const recipe = await recipeCollection.findOne({ _id: id });
    if (!recipe) throw "Recipe not found";
    return recipe;
  },


  async addRecipes(title, ingredients, steps) {
    if (typeof title !== "string") throw "No title provided";
    if (!Array.isArray(ingredients)) {ingredients = [];}
    if (!Array.isArray(steps)) {steps = [];}

    const recipeCollection = await recipes();

    let newRecipe = {
        _id: uuid(),
        title: title,
        ingredients: ingredients,
        steps: steps,
    };

    const newInsertInformation = await recipeCollection.insertOne(newRecipe);
    const aa =  await this.getRecipesById(newRecipe._id);
    return aa;
  },



  async replaceRecipes(id, updatedRecipe) {
    const recipeCollection = await recipes();
    if(typeof id !== 'string') throw "id is invalid";
    if(!updatedRecipe.title || typeof updatedRecipe.title !== "string") throw "Title is invalid";
    if(!updatedRecipe.ingredients || Array.isArray(updatedRecipe.ingredients) == false) throw "Ingredients are invalid";
    if(!updatedRecipe.steps || Array.isArray(updatedRecipe.steps) == false) throw "Steps are invalid";
    for (i = 0; i< updatedRecipe.ingredients.length;i++){
        if(!updatedRecipe.ingredients[i].name || typeof updatedRecipe.ingredients[i].name !== "string") throw `Ingredient name ${updatedRecipe.ingredients[i].name} is invalid`;
        if(!updatedRecipe.ingredients[i].amount || typeof updatedRecipe.ingredients[i].amount !== "string") throw `Ingredient amount ${updatedRecipe.ingredients[i].amount} is invalid`;   
    }
    for (s = 0; s< updatedRecipe.steps.length;s++)
        if(!updatedRecipe.steps[i] || typeof updatedRecipe.steps[i] !== "string") throw `Step ${updatedRecipe.steps[i]} is invalid`;

    const query = {  _id: id };
    await recipeCollection.replaceOne(query, updatedRecipe,true);
    return await this.getRecipesById(id);
  },


  async updateRecipes(id, updatedRecipe) {
    const recipeCollection = await recipes();
    const updatedRecipesData = {};
    if(typeof id !== 'string') throw "id is invalid";
    if (updatedRecipe.title) { 
        if(typeof updatedRecipe.title !== "string") throw "Title is invalid";
        updatedRecipesData.title = updatedRecipe.title;
      }
    if (updatedRecipe.ingredients) {
        if(Array.isArray(updatedRecipe.ingredients) == false) throw "Ingredients are invalid";
        for (i = 0; i< updatedRecipe.ingredients.length;i++){
            if(!updatedRecipe.ingredients[i].name || typeof updatedRecipe.ingredients[i].name !== "string") throw `Ingredient name ${updatedRecipe.ingredients[i].name} is invalid`;
            if(!updatedRecipe.ingredients[i].amount || typeof updatedRecipe.ingredients[i].amount !== "string") throw `Ingredient amount ${updatedRecipe.ingredients[i].amount} is invalid`;   
        }
        updatedRecipesData.ingredients = updatedRecipe.ingredients;
      }
    if (updatedRecipe.steps) {
        if(Array.isArray(updatedRecipe.steps) == false) throw "Steps are invalid";
        for (s = 0; s< updatedRecipe.steps.length;s++)
            if(!updatedRecipe.steps[s] || typeof updatedRecipe.steps[s] !== "string") throw `Step ${updatedRecipe.steps[s]} is invalid`;
        updatedRecipesData.steps = updatedRecipe.steps;
    }

    let updateCommand = {
      $set: updatedRecipesData
    };

    const query = {
      _id: id
    };

    await recipeCollection.updateOne(query, updateCommand);
    return await this.getRecipesById(id);
  },


  async removeRecipes(id) {
    if (!id || id === undefined) throw "id is invalid";
    const recipeCollection = await recipes();
    const deletionInfo = await recipeCollection.removeOne({ _id: id });
    if (deletionInfo.deletedCount === 0) {
      throw `Could not delete recipe with id of ${id}`;
    }
  },


};

module.exports = exportedMethods;