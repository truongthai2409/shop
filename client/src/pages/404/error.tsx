import React from "react";
import "./error.scss"
import { Link } from "react-router-dom";

const Page404: React.FC = () => {
  return (
    <div className="page-404">
      <h1>404 Error Page</h1>
      <p className="zoom-area">
        <b>CSS</b> animations to make a cool 404 page.{" "}
      </p>
      <section className="error-container">
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
        <span className="zero">
          <span className="screen-reader-text">0</span>
        </span>
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
      </section>
      <div className="link-container">
        <Link
          to="/"
          className="more-link"
        >
          Navigate to Home
        </Link>
      </div>
    </div>
  );
};

export default Page404;
