import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

function MatchButton(props) {
  const { classes } = props;
  return (
    <div>
      <Button variant="fab" color="primary" aria-label="Add" className={classes.button}>
        <AddIcon />
      </Button>
    </div>
  );
}

MatchButton.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(MatchButton);