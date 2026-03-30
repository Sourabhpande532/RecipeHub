const express = require("express");
const app = express.Router();
const {
  addRecipeToDatabase,
  obtainedAllRecipe,
} = require("../controller/recipeCtrl");

app.get("/recipe", obtainedAllRecipe);
app.post("/recipe/add", addRecipeToDatabase);

module.exports = app;
