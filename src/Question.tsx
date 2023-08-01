import React, { useState } from "react";
import "./App.css";

const Question = ({ question, options, answer }) => {
  const [showMeanings, setShowMeanings] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  console.log(options);
  const toggleMeanings = () => {
    setShowMeanings(!showMeanings);
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setIsAnswerCorrect(null); // Reset the answer indicator when selecting a new option
  };

  const checkAnswer = () => {
    if (isAnswerCorrect === null) {
      const isCorrect = selectedOption === answer;
      setIsAnswerCorrect(isCorrect);
      localStorage.setItem(
        question,
        JSON.stringify({
          "selectedAnswer": selectedOption,
          "previous_try": isCorrect,
        }),
      );
    } else {
      setIsAnswerCorrect(null);
    }
  };

  return (
    <div className="question-container">
      <p className="question">{question}</p>
      {Object.keys(options).map((key) => (
        <div key={key} className="option-container">
          <label>
            <input
              type="radio"
              name="option"
              value={key}
              checked={selectedOption === key}
              onChange={() =>
                handleOptionChange(key)}
            />{" "}
            <span className="option">{options[key].option}</span>
          </label>
          {showMeanings && (
            <p className="meaning">
              <strong>Meaning:</strong> {options[key].meaning}
            </p>
          )}
        </div>
      ))}
      <button className="toggle-btn" onClick={toggleMeanings}>
        Toggle Meanings
      </button>
      <button className="check-btn" onClick={checkAnswer}>
        Check Answer
      </button>
      {isAnswerCorrect !== null && (
        <p
          className={`answer-indicator ${
            isAnswerCorrect ? "correct" : "incorrect"
          }`}
        >
          {isAnswerCorrect ? "Correct!" : "Incorrect!"}
        </p>
      )}
    </div>
  );
};

export default Question;
