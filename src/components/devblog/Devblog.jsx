//Devblog component to display an article
import React, { Suspense } from "react";
import ErrorBoundary from "../ErrorBoundary";
import { useParams } from "react-router-dom";

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
      <Suspense fallback={<div>Loading article message because react sucks and is no fun and is safe :( ...</div>}>
        <ErrorBoundary>
          <Article />
        </ErrorBoundary>
      </Suspense>
    </div>
  );
}

export default Hi;
