import React, { useState, useEffect } from 'react'
import Test from './Test'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const [selected, setSelected] = useState(0)

  const [vote, setVote] = useState(Array(6).fill(0))

  const [mostVotes, setMostVotes] = useState([...vote])

  const [state, setState] = useState([])
  // const [mostVotes, setMostVotes] = useState([])

  const handleClick = () => {
    setSelected(() => Math.floor(Math.random() * anecdotes.length))
  }

  const ButtonNew = () => {
    return <button onClick={() => handleClick()}>New Anecdote</button>
  }

  const handleVote = () => {
    const newVote = [...vote]
    newVote[selected] += 1
    setVote(newVote)
    // console.log(vote)
    // arr[anecdotes[i]] = vote[i]

    // ? for (let i = 0; i < anecdotes.length; i++) {
    // ?    arr[anecdotes[i]] = vote[i]

    // const iter = new Map(arr)
    // iter.sort((a, b) => b[i] - a[i])
    // obj.sort(function (a, b) { return b.vote - a.vote })
    // setMostVotes(obj)
    console.log(state)
    const voteObj = Object.assign({ }, mostVotes)
    // for (let i = 0; i < vote.length; i++) {
    //   const merged = new Map()
    //   merged.set(state[i], voteObj[i])
    console.log(voteObj)
    // }
    const merged = Object.assign(state, voteObj)
    console.log(merged)

    // // }
    // arr.sort((a, b) => {
    //   return
    // })
  }

  const ButtonVote = () => {
    return <button onClick={() => handleVote()}>Vote!</button>
  }

  const Paragraph = props => {
    return (
      <>
        <div>
          <h1> {props.text} </h1>
          <p> {props.anecdote} </p>
          <p> Has {props.vote} votes!</p>
        </div>
      </>
    )
  }

  // const init = () => {
  //   setState(anecdotes.map((a, i) => ({ anecdote: a, votes: 0 })))
  // }

  const init = () => {
    setState(anecdotes.map((a, v) => ({ anecdote: a, vote: 0 })))
    setMostVotes(vote.map((b) => ({ vote: b })))
  }

  // const getAnedoteMax = () => {
  //   const oldState = state.slice(0)
  //   const andedoteWithMaxvote = oldState.sort((a, b) => b.votes - a.votes)

  //   setMostVotes(andedoteWithMaxvote[0] || null)
  //   console.log(mostVotes)
  // }

  useEffect(init, [])
  // useEffect(getAnedoteMax, [state])

  return (
    <>
      <Test />
      <Paragraph text='Anecdote of the day' anecdote={anecdotes[selected]} vote={vote[selected]} />
      <ButtonNew />
      <ButtonVote />
      <Paragraph text='Anecdote with most votes' />
    </>
  )
}

export default App
