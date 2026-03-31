import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecipe } from "../context/RecipeContext";
import toast from "react-hot-toast";

const AddRecipe = () => {
  const [form, setForm] = useState({
    name: "",
    cuisine: "",
    images: "",
    ingredients: "",
    instructions: "",
  });
  const { addRecipe } = useRecipe();
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handlerForm = async (e) => {
    e.preventDefault();
    const { name, cuisine, images, ingredients, instructions } = form;
    if (!name || !cuisine || !images || !ingredients || !instructions) {
      toast.error("All fields are required.");
      return;
    }
    const payload = {
      ...form,
      images: images.split(", ").map((i) => i.trim()),
      ingredients: ingredients.split(", ").map((contains) => contains.trim()),
      instructions: instructions
        .split(", ")
        .map((instruction) => instruction.trim()),
    };
    await addRecipe(payload);
    navigate("/", { replace: true });
  };
  return (
    <div className='container py-3'>
      <h2 className='display-5 mb-4'>Add Recipe</h2>
      <div className='row'>
        <div className='col-lg-6 col-md-8 col-sm-12'>
          <form onSubmit={handlerForm} className='p-4 shadow-sm'>
            <label className='mb-1'>Name:</label>
            <input
              className='form-control mb-3'
              name='name'
              placeholder='Enter Name'
              value={form.name}
              onChange={handleChange}
            />
            <label className='mb-1'>Cuisine Type:</label>
            <input
              className='form-control mb-3'
              name='cuisine'
              placeholder='Enter Type e.g Indian'
              value={form.cuisine}
              onChange={handleChange}
            />
            <label className='mb-1'>Image Link:</label>
            <input
              className='form-control mb-3'
              name='images'
              placeholder='Enter URL'
              value={form.images}
              onChange={handleChange}
            />
            <label className='mb-1'>Ingredients:</label>
            <textarea
              className='form-control mb-3'
              name='ingredients'
              placeholder='Enter Ingredients (comma separated)'
              rows='4'
              value={form.ingredients}
              onChange={handleChange}
            />
            <label className='mb-1'>Instructions:</label>
            <textarea
              className='form-control mb-3'
              name='instructions'
              rows='4'
              placeholder='Instructions (comma separated)'
              value={form.instructions}
              onChange={handleChange}
            />
            <button type='submit' className='btn btn-primary w-25'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AddRecipe;
