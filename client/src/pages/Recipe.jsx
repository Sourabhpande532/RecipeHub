import { useState } from "react";
import { useRecipe } from "../context/RecipeContext";
import { useNavigate } from "react-router-dom";

const Recipe = () => {
  const [search, setSearch] = useState("");
  const { recipe, loading, deleteRecipe } = useRecipe();
  const navigate = useNavigate();

  const filterRecipe = recipe.filter((recipe) =>
    recipe.name.toLowerCase().includes(search.toLowerCase()),
  );

  if (loading) {
    return <h3 className='text-center mt-5'>Loading...</h3>;
  }
  return (
    <div className='container mt-4'>
      {/* Search */}
      <div className='mb-4'>
        <input
          type='text'
          className='form-control'
          onChange={(e) => setSearch(e.target.value)}
          placeholder='Search by recipe name...'
        />
      </div>

      <h3 className='mb-4'>All Recipes:</h3>
      {filterRecipe.length === 0 && <h2>No data found.</h2>}
      <div className='row'>
        {filterRecipe.map((item) => (
          <div key={item._id} className='col-lg-3 col-md-6 col-sm-12 mb-4'>
            <div
              className='card h-100 shadow-sm recipe-card'
              style={{ cursor: "pointer" }}
              onClick={() => navigate(`/details/${item._id}`)}>
              <img
                src={item.images[0]}
                className='card-img-top'
                alt={item.name}
                style={{ height: "220px", objectFit: "cover" }}
              />

              <div className='card-body d-flex flex-column'>
                <h5 className='card-title'>{item.name}</h5>

                <p className='mb-1'>
                  <strong>Cuisine Type:</strong> {item.cuisine}
                </p>

                <p className='text-primary mb-1'>
                  Ingredients: See Recipe &gt;
                </p>
                <p className='text-primary'>Instructions: See Recipe &gt;</p>

                <button
                  className='btn btn-danger mt-auto'
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteRecipe(item._id)
                  }}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Recipe;
