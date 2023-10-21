import React,{useState} from 'react'
import { questions } from '../data'
import Answers from './Answers'
export default function Quespage({c,questionNum},props) {
const {question,answers} = c;
  return (
   <>
   <div className='question'>{questionNum}:{question}</div>
   {answers.map((c,i)=><Answers c={c} key={i}/>)}
   </>
  )
}
