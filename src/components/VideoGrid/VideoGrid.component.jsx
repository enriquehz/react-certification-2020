import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 'auto',
    height: 'auto',
  },
  gridItem: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    margin: '0.1em',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

function videoGrid({ items }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const classes = useStyles();
  const visibleItems = items;

  return (
    <div className={classes.root}>
      <GridList cellHeight={300} className={classes.gridList} cols={5}>
        {visibleItems.map((item) => (
          <GridListTile key={item.etag}>
            <img
              src={item.snippet.thumbnails.high.url}
              alt={item.snippet.thumbnails.medium.url}
            />
            <GridListTileBar
              title={item.snippet.title}
              actionIcon={
                <IconButton
                  aria-label={`info about ${item.snippet.title}`}
                  className={classes.icon}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

export default videoGrid;
