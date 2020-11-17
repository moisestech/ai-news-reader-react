/* eslint-disable react/react-in-jsx-scope */
import useStyles from '../../../../styles';

// MATERIAL-UI
import { Typography, Chip } from '@material-ui/core';

export default function NewsBySource() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.infoContainer}>
        <Typography variant="h5">News by Sources</Typography>
        <div className={classes.chipContainer}>
          {[
            'CNN',
            'Wired',
            'BBC News',
            'Time',
            'IGN',
            'Buzzfeed',
            'ABC News',
          ].map((source, i) => (
            <Chip
              label={source}
              color="primary"
              className={classes.chip}
              key={i}
            />
          ))}
          <Chip label="...and more" className={classes.chip} />
        </div>
      </div>
      <Typography variant="body1" className={classes.trySaying}>
        Try saying: &quot;Give me the news from{' '}
        <strong>
          <em>CNN</em>
        </strong>
        &quot;
      </Typography>
    </>
  );
}
