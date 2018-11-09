import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
//import APImanager from '../APImanager'
import {Link} from 'react-router-dom'

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
    padding: 5
  },
};

function AppTaskCard(props) {
  const { classes } = props;
console.log(props)
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary">
          Task
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {props.AppTask.taskTitle}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {props.AppTask.description}
        </Typography>
        <Typography component="p">
          {props.AppTask.allotedTime}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button onClick={() => this.props.history.push(`/AppTask/edit/${this.props.AppTask.appTaskId}`)} size="small">Edit</Button> */}
        <Button size="small">
          <Link to={`/AppTask/edit/${props.AppTask.appTaskId}`}>
          Edit</Link></Button>
        <Button onClick={()=> props.deleteTask(props.AppTask.appTaskId)} size="small">Delete</Button>
      </CardActions>
    </Card>
  );
}

AppTaskCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppTaskCard);
