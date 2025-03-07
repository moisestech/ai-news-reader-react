/* eslint-disable react/jsx-key */
import React from 'react';
import PropTypes from 'prop-types';

// COMPONENTS
import NewsCard from '../NewsCard';
import InfoCards from '../InfoCards';

// MATERIAL UI
import { Grid, Grow } from '@material-ui/core';
import useStyles from './styles.js';

const NewsCards = React.forwardRef(
  ({ articles, activeArticle }, ref) => {
    const classes = useStyles();

    !articles.length ? <InfoCards /> : null;

    return (
      <Grow in ref={ref}>
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
  },
);

NewsCards.displayName = 'NewsCards';

NewsCards.propTypes = {
  articles: PropTypes.array.isRequired,
  activeArticle: PropTypes.number.isRequired,
};

export default NewsCards;
