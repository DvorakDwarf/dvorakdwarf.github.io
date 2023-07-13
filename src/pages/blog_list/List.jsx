import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";

import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Masthead from '../../components/masthead/Masthead'

import './list.css';

let list = ["a", "b", "c"];

function List() {
  const bookkeeper = require("../../articles/bookkeeper.json");

  return (
    <div className="wrapper">
    <Masthead />
    <Navbar />
    <div className="list">
      <ul>
        {bookkeeper.map((article, idx) =>{
          const title = article.title;
          const slug = article.slug;
          const date = new Date(article.date).toLocaleDateString('en-us', {
            year:"numeric", 
            month:"short",
            day:"2-digit"
            }) // "Jul 2021 Friday"
          
          return <li><Link to={`/devblog/${slug}`} key={idx}>{title}</Link> <time> - {date}</time> </li>
        })}
      </ul>
    </div>
    <Footer />
    </div>
  );
}

export default List;
