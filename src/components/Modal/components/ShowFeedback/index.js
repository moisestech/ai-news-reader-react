/* eslint-disable react/react-in-jsx-scope */
import useStyles from '../../styles';

// COMPONENTS
import emailjs from 'emailjs-com';

// MATERIAL-UI
import { Typography, TextField, Button } from '@material-ui/core';

export default function ShowFeedback() {
  const classes = useStyles();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'gmail',
        'alan_ai',
        e.target,
        'user_dhVImkgxaL27bxQ8pLPQ5',
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  return (
    <div className={classes.paper}>
      <Typography variant="h3">
        Something went wrong? Send us some feedback
      </Typography>
      <br />
      <form className={classes.form} onSubmit={sendEmail}>
        <TextField name="name" label="Your name" variant="outlined" />
        <br />
        <TextField
          name="email"
          type="email"
          label="Your email"
          variant="outlined"
        />
        <br />
        <TextField
          name="feedback"
          multiline
          rows={5}
          helperText="Describe the problems that you've encontered."
          label="Feedback"
          variant="outlined"
        />
        <br />
        <Button type="submit" variant="outlined" color="primary">
          Send
        </Button>
      </form>
    </div>
  );
}
