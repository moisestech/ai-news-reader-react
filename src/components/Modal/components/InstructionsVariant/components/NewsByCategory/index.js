/* eslint-disable react/react-in-jsx-scope */
import useStyles from '../../../../styles';

// MATERIAL-UI
import { Typography, Chip } from '@material-ui/core';

export default function NewsByCategory() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.infoContainer}>
        <Typography variant="h5">News by Categories</Typography>
        <div className={classes.chipContainer}>
          {[
            'Business',
            'Entertainment',
            'General',
            'Health',
            'Science',
            'Sports',
            'Technology',
          ].map((category, i) => (
            <Chip
              label={category}
              color="primary"
              className={classes.chip}
              key={i}
            />
          ))}
        </div>
      </div>
      <Typography variant="body1" className={classes.trySaying}>
        Try saying: &quot;Give me the latest{' '}
        <strong>
          <em>Business</em>
        </strong>{' '}
        news&quot;
      </Typography>
    </>
  );
}
