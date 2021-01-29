import React from 'react'
import {useState} from 'react'


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


//  const Statistics = (props) =>{
//   good+bad+neutral *100
//  }

  return (
    <div>
         <h1>Give feedBack</h1>
         <p>
         <button onClick = {()=>setGood(good+1)}>Good</button>
         <button onClick = {()=>setNeutral(neutral+1)}>Neutral</button>
         <button onClick = {()=>setBad(bad+1)}>Bad</button>
         </p>
         <p>
           <h1>Statistics</h1>
         </p>         
         <p>
             Good {good}
         </p>
         <p>
             Neutral{neutral}
         </p>
         <p>
             Bad{bad}
         </p>
         <p>
           Nombre total de commentaires {good+neutral+bad}
         </p>

         <p>
           Le score moyen (average):{neutral*good}%
         </p>

         <p>
           Le porcentage de commentaires positifs:{good/100}%
         </p>
    </div>
  )
}

export default App
