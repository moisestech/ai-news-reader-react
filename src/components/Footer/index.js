/* eslint-disable react/react-in-jsx-scope */
// STYLES
import useStyles from './styles';

// COMPONENTS
// import logo from './images/logo.png';

// MATERIAL-UI
import { Typography } from '@material-ui/core';

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <Typography variant="body1" component="h2">
        Created by
        <a
          className={classes.link}
          href="https://www.linkedin.com/in/moisesdsanabria"
        >
          {' '}
          Moises Sanabria
        </a>{' '}
        -
        <a
          className={classes.link}
          href="http://youtube.com/javascriptmastery"
        >
          {' '}
          Moises.Tech
        </a>
      </Typography>
      {/* <img
            className={classes.image}
            src={logo}
            height="50px"
            alt="JSMastery logo"
          /> */}
    </div>
  );
}
