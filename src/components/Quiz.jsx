import React, { useState } from "react";
import Questions from "./Questions";

const Quiz = () => {
  const questions = [
    {
      Question: "Who is the Prime Minister of India?",
      option: ["Narendra Modi", "Amit Shah", "Rahul Gandhi", "Imran Khan"],
      answer: "Narendra Modi",
    },
    {
      Question: "Who is the Prime Minister of Pakistan?",
      option: ["Narendra Modi", "Amit Shah", "Rahul Gandhi", "Imran Khan"],
      answer: "Imran Khan",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const NextQuestionButton = () => {
    setCurrentQuestion(currentQuestion + 1);
    setCurrentAnswer(null);
  };

  const handleClickOption = (option) => {
    if (currentAnswer === null) {
      setCurrentAnswer(option);
      if (option === questions[currentQuestion].answer) {
        setScore(score + 1);
      }
    }
  };

  return (
    <div className="items">
      {currentQuestion < questions.length ? (
        <div>
          <Questions
            question={questions[currentQuestion].Question}
            option={questions[currentQuestion].option}
            handleClick={handleClickOption}
            answer={currentAnswer}
          />
          <button
            disabled={currentAnswer === null}
            className={currentAnswer === null ? "button-disable" : "button"}
            onClick={NextQuestionButton}
          >
            Next Question
          </button>
        </div>
      ) : (
        <div>Your Score is: {score}</div>
      )}
    </div>
  );
};

export default Quiz;
