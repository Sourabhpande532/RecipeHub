const mongoose = require("mongoose");
const RecipeSchema = new mongoose({});
module.exports = mongoose.model("Recipe", RecipeSchema);
