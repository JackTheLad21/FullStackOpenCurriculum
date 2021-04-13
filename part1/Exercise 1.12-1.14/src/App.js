import React, { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  ];

  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState([], (i = 0));
  const [acc, setAcc] = useState(0);

  const handleClick = () => {
    setSelected(() => Math.floor(Math.random() * 5 + 0));
  };

  const ButtonNew = () => {
    return <button onClick={() => handleClick()}>New Anecdote</button>;
  };

  const handleVote = () => {
    setVote([...vote]);
    // setAcc(acc + 1)
    i += 1;
    // setVote(i + 1);
    console.log(vote);
  };

  const ButtonVote = () => {
    return <button onClick={() => handleVote()}>Vote!</button>;
  };

  return (
    <>
      <div>{anecdotes[selected]}</div>
      <ButtonNew />
      <ButtonVote />
    </>
  );
};

export default App;
