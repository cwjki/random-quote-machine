import React, { useState } from "react";
import {quotes, colors} from "../data/quotes";


const QuoteBox = () => {
  const [quoteIndex, setQuoteIndex] = useState(Math.floor(Math.random() * quotes.length));
  const [colorIndex, setColorIndex] = useState(Math.floor(Math.random() * colors.length));


  const onClick = () => {
    let rIndex = Math.floor(Math.random() * quotes.length);
    let rColor = Math.floor(Math.random() * colors.length);
    while (rIndex === quoteIndex) {
      rIndex = Math.floor(Math.random() * quotes.length);
      while (rColor === colorIndex) {
        rColor = Math.floor(Math.random() * colors.length);
      }
    }
    setQuoteIndex(rIndex);
    setColorIndex(rColor);
  }

  return (
    <div className="container-fluid bg-primary vw-100 vh-100" id="quote-box">
      <div className="row align-items-center vh-100">
        <div className="col-6 mx-auto">
          <div className="card shadow rounded-3">
            <div className="card-body d-flex flex-column">
                <p id="text" className="fs-3 text-center fw-semibold"><i className="bi bi-quote" style={{fontSize: 50}}></i>{quotes[quoteIndex].quote}</p>
                <p id="author" className="fs-5 text-center fw-light">- {quotes[quoteIndex].author}</p>
                <div className="row">
                  <div className="col-6">
                    <a id="tweet-quote" href="https://twitter.com/intent/tweet" target="_blank" rel="noreferrer">
                      <button className="btn btn-lg btn-outline-primary rounded-3"><i class="bi bi-twitter"></i></button>
                    </a>
                  </div>
                  <div className="col-6 text-end">
                    <button id="new-quote" className="btn btn-lg btn-outline-primary rounded-3" onClick={onClick}>New Quote</button>
                  </div>
                </div>
            </div>
          </div>
        </div> 
      </div>

    </div>
  )
}

export default QuoteBox;