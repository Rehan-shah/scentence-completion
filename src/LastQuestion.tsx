import { useState } from "react";

const LastQuestion = (
  { question, options, answer }: {
    question: string;
    options: any;
    answer: string;
  },
) => {
  const [showMeanings, setShowMeanings] = useState(false);

  const toggleMeanings = () => {
    setShowMeanings(!showMeanings);
  };

  console.log(question);
  console.log(typeof answer);
  let data = localStorage.getItem(question);
  function wrong(key: any) {
    data = data ?? JSON.stringify({ "selectedAnswer": "f" });
    let data_json = JSON.parse(data);
    let ans = data_json["selectedAnswer"] === key ? "wrong" : "";
    console.log();
    return ans;
  }
  const right = (key: any) => {
    if (key === answer) {
      return "right";
    }
    return "";
  };
  return (
    <div className="question-container">
      <p className="question">{question}</p>
      {Object.keys(options).map((key) => (
        <div
          key={key}
          className={"option-container" + " " + right(key) + " " + wrong(key)}
        >
          <label>
            <input
              type="radio"
              name="option"
              value={key}
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
    </div>
  );
};

export default LastQuestion;
