import React from "react";
import "./Question.css";

const Questions = ({ question, option, handleClick, answer }) => {
  return (
    <div>
      <h1>{question}</h1>
      <ul>
        {option.map((opt, index) => (
          <li
            key={index}
            onClick={() => handleClick(opt)}
            className={answer === opt ? "selected" : ""}
            style={answer ? { pointerEvents: "none" } : {}}
          >
            {opt}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Questions;
