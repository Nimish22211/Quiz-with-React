import React from 'react'
import './Home.css'
function Home({ userName, setUser, setInput, input }) {

    const handleSubmitUserName = (e) => {
        e.preventDefault();
        if (userName.length === 1) {
            alert('Can\'t rename; REFRESH');
            setInput(userName);
            return null
        }
        setUser([input]);
        // setInput('');
        console.log(userName)
    }
    return (
        <div className="center" >
            <header>Quiz</header>
            <form className="form">
                <div className="input-name">
                    <h1>Your name please:</h1>
                    <input value={input} onChange={(e) => setInput(e.target.value)} />
                </div>
                <button className="submit-name" type="submit"
                    onClick={handleSubmitUserName} disabled={!input}>Submit</button>
            </form>
        </div>
    )
}

export default Home
