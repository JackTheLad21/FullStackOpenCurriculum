import React from 'react'

const Header = (props) => {
  return (
    <>
      <h1>{props.name}</h1>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <ul>
        <li>
          {props.name} {props.exercises}
        </li>
      </ul>
    </>
  )
}

const Content = (props) => {
  // const singlePart = props.parts.map((part) => ())
  return (
    <>
      {/* <Part name={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part name={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part name={props.parts[2].name} exercises={props.parts[2].exercises} /> */}
      {props.parts.map(part =>
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      )}
    </>
  )
}

const Total = (props) => {
  // const parts = [props.parts[0].exercises, props.parts[1].exercises, props.parts[2].exercises]
  const result = props.parts.map(part => part.exercises)
  return (
    <>
      <h4>
        Number of exercises {result.reduce((acc, curr) => acc + curr)}
      </h4>
    </>
  )
}

const App = () => {
  const Course = () => {
    return (
      <>
        {courses.map(list =>
          <div key={list.id}>
            <Header name={list.name} />
            <Content parts={list.parts} />
            <Total parts={list.parts} />
          </div>
        )}
      </>
    )
  }

  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <>
      {/* {courses.map(list => */}
      <Course />
      {/* )} */}
    </>
  )
}

export default App
