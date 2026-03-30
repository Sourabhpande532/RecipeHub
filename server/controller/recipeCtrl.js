const Recipe = require("../model/Recipe");
exports.obtainedAllRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.find();
    if (recipe.length != 0) {
      res.status(200).json({
        success: true,
        message: "Fetched Recipe",
        data: { recipe },
      });
    } else {
      res.status(404).json({ success: true, message: "Job not found." });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      success: false,
      error: error,
      message: "Failed to fetch recipe error",
    });
  }
};

exports.addRecipeToDatabase = async (req, res) => {
  try {
    const { name, cuisine, ingredients, instructions, images } = req.body;
    if (!name || !cuisine || !ingredients || !instructions || !images) {
      return res
        .status(400)
        .json({ success: false, message: "required missing fields" });
    }
    const newRecipe = new Recipe(req.body);
    await newRecipe.save();
    return res.status(201).json({
      success: true,
      message: "Added Successfully",
      data: { recipe: newRecipe },
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, error: error, message: "Server create error" });
    console.error(error);
  }
};

exports.deleteRecipe = async (req, res, next) => {
  try {
    await Recipe.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: "Deleted successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({success:false, message: 'Delete server error'})
  }
};
