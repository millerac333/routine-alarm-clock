import React from 'react';
import {Link, Switch, Route} from 'react-router-dom'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
//import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
//import Typography from '@material-ui/core/Typography';
//import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// function TabContainer(props) {
//   return (
//     <Typography component="div" style={{ padding: 8 * 3 }}>
//       {props.children}
//     </Typography>
//   );
// }

// TabContainer.propTypes = {
//   children: PropTypes.node.isRequired,
// };

const navStyle= {
  backgroundColor: '#220000',
  color: '#fff',
}

// const styles = theme => ({
//   root: {
//     backgroundColor: theme.palette.background.default,
//   },
// });

class NavTabs extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor={"secondary"}
            centered
            style={navStyle}           
            fullWidth
          >
            <Tab label="Clock" value="/Clock" component={Link} to="/Clock" />
            <Tab label="Tasks" value="/AppTaskList" component={Link} to="/AppTaskList" />
            <Tab label="Routines" value="/RoutineList" component={Link} to="/RoutineList" />
          </Tabs>
        </AppBar>
        <br/>
          <Switch>
            <Route path="/Clock" render={() => <div><center><h3>Clock</h3></center></div>} />
            <Route path="/AppTaskList" render={() => <div><center><h3>Task List</h3></center></div>} />
            <Route path="/RoutineList" render={() => <div><center><h3>Routine List</h3></center></div>} />
          </Switch>
      </div>
    );
  }
}

NavTabs.propTypes = {
  classes: PropTypes.object,
  theme: PropTypes.object,
};

export default withStyles(navStyle, { withTheme: true })(NavTabs);
