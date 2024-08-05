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
    {
      Question: "Who is the President of the United States?",
      option: ["Joe Biden", "Donald Trump", "Barack Obama", "George Bush"],
      answer: "Joe Biden",
    },
    {
      Question: "Who is the Chancellor of Germany?",
      option: ["Angela Merkel", "Olaf Scholz", "Frank-Walter Steinmeier", "Gerhard Schröder"],
      answer: "Olaf Scholz",
    },
    {
      Question: "Who is the Prime Minister of the United Kingdom?",
      option: ["Boris Johnson", "Theresa May", "David Cameron", "Rishi Sunak"],
      answer: "Rishi Sunak",
    },
    {
      Question: "Who is the President of France?",
      option: ["Emmanuel Macron", "François Hollande", "Nicolas Sarkozy", "Jacques Chirac"],
      answer: "Emmanuel Macron",
    },
    {
      Question: "Who is the Prime Minister of Canada?",
      option: ["Justin Trudeau", "Stephen Harper", "Jean Chrétien", "Paul Martin"],
      answer: "Justin Trudeau",
    },
    {
      Question: "Who is the Prime Minister of Australia?",
      option: ["Scott Morrison", "Anthony Albanese", "Malcolm Turnbull", "Tony Abbott"],
      answer: "Anthony Albanese",
    },
    {
      Question: "Who is the President of Russia?",
      option: ["Vladimir Putin", "Dmitry Medvedev", "Boris Yeltsin", "Mikhail Gorbachev"],
      answer: "Vladimir Putin",
    },
    {
      Question: "Who is the President of China?",
      option: ["Xi Jinping", "Hu Jintao", "Jiang Zemin", "Deng Xiaoping"],
      answer: "Xi Jinping",
    }
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
