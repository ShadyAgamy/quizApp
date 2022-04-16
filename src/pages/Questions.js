import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import NavBar from "../components/navBar";

import { Button, Typography, Grid } from "@mui/material";
import { Box } from "@mui/system";

import { handleScoreChange } from "../redux/actions";

import history from "../history";

const Questions = () => {
  const dispatch = useDispatch();

  const { questions, score, user } = useSelector((state) => state);
  const [questionIndex, setQuestionIndex] = useState(0);

  const suffleChoices = questions[questionIndex].choices.sort(
    () => Math.random() - 0.5
  );

  const handleClickAnswer = (e) => {
    const question = questions[questionIndex];
    if (e.target.textContent === question.answer) {
      dispatch(handleScoreChange(score + 1));
    }
    if (questionIndex + 1 < questions.length) {
      setQuestionIndex(questionIndex + 1);
    } else {
      history.push("/result");
    }
  };

  if (user === null) {
    history.push("/");
  }

  return (
    <>
      <NavBar />
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Box textAlign={"center"}>
          <Typography variant="h4">Question {questionIndex + 1}</Typography>
          <Typography mt={5}>{questions[questionIndex].question}</Typography>
          {suffleChoices.map((data, id) => (
            <Box mt={2} key={id}>
              <Button onClick={handleClickAnswer} variant="contained">
                {data}
              </Button>
            </Box>
          ))}
        </Box>
      </Grid>
    </>
  );
};

export default Questions;
