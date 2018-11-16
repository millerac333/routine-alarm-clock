import React from 'react';
import {Link, Switch, Route} from 'react-router-dom'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
//import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from '../../theme';

// function TabContainer(props) {
//   return (
//     <Typography component="div" style={{ padding: 8 * 3 }}>
//       {props.children}
//     </Typography>
//   );
// }

class NavTabs extends React.Component {
  state = {
    value: ""
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };
  render() {
    const { classes } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar position="static" color="primary">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor={"secondary"}
            centered          
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
      </MuiThemeProvider>
    );
  }
}

NavTabs.propTypes = {
  classes: PropTypes.object,
  theme: PropTypes.object,
};

export default withStyles( { withTheme: true })(NavTabs);
