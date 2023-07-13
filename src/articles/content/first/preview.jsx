import '../../default.css';

function Preview() {
  const meta = require("./meta.json");

  const date = new Date(meta.date).toLocaleDateString('en-us', {
    year:"numeric", 
    month:"short",
    day:"2-digit"
    }) // "Jul 2021 Friday"

    return (
        <div className="preview cool-bg">
            <img src={require('./images/isg.gif')}></img>
            <span>Written on: <time>{date}</time></span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe aspernatur beatae quo, quasi non enim qui vel repellat sapiente illum sint dignissimos deleniti aliquid magni in laborum corrupti reiciendis eveniet.</p>
        </div>
    );
}

export default Preview;