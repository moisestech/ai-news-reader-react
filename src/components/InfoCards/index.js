/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-key */

// MATERIAL-UI
import { Grid, Grow, Typography } from '@material-ui/core';
import useStyles from './styles.js';

// JSON
import infoCards from './inforCards.json';

export default function InfoCards() {
  const classes = useStyles();

  return (
    <Grow in>
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {infoCards.map((infoCard) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className={classes.infoCard}
          >
            <div
              className={classes.card}
              style={{ backgroundColor: infoCard.color }}
            >
              <Typography variant="h5" component="h5">
                {infoCard.title}
              </Typography>
              {infoCard.info ? (
                <Typography variant="h6" component="h6">
                  <strong>{infoCard.title.split(' ')[2]}</strong>:{' '}
                  <br />
                  {infoCard.info}
                </Typography>
              ) : null}
              <Typography variant="h6" component="h6">
                Try saying: <br /> <i>{infoCard.text}</i>
              </Typography>
            </div>
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
}
