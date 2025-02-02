import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <h1>NF</h1>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/posts">Posts</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
