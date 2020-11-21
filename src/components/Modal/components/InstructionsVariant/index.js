/* eslint-disable react/react-in-jsx-scope */
import useStyles from '../../styles';

// COMPONENTS
import NewsByCategory from './components/NewsByCategory';
import NewsByTerm from './components/NewsByTerm';
import NewsBySource from './components/NewsBySource';

// MATERIAL-UI
import { Typography, Divider } from '@material-ui/core';

export default function InstructionsVariant() {
  const classes = useStyles();

  return (
    <div className={classes.paper}>
      Variant Instruction
      {/* <Typography variant="h3">Instructions</Typography>
      <Divider />
      <NewsByTerm />
      <Divider />
      <NewsByCategory />
      <Divider />
      <NewsBySource /> */}
    </div>
  );
}
