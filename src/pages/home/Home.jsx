import { useState, useEffect } from "react";
import React, { Suspense } from "react";
import ErrorBoundary from "../../components/ErrorBoundary";

import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Masthead from '../../components/masthead/Masthead'

import './home.css';

function Home() {
  const bookkeeper = require("../../articles/bookkeeper.json");

  bookkeeper.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  })

  //Fugly
  const Preview1 = React.lazy(() => import(`../../articles/${bookkeeper[0].path}/preview.jsx`));
  const Preview2 = React.lazy(() => import(`../../articles/${bookkeeper[1].path}/preview.jsx`));
  
  return (
    <div className="wrapper">
    <Masthead />
    <Navbar />
    <div className="home">
      <div className="me cool-bg gallery-item">
        <img className='pfp' src={require('../../images/pfp.jpg')}></img>
        <p>I am me. I like coding AI and using Rust, despite the two not meshing together. Fan of FOSS and linux (almost entirely because of ricing). I am a Russian immigrant in the US currently applying to colleges</p>
        <p>This is my website, which I made primarily to store devblogs for personal notes and to point to for people interested. I also like having a pretty website</p>
        <a href='https://github.com/DvorakDwarf'>See stuff I made on Github</a>
      </div>
      <Suspense fallback={<div>Loading article because react sucks and is no fun and is safe :( ...</div>}>
        <ErrorBoundary>
          <div className="gallery-item cool-bg">
            <Preview1 />
          </div>
          <div className="gallery-item cool-bg">
            <Preview2 />
          </div>
        </ErrorBoundary>
      </Suspense>
      <div className="extra-credits">      
        <span>Color theme is <a href='https://github.com/SweetPastel'>SweetPastel</a></span>
        <span>Art by <a href='https://twitter.com/noellemonade'>@noellemonade</a></span>
        <span>Hard carried by <a href='https://github.com/zeromero-dev'>zeromero</a></span>
      </div>
    </div>
    <Footer />
    </div>
  );
}

export default Home;
