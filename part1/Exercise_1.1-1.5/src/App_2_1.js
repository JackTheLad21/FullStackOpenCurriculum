import React from 'react'

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>
        {props.name} {props.exercises}
      </p>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      {/* <Part name={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part name={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part name={props.parts[2].name} exercises={props.parts[2].exercises} /> */}
      <Part key={props.parts.id} name={props.parts.name} exercises={props.parts.exercises} />
    </>
  )
}

const Total = (props) => {
  // const parts = [props.parts[0].exercises, props.parts[1].exercises, props.parts[2].exercises]
  const parts = props.courses
  return (
    <>
      <p>
        Number of exercises
        {parts.reduce((acc, curr) => acc + curr)}
      </p>
    </>
  )
}

const App = () => {
  const Course = (props) => {
    { courses.map(name, id) }
    return (
      <>
        <Header id={courses.id} course={courses.name} />
        <Content parts={courses.parts} />
        <Total parts={courses.parts} />

      </>
    )
  }

  // // const course = {
  // //   id: 1,
  // //   name: 'Half Stack application development',
  // //   parts: [
  // //     {
  // //       name: 'Fundamentals of React',
  // //       exercises: 10,
  // //       id: 1
  // //     },
  // //     {
  // //       name: 'Using props to pass data',
  // //       exercises: 7,
  // //       id: 2
  // //     },
  // //     {
  // //       name: 'State of a component',
  // //       exercises: 14,
  // //       id: 3
  // //     }
  // //   ]
  // // }

  const allCourses = courses.map((id))
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

    <div>
      {courses.map(course =>
        <Course key={course.id} course={courses} />
      )}
    </div>

  )
}

export default App
