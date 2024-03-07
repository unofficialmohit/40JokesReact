
import React from "react";
import ReactDOM from "react-dom";
export default function Joke({number,question,punchline}){
    return(
        <div className="container">
        <h2>JOKE NO {number}</h2>
        {question && <div className="question">{question}
        </div>}
         <div className="punchline"> {punchline}
        </div>
        </div>
    );
}
