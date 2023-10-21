import { useState } from "react"
import { questions } from "./data";
import Quespage from "./components/Quespage";

import './index.css'
 function Game(){
    const[state,setState] = useState(false)
    function startQuizBtn(){
        setState(true)
    }
    if(state==false)
    return (
        <>
       <div className = "modal" id="quizModal">
       <div className = "modal-content">
        <h2>Test your Brain</h2>
        <p>Are Youuu Reaaadddyyy🔥?</p>
        <button onClick={startQuizBtn} id="startQuizBtn" >Start Quiz</button>
      </div>
    </div>
        </>
    )
    else if(state==true)
        return(
    <>  
        <div class="app">
      <div class="main">
        <h1>Quiz</h1>
        <div class="scores">
          <p id="attempts">Attempts : 0</p>
          <p id="highscore">HighScore : 0</p>
        </div>
      </div>
      </div>
       {questions.map((c,idx)=> <Quespage c={c} key={idx}  questionNum={idx+1}/>)}
    </>
    )
}   

export default Game
