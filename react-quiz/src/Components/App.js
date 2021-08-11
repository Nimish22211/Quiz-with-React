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
      { option: 'This is option 1', correct: false, id: 1 },
      { option: 'This is option 2', correct: true, id: 2 },
      { option: 'This is option 3', correct: false, id: 3 },
      { option: 'This is option 4', correct: false, id: 4 }
    ]
  },
  {
    question: 'This is question 3',
    answerOptions: [
      { option: 'This is option 1', correct: false, id: 1 },
      { option: 'This is option 2', correct: false, id: 2 },
      { option: 'This is option 3', correct: true, id: 3 },
      { option: 'This is option 4', correct: false, id: 4 }
    ]
  },
  {
    question: 'This is question 4',
    answerOptions: [
      { option: 'This is option 1', correct: false, id: 1 },
      { option: 'This is option 2', correct: false, id: 2 },
      { option: 'This is option 3', correct: false, id: 3 },
      { option: 'This is option 4', correct: true, id: 4 }
    ]
  },
  {
    question: 'This is question 5',
    answerOptions: [
      { option: 'This is option 1', correct: true, id: 1 },
      { option: 'This is option 2', correct: false, id: 2 },
      { option: 'This is option 3', correct: false, id: 3 },
      { option: 'This is option 4', correct: false, id: 4 }
    ]
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
            {/* <button onClick={() => optionClick(Ques[0].option1[1])}
              className="option" id="1">{Ques[0].option1[0]}</button><br />
            <button onClick={() => optionClick(Ques[0].option2[1])}
              className="option" id="2">{Ques[0].option2[0]}</button><br />
            <button onClick={() => optionClick(Ques[0].option3[1])}
              className="option" id="3">{Ques[0].option3[0]}</button><br />
            <button onClick={() => optionClick(Ques[0].option4[1])}
              className="option" id="4">{Ques[0].option4[0]}</button> */}

            {Ques[0].answerOptions.map(item => <div>
              <button onClick={() => optionClick(item.id)} className="option" id={item.id}>{item.option}</button></div>)}
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
