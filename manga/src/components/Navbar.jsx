import React from 'react'
import '../App';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='navbar'>
        <div>
          <h5>Book Store App</h5>
       
        </div>
        <div><Link to={"/favorites"}>
        <h5>Your Favorites</h5>
        </Link>
        </div>
        <div><Link to={"/"}>
        <h5>Login/Register</h5>
        </Link>
        </div>
        <div><Link to={"/List"}>
        <h5>Back</h5>
          </Link>
          </div>
          <div><Link to={"/add"}>
            <h5>ADD</h5>
            </Link>
            </div>
    </div>
  )
}
export default Navbar;