import { Link } from 'react-router-dom';
import '../../default.css';

function Preview() {
  const meta = require("./meta.json");

  const route = `/devblog/${meta.slug}`;
  const date = new Date(meta.date).toLocaleDateString('en-us', {
    year:"numeric", 
    month:"short",
    day:"2-digit"
    }) // "Jul 2021 Friday"

    return (
        <Link className="preview prev-link" to={route}>
            <img src={require('./images/example.png')}></img>
            <span>Written on: <time>{date}</time></span>
            <p>Non-invasive* Reproducible* Declarative* config management for Nix non-believers</p>
        </Link>
    );
}

export default Preview;