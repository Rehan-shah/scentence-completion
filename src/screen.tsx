import { useState } from "react";
import Data from "./data.json";
import Question from "./Question";
import LastQuestion from "./LastQuestion";

function Screen({ name_chapter }: any) {
  const [isShowingHistory, setShowingHistory] = useState(false);
  function giveOptions(json: any) {
    const hi = {
      "a": json["a"],
      "b": json["b"],
      "c": json["c"],
      "d": json["d"],
      "e": json["e"],
    };
    return hi;
  }
  let data: any = Data;
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{name_chapter}</h1>{" "}
      <button
        style={{
          marginRight: "auto",
          marginLeft: "auto",
          backgroundColor: "tan",
        }}
        onClick={() => {
          setShowingHistory(!isShowingHistory);
        }}
      >
        Show previous
      </button>
      <div style={{ width: "50%", margin: "auto" }}>
        {Object.keys(data[name_chapter]).map((qes, i) => (
          !isShowingHistory
            ? (
              <Question
                key={i}
                question={data[name_chapter][qes]["Question"]}
                options={giveOptions(data[name_chapter][qes])}
                answer={data[name_chapter][qes]["Answer"][0]}
              />
            )
            : (
              <LastQuestion
                key={i}
                question={data[name_chapter][qes]["Question"]}
                options={giveOptions(data[name_chapter][qes])}
                answer={data[name_chapter][qes]["Answer"][0]}
              />
            )
        ))}
      </div>
    </div>
  );
}

export default Screen;
