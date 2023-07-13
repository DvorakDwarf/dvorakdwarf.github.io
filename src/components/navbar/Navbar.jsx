import { Outlet, Link } from "react-router-dom";
import './navbar.css';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link className="link" to="/devblog">Devblog</Link></li>
        <li><Link className="link" to="/">Home</Link></li>
        <li><Link className="link" to="/contact">Contact Me</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
