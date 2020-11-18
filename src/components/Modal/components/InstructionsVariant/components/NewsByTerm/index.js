/* eslint-disable react/react-in-jsx-scope */
import useStyles from '../../../../styles';

// MATERIAL-UI
import { Typography, Chip } from '@material-ui/core';

const terms = [
  'Donald Trump',
  'Bitcoin',
  'PlayStation 5',
  'Smartphones',
];

export default function NewsByTerm() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.infoContainer}>
        <Typography variant="h5">News by Terms</Typography>
        <div className={classes.chipContainer}>
          {terms.map((term, i) => (
            <Chip
              label={term}
              color="primary"
              className={classes.chip}
              key={i}
            />
          ))}
          <Chip label="...and more" className={classes.chip} />
        </div>
      </div>
      <Typography variant="body1" className={classes.trySaying}>
        Try saying: &quot;What&apos;s up with{' '}
        <strong>
          <em>PlayStation 5</em>
        </strong>
        &quot;
      </Typography>
    </>
  );
}
