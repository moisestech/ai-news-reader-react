/* eslint-disable react/react-in-jsx-scope */
import useStyles from '../../../../styles';

// MATERIAL-UI
import { Typography, Chip } from '@material-ui/core';

const sources = [
  'CNN',
  'Wired',
  'BBC News',
  'Time',
  'IGN',
  'Buzzfeed',
  'ABC News',
];

export default function NewsBySource() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.infoContainer}>
        <Typography variant="h5">News by Sources</Typography>
        <div className={classes.chipContainer}>
          {sources.map((source, i) => (
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
