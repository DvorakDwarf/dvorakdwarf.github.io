import '../../default.css';
import './theme.css';
import React from "react";

import Navbar from '../../../components/navbar/Navbar';
import Footer from '../../../components/footer/Footer';

function Hi() {
  const meta = require("./meta.json");

  const date = new Date(meta.date).toLocaleDateString('en-us', {
    year:"numeric", 
    month:"short",
    day:"2-digit"
    }) // "Jul 2021 Friday"


  return (
    <div className="BLOBGEN">
      <Navbar />
     <article>
      <div className="cover">
        <h1>{meta.title}</h1>
        <time>{date}</time>
        <img className='thumbnail' src={require('./images/blobgenexample.png')}></img>
        <hr/>
      </div>
      <main>  
        <p>
          WIP, COME BACK SOON
        </p>
      </main>
    </article>
    <Footer />
    </div>
  );
}

export default Hi;
