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
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from '../../theme';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = {
  card: {
    minWidth: 275,
    backgroundColor: '#EFEFEF'
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
    <MuiThemeProvider theme={theme}>
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="secondary">
          Task
        </Typography>
        <Typography variant="h5" component="h2" color="primary" gutterBottom>
          {props.AppTask.taskTitle}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {props.AppTask.description}
        </Typography>
        <Typography component="p">
          {props.AppTask.allotedTime} minutes
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button onClick={() => this.props.history.push(`/AppTask/edit/${this.props.AppTask.appTaskId}`)} size="small">Edit</Button> */}
        <Button size="small">
          <Link to={`/AppTask/edit/${props.AppTask.appTaskId}`}>
          Edit
          </Link>
        </Button>
        <IconButton className="material-icons" color="primary" aria-label="Delete" onClick={()=> props.deleteTask(props.AppTask.appTaskId)}>
          <DeleteIcon />
        </IconButton>
        {/* <Button onClick={()=> props.deleteTask(props.AppTask.appTaskId)} size="small">Delete</Button> */}
      </CardActions>
    </Card>
    </MuiThemeProvider>
  );
}

AppTaskCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppTaskCard);
