import quotes from "../data/quotes";

const QuoteBox = () => {
  
  return (
    <div className="container">
      <div className="row align-items-center vh-100">
        <div className="col-6 mx-auto">
          <div className="card shadow border">
            <div className="card-body d-flex flex-column">
                <p className="fs-3 text-center fw-semibold">"{quotes[0].quote}"</p>
                <p className="fs-5 text-end fw-light">{quotes[0].author}</p>
                <div className="row">
                  <div className="col-6"></div>
                  <div className="col-6"></div>
                </div>
            </div>
          </div>
        </div> 
      </div>

      


    </div>
  )
}

export default QuoteBox;