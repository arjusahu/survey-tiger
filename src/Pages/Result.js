import React from "react";
import "./Pages.css";

const Result = ({ multi, single }) => {
  console.log(multi, single);
  const choice1 = multi.map((item) => {
    return (
      <>
        <br />
        <p className="question">{item.question}</p>
        {Object.values(item.answer).map((itm, ind) => (
          <>
            <input type="checkbox" key={ind} />
            {"  "}
            {itm}
            <br />
          </>
        ))}
      </>
    );
  });
  const choice2 = single.map((item) => {
    return (
      <>
        <br />
        <p className="question">{item.question}</p>
        {Object.values(item.answer).map((itm, ind) => (
          <>
            <input type="radio" key={ind} />
            {"  "}
            {itm}{" "}
          </>
        ))}
      </>
    );
  });
  return (
    <div className="main text-center">
      <div className="div">
        {choice1}
        <br />
        {choice2}
      </div>
    </div>
  );
};

export default Result;
