/* eslint-disable react/react-in-jsx-scope */
import PropTypes from 'prop-types';

// MATERIAL-UI
import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@material-ui/core';

import useStyles from './styles.js';

export default function NewsCard({
  article: { description, published, source, title, url, urlToImage },
  i,
}) {
  const classes = useStyles();

  return (
    <Card>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          img={
            urlToImage ||
            'https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png'
          }
        />
        <div>
          <Typography
            variant="body2"
            color="textSecondary"
            component="h2"
          >
            {new Date(publishedAt).toDateString()}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="h2"
          >
            {source.name}
          </Typography>
        </div>

        <Typography gutterBottom variant="h5">
          {title}
        </Typography>
        <CardContent>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
        <Typography variant="h5" color="textSecondary">
          {i + 1}
        </Typography>
      </CardActions>
    </Card>
  );
}

NewsCard.propTypes = {
  article: PropTypes.shape({
    description: PropTypes.string.isRequired,
    published: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    urlToImage: PropTypes.string.isRequired,
  }),
  i: PropTypes.number.isRequired,
};
