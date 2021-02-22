import React from "react";
import "./Pages.css";

const Result = ({ multi, single }) => {
  const choice1 = multi.map((item, index) => {
    return (
      <div key={index}>
        <br />
        <p className="question">{item.question}</p>
        {Object.values(item.answer).map((itm, ind) => (
          <div key={ind}>
            <input type="checkbox" />
            {"  "}
            {itm}
            <br />
          </div>
        ))}
      </div>
    );
  });
  const choice2 = single.map((item, index) => {
    return (
      <div key={index}>
        <br />
        <p className="question">{item.question}</p>
        {Object.values(item.answer).map((itm, ind) => (
          <div key={ind}>
            <input type="radio" />
            {"  "}
            {itm}{" "}
          </div>
        ))}
      </div>
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
