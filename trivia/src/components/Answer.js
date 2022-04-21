import './Answer.css';
import React, { useState } from "react";

function Answer(props) {

  const [cls, setCls] = useState("black");

  var badAnswer = props.text;
  var answer = badAnswer.replace(/&quot;/g,'"');
  answer = answer.replace(/&#039;/g,'\'');
  answer = answer.replace(/&amp;/g,'\&');

  return (
    <div className="Answer">
      <style>
        {`
          .black {color: black}
          .red {color: red}
          .green {color: green}
        `}
      </style>

      <h3
        className={cls}
        onClick={() => setCls((cls) => (props.color === true ? "green" : "red"))}
      >
        {answer}
      </h3>
    </div>
  );
}

export default Answer;
