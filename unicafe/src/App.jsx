import { useState } from 'react'

const StatisticLine = (props) => {
return (
    <div>
    <p>{props.text} {props.value}</p>
    </div>
  )

}

const Statistics = (props) => {
 
  const totalScore =()=>{
    return props.good + props.neutral + props.bad
  }

  const averageScore = () => {
    return props.average / totalScore() 
  }

  const positiveScore = () =>{
    return props.good  / totalScore() * 100
  }

  

 
if (props.good > 0 || props.bad > 0 || props.neutral > 0){


  return (
    <div>
    <h4>statistics</h4>
   <StatisticLine text="good" value={props.good}/>
   <StatisticLine text="neutral" value={props.neutral}/>
   <StatisticLine text="bad" value={props.bad}/>
   <p>all {totalScore()}</p>
   <p>average { averageScore()}</p>
   <p>positive { positiveScore()  } % </p>
    </div>
  )
}
 
  return (
    <div>
     No feedback given
    </div>
   )
}

const Button = (props)=>{
  return (
 <>
  <button onClick={props.handleClick}>{props.text}</button>
 </>
  )
}



function App() {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const [scores,setScore] = useState({
    average : 0,
    goodScore : []
  })

  const handleGood = ()=> {
       setGood(good+1)
      
       setScore({...scores, average: scores.average+1 , goodScore:scores.goodScore.concat(1)})
  }

  const handleBad = ()=>{
      setBad(bad+1)
      setScore({...scores, average: scores.average-1})
  }

  const handleNeutral = ()=>{
    setNeutral(neutral+1)
    setScore({...scores, average: scores.average + 0})
  }

 

  return (
    <>
      <div>
        <h4>give feedback</h4>
       
        <Button text="good" handleClick={handleGood}/>
        <Button text="neutral" handleClick={handleNeutral}/>
        <Button text="bad" handleClick={handleBad} />
        <Statistics good={good} neutral={neutral} bad={bad} average={scores.average} score={scores.goodScore}/>
       
      </div>
    </>
  )
}

export default App
