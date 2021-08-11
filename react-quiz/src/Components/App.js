import React, { useState } from 'react'
import Home from './Home'
import './App.css'

const Ques = [
  {
    question: 'This is question 1',
    answer: 'This is answer 1',
    option1: ['This is option 1', 1],
    option2: ['This is option 2', 2],
    option3: ['This is option 3', 3],
    option4: ['This is option 4', 4],
    correct: 'This is answer 1',
  },
  {
    question: 'This is question 2',
    answer: 'This is answer 2',
    option1: 'This is option 1',
    option2: 'This is option 2',
    option3: 'This is option 3',
    option4: 'This is option 4',
    correct: 'This is answer 2',
  },
  {
    question: 'This is question 3',
    answer: 'This is answer 3',
    option1: 'This is option 1',
    option2: 'This is option 2',
    option3: 'This is option 3',
    option4: 'This is option 4',
    correct: 'This is answer 3',
  },
  {
    question: 'This is question 4',
    answer: 'This is answer 4',
    option1: 'This is option 1',
    option2: 'This is option 2',
    option3: 'This is option 3',
    option4: 'This is option 4',
    correct: 'This is answer 4',
  },
  {
    question: 'This is question 5',
    answer: 'This is answer 5',
    option1: 'This is option 1',
    option2: 'This is option 2',
    option3: 'This is option 3',
    option4: 'This is option 4',
    correct: 'This is question 5',
  }
]


function App() {
  const [userName, setUserName] = useState([]);
  const [input, setInput] = useState('');
  const [queNo, setQueNo] = useState(1);
  // console.log(userName)

  const optionClick = (id) => { //* it will disable other options which are not selected
    const ids = [1, 2, 3, 4]; //? reference for ids
    document.getElementById(id).style.backgroundColor = "blue"; //? selected button
    var res = ids.filter(item => item !== id) //! ids which are not clicked
    var disable = res.map(item => document.getElementById(item).disabled = true); //? disable other options
    var disableColor = res.map(item => document.getElementById(item).style.backgroundColor = "rgb(51, 51, 51)"); //? disabled color
  }
  return (
    <div>
      <div id="home">
        <Home userName={userName} setUser={setUserName} input={input} setInput={setInput} />
        { /*Progress Bar*/}
        {userName.length === 1 ? <div className="section">
          <div>
            <div className="quesNo">Q{queNo}.{Ques[0].question}</div>
          </div>
          <div className="options">
            <button onClick={() => optionClick(Ques[0].option1[1])}
              className="option" id="1">{Ques[0].option1[0]}</button><br />
            <button onClick={() => optionClick(Ques[0].option2[1])}
              className="option" id="2">{Ques[0].option2[0]}</button><br />
            <button onClick={() => optionClick(Ques[0].option3[1])}
              className="option" id="3">{Ques[0].option3[0]}</button><br />
            <button onClick={() => optionClick(Ques[0].option4[1])}
              className="option" id="4">{Ques[0].option4[0]}</button>
          </div>
        </div> : null}
      </div>
      <main>
        <div id="glass2">
        </div>
      </main>
      <div className="circle1"></div>
      <div className="circle2"></div>
    </div>
  )
}

export default App
