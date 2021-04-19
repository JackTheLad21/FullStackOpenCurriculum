import React, { useState } from 'react'

const [good, setGood] = useState(0)
const [neutral, setNeutral] = useState(0)
const [bad, setBad] = useState(0)
const [feedback, setFeedback] = useState([])
const [average, setAverage] = useState(0)
const allValues = feedback.length
const calcAverage = average / allValues
const positive = (good / feedback.length) * 100

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const Statistic = (props) => {
  return (
    <>
      <p>
        {props.text} {props.value}
      </p>
    </>
  )
}

const Statistics = (props) => {
  if (feedback.length !== 0) {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>
                <h1>Statistics</h1>
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <Statistic text='Good' value={good} />
              </td>
            </tr>

            <tr>
              <td>
                <Statistic text='Neutral' value={neutral} />
              </td>
            </tr>

            <tr>
              <td>
                <Statistic text='Bad' value={bad} />
              </td>
            </tr>

            <tr>
              <td>
                <Statistic text='All' value={good} />
              </td>
            </tr>

            <tr>
              <td>
                <Statistic text='Average' value={calcAverage} />
              </td>
            </tr>

            <tr>
              <td>
                <Statistic text='Positive %' value={positive} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  } return (
    <div>
      <h1>Statistics</h1>
      <p>No feedback given</p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state

  const handleGoodClick = () => {
    setFeedback(feedback.concat('Good'))
    setGood(good + 1)
    setAverage(average + 1)
    console.log(good)
  }

  const handleNeutralClick = () => {
    setFeedback(feedback.concat('Neutral'))
    setNeutral(neutral + 1)
    setAverage(average + 0)
    console.log(feedback)
  }

  const handleBadClick = () => {
    setFeedback(feedback.concat('Bad'))
    setBad(bad + 1)
    setAverage(average - 1)
    console.log(feedback)
  }

  return (
    <>
      <div>
        <h1>Give Feedback</h1>
        <Button
          handleClick={() => {
            handleGoodClick()
          }}
          text='Good'
        />
        <Button
          handleClick={() => {
            handleNeutralClick()
          }}
          text='Neutral'
        />
        <Button
          handleClick={() => {
            handleBadClick()
          }}
          text='Bad'
        />

        <Statistics />
      </div>
    </>
  )
}

export default App
