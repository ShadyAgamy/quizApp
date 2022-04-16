import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { handleScoreChange } from "../redux/actions";
import NavBar from "../components/navBar";


const FinalScreen = () => {
  const disptach = useDispatch();
  const history = useHistory();
  const { score, user } = useSelector((state) => state);

  const handleBack = () => {
    disptach(handleScoreChange(0));
    history.push("/");
  };

  if (user === null) {
    history.push("/");
  }

  return (
    <>
    <NavBar />
    <Box mt={30} textAlign="center">
      <Typography variant="h3" fontWeight="bold" mb={3}>
        Final Score {Math.round(Number(score) * 100 / 7)}%
      </Typography>
      <Button onClick={handleBack} variant="outlined">
        back
      </Button>
    </Box>
    </>
    
  );
};

export default FinalScreen;
