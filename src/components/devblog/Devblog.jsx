//Devblog component to display an article
import React, { Suspense } from "react";
import ErrorBoundary from "../ErrorBoundary";
import { useParams } from "react-router-dom";

import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

import './devblog.css';

function Hi() {
  const { slug } = useParams();
  const bookkeeper = require("../../articles/bookkeeper.json");

  const devblog = bookkeeper.filter((el) => {
    if (el.slug === slug) {
      return el
    }
  })[0];


  const Article = React.lazy(() => import(`../../articles/${devblog.path}/Article.jsx`));

  return (
    <div className="wrapper">
    <Navbar />
      <Suspense fallback={<div>Loading article because react sucks and is no fun and is safe :( ...</div>}>
        <ErrorBoundary>
          <Article />
        </ErrorBoundary>
      </Suspense>
    <Footer />
    </div>
  );
}

export default Hi;
