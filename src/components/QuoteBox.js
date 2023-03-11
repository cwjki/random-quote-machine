import React, { useState } from "react";
import quotes from "../data/quotes";


const QuoteBox = () => {
  const [index, setIndex] = useState()

  const onClick = () => {
    let rIndex = Math.floor(Math.random() * quotes.length);
  }

  return (
    <div className="container">
      <div className="row align-items-center vh-100">
        <div className="col-6 mx-auto">
          <div className="card shadow rounded-3">
            <div className="card-body d-flex flex-column">
                <p className="fs-3 text-center fw-semibold">"{quotes[0].quote}"</p>
                <p className="fs-5 text-center fw-light">{quotes[0].author}</p>
                <div className="row">
                  <div className="col-6">
                    <a href="twitter">
                      <button className="btn btn-lg btn-outline-primary rounded-4"><i class="bi bi-twitter"></i></button>
                    </a>
                    <a class="btn btn-primary btn-lg " href="twitter" role="button">
                      <i class="bi bi-twitter"></i>
                    </a>
                  </div>
                  <div className="col-6 text-end">
                    <button className="btn btn-lg btn-outline-primary rounded-4" onClick={this.onClick}>New Quote</button>
                  </div>
                </div>
            </div>
          </div>
        </div> 
      </div>

    </div>
  )
}

// class QuoteBox1 extends React.Component{
//   constructor(props) {
//     super(props)
//     this.state = {
//       rIndex: 0
//     };
//     this.onClick = this.onClick.bind(this);
//   }


  

//   render() {
    
//   }
// }



export default QuoteBox;