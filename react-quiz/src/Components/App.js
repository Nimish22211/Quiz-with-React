import React, { useState } from 'react'
import Home from './Home'
import './App.css'

const Ques = [
  {
    question: 'This is question 1',
    answer: 'This is answer 1',
    option1: 'This is option 1',
    option2: 'This is option 2',
    option3: 'This is option 3',
    option4: 'This is option 4',
    correct: 'option1',
  },
  {
    question: 'This is question 2',
    answer: 'This is answer 2',
    option1: 'This is option 1',
    option2: 'This is option 2',
    option3: 'This is option 3',
    option4: 'This is option 4',
    correct: 'option1',
  },
  {
    question: 'This is question 3',
    answer: 'This is answer 3',
    option1: 'This is option 1',
    option2: 'This is option 2',
    option3: 'This is option 3',
    option4: 'This is option 4',
    correct: 'option1',
  },
  {
    question: 'This is question 4',
    answer: 'This is answer 4',
    option1: 'This is option 1',
    option2: 'This is option 2',
    option3: 'This is option 3',
    option4: 'This is option 4',
    correct: 'option1',
  },
  {
    question: 'This is question 5',
    answer: 'This is answer 5',
    option1: 'This is option 1',
    option2: 'This is option 2',
    option3: 'This is option 3',
    option4: 'This is option 4',
    correct: 'option1',
  }
]


function App() {
  const [userName, setUserName] = useState([]);
  const [input, setInput] = useState('');
  const [queNo, setQueNo] = useState(1);
  // console.log(userName)
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
            <div className="option">{Ques[0].option1}</div>
            <div className="option">{Ques[0].option2}</div>
            <div className="option">{Ques[0].option3}</div>
            <div className="option">{Ques[0].option4}</div>
          </div>
        </div> : null}
      </div>
      {/* <div id="glass2">hello</div> */}
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
