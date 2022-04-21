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

  if (questions){
    var listOfQuestions = []

    {Object.entries(questions.results).map(([key, value]) => (
      listOfQuestions.push([value.question, value.correct_answer, value.incorrect_answers])
    ))}

    var answersFormatted = []

    {Object.entries(listOfQuestions).map(([key, value]) => (
      answersFormatted.push([value[0]])
    ))}

    var answersNotShuffled = []

    for (var i in listOfQuestions){
      for (var j in listOfQuestions[i][2]){
        listOfQuestions[i].push(listOfQuestions[i][2][j])
      }
    }

    for (var i in listOfQuestions){
      listOfQuestions[i].splice(2,1);
    }

    var temp = []

    for (var i in listOfQuestions){
      temp = [[listOfQuestions[i][1], "true"]]
      for (var j = 2; j<listOfQuestions[i].length; j++){
        temp.push([listOfQuestions[i][j], "false" + String(j)])
      }
      listOfQuestions[i][1] = temp;
    }

    for (var k in listOfQuestions){
      for (var i = listOfQuestions[k][1].length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = listOfQuestions[k][1][i];
        listOfQuestions[k][1][i] = listOfQuestions[k][1][j];
        listOfQuestions[k][1][j] = temp;
      }
    }

    const dictOfQuestions = {}
    dictOfQuestions["results"] = listOfQuestions;

    console.log(dictOfQuestions.results)

    return (
        <div className="Main">
          <h1> Trivia </h1>
          {Object.entries(dictOfQuestions.results).map(([key, value]) => (
            <Question questiontext = {value[0]} allanswers = {value[1]}/>
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
