/* eslint-disable react/react-in-jsx-scope */
import PropTypes from 'prop-types';
// STYLES
import useStyles from './styles';

// MATERIAL-UI
import { Typography } from '@material-ui/core';

export default function Logo({ newsArticles }) {
  const classes = useStyles();

  return (
    <div className={classes.logoContainer}>
      {newsArticles.length ? (
        <div className={classes.infoContainer}>
          <div className={classes.card}>
            <Typography variant="h5" component="h2">
              Try saying: <br />
              <br />
              Open article number [4]
            </Typography>
          </div>
          <div className={classes.card}>
            <Typography variant="h5" component="h2">
              Try saying: <br />
              <br />
              Go back
            </Typography>
          </div>
        </div>
      ) : null}
      <img
        src="https://alan.app/voice/images/previews/preview.jpg"
        className={classes.alanLogo}
        alt="logo"
      />
    </div>
  );
}

Logo.propTypes = {
  newsArticles: PropTypes.array.isRequired,
};
