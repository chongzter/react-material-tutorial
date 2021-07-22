import { Button, Typography } from "@material-ui/core";
import "./styles.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  helloStyle: {
    fontStyle: "oblique",
    color: "red",
    fontSize: "30px",
  },
  buttonStyle: {
    color: "green",
    border: 0,
    "&:hover": {
      border: "1px solid red",
      color: "red",
    },
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Typography className={classes.helloStyle} variant="h1" color="primary">
        Hello
      </Typography>
      <Button
        className={classes.buttonStyle}
        color="secondary"
        variant="outlined"
      >
        This is our first button
      </Button>
    </div>
  );
}

export default App;
