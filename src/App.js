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
'brotherfucker',
'bugger',
'bullshit',
'clit',
'crap',
'cunt',
'damn',
'effing',
'fatherfucker',
'frigger',
'fuck'
]

const App = React.memo(() => {
  let [count , setCount] = React.useState(0)
  let [approval , setApproval] = React.useState(false)
  let [text , setText] = React.useState('')


  
  const bogusCheck = (text) =>{
    let textArray = text.split(' ')
    console.log(textArray);
  }

  return (
    <div className="App">
      <h1>Profanity Checker</h1>
      <p>Enter a sentence below and click the button below:</p>
      <textarea cols="30" rows='10' value={text} onChange={e => setText(e.target.value) } />
      <br />
      <button onClick={bogusCheck(text)} >Profanity Check</button>
    </div>

  );
}
)
export default App;
