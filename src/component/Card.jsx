import React from "react";
import { useState } from "react";
import data from "../assets/db/data.json";

const Card = () => {
  const [db] = useState(data);
  const scores = db.map((el, index) => el.score);
  const average = Math.trunc(
    scores.reduce((acc, cur) => acc + cur, 0) / scores.length
  );
  return (
    <div className="card">
      <section className="result">
        <h2 className="title-result">Your Result</h2>
        <div className="circle">
          <h2 className="numeric-score">{average}</h2>
          <p className="max-score">of 100</p>
        </div>
        <h2 className="score">Great</h2>
        <p className="score-comment">
          You scored higher than 65% of the people who have taken these tests
        </p>
      </section>
      <section className="summary">
        <h2 className="title-summary">Summary</h2>
        <div className="container-summary">
          {db.map((el, index) => (
            <div key={index} className="category">
              <div className="icon-text">
                <img src={el.icon} alt={el.category} />
                <span className={el.category}>{el.category}</span>
              </div>
              <div className="value">
                <span className="bold">{el.score}</span>
                <span className="normal"> / 100</span>
              </div>
            </div>
          ))}
        </div>
        <button className="btn-summary">Continue</button>
      </section>
    </div>
  );
};

export default Card;
