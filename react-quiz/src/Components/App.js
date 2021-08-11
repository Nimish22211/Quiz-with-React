import React, { useState } from 'react'
import Home from './Home'
import './App.css'

const Ques = [
  {
    question: 'This is question 1',
    answerOptions: [
      { option: 'This is option 1', correct: true, id: 1 },
      { option: 'This is option 2', correct: false, id: 2 },
      { option: 'This is option 3', correct: false, id: 3 },
      { option: 'This is option 4', correct: false, id: 4 }
    ],
  },
  {
    question: 'This is question 2',
    answerOptions: [
      { option: 'que2 option 1', correct: false, id: 1 },
      { option: 'que2 option 2', correct: true, id: 2 },
      { option: 'que2 option 3', correct: false, id: 3 },
      { option: 'que2 option 4', correct: false, id: 4 }
    ]
  },
  {
    question: 'This is question 3',
    answerOptions: [
      { option: 'que3 option 1', correct: false, id: 1 },
      { option: 'que3 option 2', correct: false, id: 2 },
      { option: 'que3 option 3', correct: true, id: 3 },
      { option: 'que3 option 4', correct: false, id: 4 }
    ]
  },
  {
    question: 'This is question 4',
    answerOptions: [
      { option: 'que4 option 1', correct: false, id: 1 },
      { option: 'que4 option 2', correct: false, id: 2 },
      { option: 'que4 option 3', correct: false, id: 3 },
      { option: 'que4 option 4', correct: true, id: 4 }
    ]
  },
  {
    question: 'This is question 5',
    answerOptions: [
      { option: 'que5 option 1', correct: true, id: 1 },
      { option: 'que5 option 2', correct: false, id: 2 },
      { option: 'que5 option 3', correct: false, id: 3 },
      { option: 'que5 option 4', correct: false, id: 4 }
    ]
  }
]


function App() {
  const [userName, setUserName] = useState([]);
  const [input, setInput] = useState('');
  const [queNo, setQueNo] = useState(1);
  const [score, setScore] = useState(0);
  const [currQue, setCurrQue] = useState(0)
  const [btnId, setBtnId] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [scoreDesc, setScoreDesc] = useState('');
  // console.log(userName)
  const ids = [1, 2, 3, 4]; //? reference for ids
  //* optionClick will also check whether answer is correct or not
  const optionClick = (id, optSelect) => { //* it will disable other options which are not selected 
    setBtnId(id);
    document.getElementById(id).style.backgroundColor = "blue"; //? selected button
    var res = ids.filter(item => item !== id) //! ids which are not clicked
    var disable = res.map(item => document.getElementById(item).disabled = true); //? disable other options
    var disableColor = res.map(item => document.getElementById(item).style.backgroundColor = "rgb(51, 51, 51)"); //? disabled color
    if (optSelect === true) {
      setScore(score + 1)
    }
    document.getElementsByClassName('next')[0].style.display = "block"
  }
  const nextQue = () => { //* change the question
    let nextQue = currQue + 1;
    if (nextQue < Ques.length) {
      setCurrQue(currQue + 1)
      setQueNo(queNo + 1)
    } else {
      setShowScore(true)
    }
    document.getElementById(btnId).style.backgroundColor = "black";
    var res = ids.filter(item => item !== btnId) //! ids which are not clicked
    var disable = res.map(item => document.getElementById(item).disabled = false); //? enable other options
    var disableColor = res.map(item => document.getElementById(item).style.backgroundColor = "black"); //? enabled color
    document.getElementsByClassName('next')[0].style.display = "none";
    document.getElementsByClassName('option')[0].style.hover = "yellow"
  }
  const reset = () => {
    window.location.reload()
  }
  return (
    <div>
      {showScore === false ? <div id="home">
        <Home userName={userName} setUser={setUserName} input={input} setInput={setInput} />
        { /*Progress Bar*/}
        {userName.length === 1 ? <div className="section">
          <div>
            <div className="quesNo">Q{queNo}.{Ques[currQue].question}</div>
          </div>
          <div className="options">
            {Ques[currQue].answerOptions.map(item => <div>
              <button onClick={() => optionClick(item.id, item.correct)} className="option" id={item.id}>{item.option}</button></div>)}
          </div>
          <button onClick={nextQue} className="next">Next</button>
        </div> : null}
      </div> : <div className="endscreen quesNo score">{userName}, You have scored {score}/5
        <button className="reset" onClick={reset}>Reset</button>
      </div>}
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
