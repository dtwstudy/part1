import { useState } from 'react'

const StatisticLine = (props) => {
return (
    <div>
    <p >{props.text} {props.value}</p>
    </div>
  )

}

const Statistics = (props) => {
 
  const totalScore =()=>{
    return props.good + props.neutral + props.bad
  }

  const averageScore = () => {
    const num = props.average / totalScore()
    return num.toFixed(1)
  }

  const positiveScore = () =>{
    const num = props.good  / totalScore() * 100
    return num.toFixed(1) + " %"
  }

  

 
if (props.good > 0 || props.bad > 0 || props.neutral > 0){


  return (
    <div>
    <h4>statistics</h4>
    <table>
      <tbody>
      <tr>
        <td> <StatisticLine text="good" value={props.good}/></td>
      </tr>
      <tr>
        <td> <StatisticLine text="neutral" value={props.neutral}/></td>
      </tr>
      <tr>
        <td>
        <StatisticLine text="bad" value={props.bad}/>
        </td>
      </tr>
      <tr>
        <td>
        <StatisticLine text="all" value={totalScore()}/>
        </td>
      </tr>
      <tr>
        <td>
        <StatisticLine text="average" value={averageScore()}/>
        </td>
      </tr>
      <tr>
        <td>
        <StatisticLine text="positive" value={positiveScore() }/>
        </td>
      </tr>
      </tbody>
    </table>

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
