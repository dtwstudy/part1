const Header = (props) => {
  return(
    <div>
       <h1>{props.course}</h1>
    </div>
  )

  
}

const Part = (props) => {
  return(
    <div>
       
      </div>
  )
  }

const Content = () => {
return(
  <div>
      <Part />
      <Part />
      <Part />
    </div>
)
}

const Total = () => {
  return (
    <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
  )

}

const App = () => {

  const course = { 
    name: "Half Stack application development" , 

   parts : [ {
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
  }]

}

  return (
    <div>
      <Header course={course} />
      <Content   />
      <Total />
    </div>
  )
}

export default App