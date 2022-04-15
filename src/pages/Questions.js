import { Button,  Typography } from "@mui/material";
import { Box } from "@mui/system";
import { decode } from "html-entities";
import {  useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { handleScoreChange } from "../redux/actions";

import history from "../history";

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const Questions = () => {
  const {questions, score} = useSelector((state) => state);

  const dispatch = useDispatch();

  const [questionIndex, setQuestionIndex] = useState(0);
  const [options, setOptions] = useState([]);



  const handleClickAnswer = (e) => {
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
      <Typography variant="h4">Questions {questionIndex + 1}</Typography>
      <Typography mt={5}>
        {decode(questions[questionIndex].question)}
      </Typography>
      {questions[questionIndex].choices.map((data, id) => (
        <Box mt={2} key={id}>
          <Button onClick={handleClickAnswer} variant="contained">
            {decode(data)}
          </Button>
        </Box>
      ))}
      <Box mt={5}>
        {/* Score: {score} / {response.results.length} */}
      </Box>
    </Box>
  );
};

export default Questions;
