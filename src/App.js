/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
import React from 'react'
import './App.css';


let swear = [
'arse',
'ass',
'asshole',
'bastard',
'bitch',
'bollocks',
'bugger',
'bullshit',
'crap',
'damn',
'frigger',
]

const App = () => {
  let [count , setCount] = React.useState(0)
  let [approval , setApproval] = React.useState(false)
  let [text , setText] = React.useState('')


  
  const bogusCheck = (text) =>{
    const foundSwears = swear.filter(word => text.includes(word));

    if(foundSwears.length){
        setCount(foundSwears.length)
    } else {
        setApproval(true)
    }
}

  return (
    <div className="App">
      <h1>Profanity Checker</h1>
      <p>Enter a sentence below and click the button below:</p>
      <textarea cols="30" rows='10' value={text} onChange={e => setText(e.target.value) } />
      <br />
      {
        approval === true ? <button>Submit</button> : <button onClick={() => bogusCheck(text)} >Profanity Check</button>
      }
      {
        count === 0 ? null : <p>Your sentence contains {count} counts of profanity</p>
      }
    </div>

  );
}
export default App;
