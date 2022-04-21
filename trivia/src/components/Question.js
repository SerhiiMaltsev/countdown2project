import './Question.css';
import Answer from './Answer.js';
import { Button, Radio, FormControl, FormLabel, RadioGroup, FormControlLabel, FormHelperText } from '@material-ui/core';
import React, { useState } from "react";

function Question(props) {

  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState('Choose wisely');

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target).value);
    setHelperText(' ');
    setError(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
    console.log(value)
    if (value === "true") {
      setHelperText('You got it!');
      setError(false);
    } else if (value === "false2") {
      setHelperText('Sorry, wrong answer!');
      setError(true);
    } else if (value === "false3") {
      setHelperText('Sorry, wrong answer!');
      setError(true);
    } else if (value === "false4") {
      setHelperText('Sorry, wrong answer!');
      setError(true);
    } else {
      setHelperText('Please select an option.');
      setError(true);
    }
  };

  var badQuestion = props.questiontext;
  var question = badQuestion.replace(/&quot;/g,'"');
  question = question.replace(/&#039;/g,'\'');
  question = question.replace(/&amp;/g,'\&');

  return (
    <div className="Question">
      <h2> {question} </h2>
      <form onSubmit={handleSubmit}>
        <FormControl sx={{ m: 3 }} error={error} variant="standard">
          <FormLabel id="demo-error-radios"></FormLabel>
          <RadioGroup
            aria-labelledby="demo-error-radios"
            name="quiz"
            value={value}
            onChange={handleRadioChange}
          >
          {Object.entries(props.allanswers).map(([value]) => (
            <FormControlLabel value={props.allanswers[value][1]} control={<Radio />} label={props.allanswers[value][0]} />
          ))}
          </RadioGroup>
          <FormHelperText>{helperText}</FormHelperText>
          <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
            Check Answer
          </Button>
        </FormControl>
      </form>


    </div>
  );
}

export default Question;
