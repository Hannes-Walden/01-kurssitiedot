const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
  {
    name: 'Fundamentals of React',
    exercises: 10
  },
  {
    name: 'Using props to pass data',
    exercises: 7
  },
  {
    name: 'State of a component',
    exercises: 14
  }
 ]
}

const Header = (props) => {
  console.log("Header-komponentti")
  console.log(props)
  console.log(props.course)
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  console.log("Content-komponentti")
  console.log(props)
  return (
    <div>
      <p>
        {props.part1} {props.exercises1}
      </p>
      <p>
        {props.part2} {props.exercises2}
      </p>
      <p>
        {props.part3} {props.exercises3}
      </p>
    </div>
  )
}

const Total = (props) => {
  console.log("Total-komponentti")
  console.log(props)
  console.log(props.total)
  return (
    <div>
      <p>
        Number of exercises {props.total}
      </p>
    </div>
  )
}

return (
  <div>
    <p>
      Tehtävä niin, että kaikki on samassa komponentissa
    </p>
    <h1>{course}</h1>
    <p>{part1} {exercises1}</p>
    <p>{part2} {exercises2}</p>
    <p>{part3} {exercises3}</p>
    <p>Number of exercises 
    {exercises1 + exercises2 + exercises3}</p>
    <hr/>
    <p>Tehtävä niin, että kaikki on samassa komponentissa.</p>
    <Header course={course}/>
    <Content
    part1 = {part1}
    part2 = {part2}
    part3 = {part3}
    exercises1 = {exercises1}
    exercises2 = {exercises2}
    exercises3 = {exercises3}
    />
    <Total total = {exercises1 + exercises2 + exercises3}/>

  </div>
)
}

export default App
