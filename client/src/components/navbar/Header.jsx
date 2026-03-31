import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg bg-body-tertiary'>
        <div className='container'>
          <Link className='navbar-brand' to='/'>
            Recipe Organizer
          </Link>
          <button
            className='navbar-toggler'
            data-bs-target='#recipe'
            data-bs-toggle='collapse'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='recipe'>
            <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <Link className='nav-link active link-primary' to='/'>
                  Recipes
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link link-primary' to='/addRecipe'>
                  Add Recipe
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;
