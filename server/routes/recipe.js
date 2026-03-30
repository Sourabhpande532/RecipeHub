const express = require("express");
const app = express.Router();
const {
  addRecipeToDatabase,
  obtainedAllRecipe,
  deleteRecipe,
} = require("../controller/recipeCtrl");

app.get("/recipe", obtainedAllRecipe);
app.post("/recipe/add", addRecipeToDatabase);
app.delete("/recipe/:id", deleteRecipe);

module.exports = app;
