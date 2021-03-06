import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import APImanager from '../APImanager';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from '../../theme';

export default class AppTaskForm extends React.Component {
  state = {
    open: false,
    TaskTitle: "",
    Description: "",
    AllotedTime: 0,
    renderList: this.props.renderList
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  addTask = (evt) => {
		evt.preventDefault();
		const newTask = this.state.appTask;
		newTask.push({});
		this.setState({ appTask: newTask });
  }
  
  handleSubmit = (evt) => {

		const addNewTask = [this.state];
		APImanager.postAppTask(addNewTask)
			.then(() =>{
			}).then(this.handleClose).then(this.props.renderList)
        }
      
// Update state whenever an input field is edited
handleFieldChange = (evt) => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
}

  render() {
    return (
      <MuiThemeProvider theme ={theme}>
      <div>
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>Create New Task</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="newTask"
        >
          <DialogTitle id="newTask">Create New Task</DialogTitle>
          <DialogContent>
            
            <TextField
              autoFocus
              margin="dense"
              id="TaskTitle"
              label="Task Title"
              type="text"
              onChange={this.handleFieldChange}
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="Description"
              label="Description"
              type="text"
              onChange={this.handleFieldChange}
              fullWidth
            />
            <TextField
              id="AllotedTime"
              label="Alloted Time (minutes)"
              type="number"
              onChange={this.handleFieldChange}
              InputLabelProps={{
                shrink: true,
              }}
              margin="dense"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            {/* onSubmit={()=>this.props.addTask(this.AppTask.appTaskId)} */}
            <Button onClick={this.handleSubmit} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      </MuiThemeProvider>
    );
  }
}
