import React, { useState } from "react";
import "./index.css";
import Screen from "./screen";

const App = () => {
  const [selectedChapter, setSelectedChapter] = useState(1);

  const handleChapterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedChapter(parseInt(event.target.value));
  };

  return (
    <div className="app">
      <div className="dropdown-container">
        <label htmlFor="chapter-select">Select Chapter:</label>
        <select
          id="chapter-select"
          value={selectedChapter}
          onChange={handleChapterChange}
        >
          {Array.from(
            { length: 14 },
            (_, index) => (
              <option key={index + 1} value={index + 1}>
                Chapter {index + 1}
              </option>
            ),
          )}
        </select>
      </div>
      <Screen name_chapter={`Chapter ${selectedChapter}`} />
    </div>
  );
};

export default App;
