import React from 'react';
//import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
//import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
});

class NavTabs extends React.Component {
  state = {
    to: "",
  };

  handleChange = (event, to) => {
    this.setState({ to });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            to={this.state.to}
            onClick={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
          >
             
            <Tab label="Clock" to="/Clock" />
            
           
            <Tab label="Tasks"  to="/AppTaskList" />
            
            
            <Tab label="Routines"  to="/RoutineList" />
            
          </Tabs>
        </AppBar>
        {/* <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>Clock</TabContainer>
          <TabContainer dir={theme.direction}>Routines</TabContainer>
          <TabContainer dir={theme.direction}>Tasks</TabContainer>
        </SwipeableViews> */}
      </div>
    );
  }
}

NavTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(NavTabs);
