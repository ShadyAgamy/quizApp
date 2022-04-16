import { Button,  Typography } from "@mui/material";
import { Box } from "@mui/system";
import {  useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { handleScoreChange } from "../redux/actions";

import history from "../history";


const Questions = () => {

  const dispatch = useDispatch();

  const {questions, score} = useSelector((state) => state);
  const [questionIndex, setQuestionIndex] = useState(0);

const suffleChoices = questions[questionIndex].choices.sort(() => Math.random() - 0.5);

  const handleClickAnswer = e => {
    const question = questions[questionIndex];
    if (e.target.textContent === question.answer) {
      dispatch(handleScoreChange(score + 1));
    }

    if (questionIndex + 1 < questions.length) {
      setQuestionIndex(questionIndex + 1);
    } else {
      history.push("/score");
    }
  };

  return (
    <Box>
      <Typography variant="h4">Question {questionIndex + 1}</Typography>
      <Typography mt={5}>
        {questions[questionIndex].question}
      </Typography>
      {suffleChoices.map((data, id) => (
        <Box mt={2} key={id}>
          <Button onClick={handleClickAnswer} variant="contained">
            {data}
          </Button>
        </Box>
      ))}
    </Box>
  );
};

export default Questions;