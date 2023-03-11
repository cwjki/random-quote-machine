import quotes from "../data/quotes";

const QuoteBox = () => {
    
    return (
        <div>
            {quotes[0].quote}
            {quotes[0].author}
        </div>
    )
    
}

export default QuoteBox;