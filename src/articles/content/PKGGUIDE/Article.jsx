import '../../default.css';
import React from "react";

function Hi() {
  const meta = require("./meta.json");

  const date = new Date(meta.date).toLocaleDateString('en-us', {
    year:"numeric", 
    month:"short",
    day:"2-digit"
    }) // "Jul 2021 Friday"


  return (
    <div className="wrapper">
     <article>
      <div className="cover">
        <h1>{meta.title}</h1>
        <time>{date}</time>
        <img className='thumbnail' src={require('./images/pkglogo.jpg')}></img>
        <hr/>
      </div>
      <main>  
        
      </main>
    </article>
    </div>
  );
}

export default Hi;
