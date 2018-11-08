import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function RoutineCard(props) {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary">
          Routine
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {props.Routine.title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {props.Routine.destination}
        </Typography>
        <Typography component="p">
          {props.Routine.allotedTime}
        </Typography>
        <Typography component="p">
          {props.Routine.arrivalTime}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Edit</Button>
        <Button onClick={()=> props.deleteOldRoutine(props.Routine.routineId)} size="small">Delete</Button>
        <Button size="small">Set Alarm</Button>
      </CardActions>
    </Card>
  );
}

RoutineCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RoutineCard);
