import React ,{useState}from 'react'

export default function Answers({c},idx) {
    const{text,correct} = c
    const [myStyle,setMyStyle] = useState('white');
    const isCorrect = (c)=>{
        if(correct==true){
            setMyStyle('green')
        }
        else{
            setMyStyle('maroon')
        }
    }
  return (
    <div>
      <button className="btn"style={{backgroundColor:myStyle}} onClick={isCorrect}>{text}</button>
    </div>
  )
}
