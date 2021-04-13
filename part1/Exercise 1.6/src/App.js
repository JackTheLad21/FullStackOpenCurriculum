import React, { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [feedback, setFeedback] = useState([]);

  const Button = (props) => (
    <button onClick={props.handleClick}>{props.text}</button>
  );

  const handleGoodClick = () => {
    setFeedback(feedback.concat("Good"));
    setGood(good + 1);
    console.log(feedback);
  };

  const handleNeutralClick = () => {
    setFeedback(feedback.concat("Neutral"));
    setNeutral(neutral + 1);
    console.log(feedback);
  };

  const handleBadClick = () => {
    setFeedback(feedback.concat("Bad"));
    setBad(bad + 1);
    console.log(feedback);
  };

  return (
    <>
      <div>
        <h1>Give Feedback</h1>
        <Button
          handleClick={() => {
            handleGoodClick();
          }}
          text={"Good"}
        />
        <Button
          handleClick={() => {
            handleNeutralClick();
          }}
          text={"Neutral"}
        />
        <Button
          handleClick={() => {
            handleBadClick();
          }}
          text={"Bad"}
        />
      </div>

      <div>
        <h1>Statistics</h1>
        <p>Good {good} </p>
        <p>Neutral {neutral} </p>
        <p>Bad {bad} </p>
      </div>
    </>
  );
};

export default App;
