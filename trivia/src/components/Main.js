import './Main.css';
import Question from './Question.js'
import React, {useEffect, useState} from "react";
import axios from 'axios';

function Main() {
  const url = 'https://opentdb.com/api.php?amount=10';
  const [questions, setQuestions] = useState(null);

  useEffect(() => {
    axios.get(url)
      .then(response =>{
        setQuestions(response.data)
      })
  }, [url])

  console.log(questions);

  if (questions){
    return (
        <div className="Main">
          <h1> Trivia </h1>
          {Object.entries(questions.results).map(([key, value]) => (
            <Question item = {value}/>
          ))}
        </div>
    )
  }

  return (
      <div className="Main">
        <h1> Trivia </h1>
      </div>
  );

}

export default Main;
