import React, { useState } from "react";
import { quotes, colors } from "../data/quotes";

const QuoteBox = () => {
  const [quoteIndex, setQuoteIndex] = useState(
    Math.floor(Math.random() * quotes.length)
  );
  const [colorIndex, setColorIndex] = useState(
    Math.floor(Math.random() * colors.length)
  );

  const onClick = () => {
    let rIndex = Math.floor(Math.random() * quotes.length);
    let rColor = Math.floor(Math.random() * colors.length);
    while (rIndex === quoteIndex || rColor === colorIndex) {
      rIndex = Math.floor(Math.random() * quotes.length);
      rColor = Math.floor(Math.random() * colors.length);
    }
    setQuoteIndex(rIndex);
    setColorIndex(rColor);
  };

  return (
    <div
      className="container-fluid vw-100 vh-100"
      style={{
        backgroundColor: colors[colorIndex],
        transition: "all 1.5s ease",
        WebkitTransition: "all 1.5s ease",
        MozTransition: "all 1.5s ease",
      }}
    >
      <div className="row align-items-center vh-100">
        <div
          className="col-xl-5 col-md-6 col-sm-6 col-11 mx-auto"
          id="quote-box"
        >
          <div className="card shadow rounded-4">
            <div className="card-body d-flex flex-column">
              <p
                style={{
                  color: colors[colorIndex],
                  transition: "all 1.5s ease",
                  WebkitTransition: "all 1.5s ease",
                  MozTransition: "all 1.5s ease",
                }}
                id="text"
                className="fs-1 text-center fw-semibold"
              >
                <i className="bi bi-quote"></i>
                {quotes[quoteIndex].quote}
              </p>
              <p
                style={{
                  color: colors[colorIndex],
                  transition: "all 1.5s ease",
                  WebkitTransition: "all 1.5s ease",
                  MozTransition: "all 1.5s ease",
                }}
                id="author"
                className="fs-4 text-center fw-light"
              >
                - {quotes[quoteIndex].author}
              </p>
              <div className="row p-1">
                <div className="col-6">
                  <a
                    id="tweet-quote"
                    target="_blank"
                    rel="noreferrer"
                    href={`https://twitter.com/intent/tweet?hashtags=quotes&text="${quotes[quoteIndex].quote}" - ${quotes[quoteIndex].author}`}
                  >
                    <button
                      className="btn rounded-3"
                      style={{
                        backgroundColor: colors[colorIndex],
                        color: "white",
                        transition: "all 1.5s ease",
                        WebkitTransition: "all 1.5s ease",
                        MozTransition: "all 1.5s ease",
                      }}
                    >
                      <i class="bi bi-twitter"></i>
                    </button>
                  </a>
                </div>
                <div className="col-6 text-end">
                  <button
                    style={{
                      backgroundColor: colors[colorIndex],
                      color: "white",
                      transition: "all 1.5s ease",
                      WebkitTransition: "all 1.5s ease",
                      MozTransition: "all 1.5s ease",
                    }}
                    id="new-quote"
                    className="btn rounded-3"
                    onClick={onClick}
                  >
                    New Quote
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <nav className="navbar pb-2 ">
            <div className="container-fluid justify-content-center">
              <span className="navbar-brand fs-6 text-light">by cwjki</span>
              <a
                className="navbar-brand"
                href="https://github.com/cwjki"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-github text-light"></i>
              </a>
              <a
                className="navbar-brand"
                href="https://www.linkedin.com/in/juan-carlos-casteleiro/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-linkedin text-light"></i>
              </a>
            </div>
          </nav>

          {/* <div className="row mt-3">
            <a
              className="btn btn-muted btn-outlined"
              id="cwjki"
              href="https://github.com/cwjki"
              target="_blank"
              rel="noreferrer"
            >
              <p className="text-center text-light fs-5">Made by cwjki </p>
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default QuoteBox;
