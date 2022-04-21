import './Question.css';
import Answer from './Answer.js'

function Question(props) {
  var answers = {};

  {Object.entries(props.item.incorrect_answers).map(([key, value]) => (
    answers[value] = false
  ))}

  answers[props.item.correct_answer] = true
  var arrayForShuffle = []

  {Object.entries(answers).map(([key, value]) => (
    arrayForShuffle.push([key, value])
  ))}

  for (var i = arrayForShuffle.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = arrayForShuffle[i];
        arrayForShuffle[i] = arrayForShuffle[j];
        arrayForShuffle[j] = temp;
  }

  answers = {}

  for (var i = arrayForShuffle.length - 1; i >= 0; i--) {
    answers[arrayForShuffle[i][0]] = arrayForShuffle[i][1];
  }

  var badQuestion = props.item.question;
  var question = badQuestion.replace(/&quot;/g,'"');
  question = question.replace(/&#039;/g,'\'');
  question = question.replace(/&amp;/g,'\&');

  console.log(question)

  return (
    <div className="Question">
      <h2> {question} </h2>
      {Object.entries(answers).map(([key, value]) => (
        <Answer text = {key} color = {value}/>
      ))}
    </div>
  );
}

export default Question;
