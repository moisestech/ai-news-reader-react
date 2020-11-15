/* eslint-disable react/jsx-key */
/* eslint-disable react/react-in-jsx-scope */
import PropTypes from 'prop-types';

// COMPONENTS
import NewsCard from '../NewsCard';
import InfoCards from '../InfoCards';

// MATERIAL UI
import { Grid, Grow, Typography } from '@material-ui/core';
import useStyles from './styles.js';

export default function NewsCards({ articles, activeArticle }) {
  const classes = useStyles();

  if (!articles.length) {
    <InfoCards />;
  }

  return (
    <Grow in>
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {articles.map((article, index) => (
          <Grid
            item
            xs={12}
            sm={16}
            md={4}
            lg={3}
            style={{ display: 'flex' }}
          >
            <NewsCard
              activeArticle={activeArticle}
              article={article}
              index={index}
            />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
}

NewsCards.propTypes = {
  articles: PropTypes.array.isRequired,
  activeArticle: PropTypes.object.isRequired,
};
