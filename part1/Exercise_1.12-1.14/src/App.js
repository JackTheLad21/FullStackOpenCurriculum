import React, { useState } from 'react'
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

  const [mostVotes, setMostVotes] = useState([])

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
    // console.log(newVote)

    const merged = newVote.reduce((result, field, index) => {
      result[anecdotes[index]] = field
      return result
    }, {})

    const sorted = Object
      .keys(merged)
      .sort((a, b) => { return merged[b] - merged[a] })
      .reduce((result, value) => {
        result[value] = merged[value]
        return result
      }, {})

    // const sortedVal = Object.values(sorted)
    // const sortedKey = Object.keys(sorted)

    const sortedArr = Object.entries(sorted)

    setMostVotes(sortedArr)

    // setMostVotes(sortedArr)

    // .sort((a, b) => { return merged[b] - merged[a] })
    // .reduce((_sortedObj, [k, v]) => ({
    //   ..._sortedObj,
    //   [k]: v
    // }), {})
    // .map(([k, v]) => (`${k}_${v}`))

    // (a, i) => ({ summary: a, votes: 0 })
    // key => merged[key]
    // setState(merged.map((a, i) => ({ anecdote: a, votes: i })))
    // const sortable = []
    // for (const anecdote in merged) {
    //   sortable.push([anecdote, merged[anecdote]])
    // }
    // sortable.sort((a, b) => {
    //   return a[1] - b[1]
    // })

    // const objSorted = {}
    // sortable.forEach((item) => {
    //   objSorted[item[0] = item[1]]
    // })

    // const orderedMerged = newMerged.sort((a, b) => {
    //   return b.vote - a.vote
    // })

    // console.log(merged)
    // console.log(sorted)

    // console.log(mostVotes[0][0])
    // console.log(mostVotes[0][1])

    // console.log(sortedKey)

    // arr[anecdotes[i]] = vote[i]
    // const partialVote = newVote.map()
    // for (let i = 0; i < anecdotes.length; i++) {
    //   const arr = []
    //   arr[anecdotes[i]] = vote[i]
    //   console.log(arr)
    // }

    // const iter = new Map(arr)
    // iter.sort((a, b) => b[i] - a[i])
    // obj.sort(function (a, b) { return b.vote - a.vote })
    // setMostVotes(obj)
    // console.log(state)
    // const voteObj = Object.assign({ }, mostVotes)
    // for (let i = 0; i < vote.length; i++) {
    //   const merged = new Map()
    //   merged.set(state[i], voteObj[i])
    // console.log(voteObj)
    // }
    // const merged = Object.assign(state, voteObj)
    // console.log(merged)

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

  // const init = () => {
  //   setState(anecdotes.map((a, v) => ({ anecdote: a, vote: 0 })))
  //   setMostVotes(vote.map((b) => ({ vote: b })))
  // }

  // const getAnedoteMax = () => {
  //   const oldState = state.slice(0)
  //   const andedoteWithMaxvote = oldState.sort((a, b) => b.votes - a.votes)

  //   setMostVotes(andedoteWithMaxvote[0] || null)
  //   console.log(mostVotes)
  // }

  // useEffect(init, [])
  // useEffect(getAnedoteMax, [state])

  return (
    <>
      <Test />
      <Paragraph text='Anecdote of the day' anecdote={anecdotes[selected]} vote={vote[selected]} />
      <ButtonNew />
      <ButtonVote />
      <Paragraph text='Anecdote with most votes' anecdote={mostVotes[0][0]} vote={mostVotes[0][1]} />
    </>
  )
}

export default App
