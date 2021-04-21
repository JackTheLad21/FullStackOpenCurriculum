import { useEffect, useState } from 'react'

const anedotes = ['Ciao', 'Mondo', 'Cane']

export default function Test () {
  const [state, setState] = useState([])
  const [anedoteMax, setAnedoteMax] = useState(null)

  // Init viene lanciato la prima volta quando il componente viene caricato
  const init = () => {
    setState(anedotes.map((a, i) => ({ summary: a, votes: 0 })))
    console.log(state)
  }

  // Questo viene lanciato ogni volta che la variabile state cambia
  const getAnedoteWithMaxVote = () => {
    const oldState = state.slice(0)
    const andedoteWithMaxvote = oldState.sort((a, b) => b.votes - a.votes)

    setAnedoteMax(andedoteWithMaxvote[0] || null)
  }

  const addVote = index => {
    const oldState = state.slice(0)
    oldState[index].votes++
    setState(oldState)
  }

  const renderByVotes = () => {
    if (anedoteMax && anedoteMax.votes > 0) {
      return <div>{anedoteMax.summary}</div>
    }
    return ''
  }

  useEffect(init, [])
  useEffect(getAnedoteWithMaxVote, [state])

  return (
    <>
      {JSON.stringify(state)}
      {renderByVotes()}
      {state.map((s, i) => (
        <div key={i}>
          {s.summary} - {s.votes}
          <button onClick={() => addVote(i)}>Vote</button>
        </div>
      ))}
    </>
  )
}
