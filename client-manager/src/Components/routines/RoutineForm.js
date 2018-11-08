import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import APImanager from '../APImanager'

export default class RoutineForm extends React.Component {
  state = {
    open: false,
    Title: "",
    Destination: "",
    AllotedTime: 0,
    ArrivalTime: 0
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  addRoutine = (evt) => {
		evt.preventDefault();
		const newRoutine = this.state.routine;
		newRoutine.push({});
		this.setState({ routine: newRoutine });
  }
  
  handleSubmit = (evt) => {
    const addNewRoutine = [this.state];
		APImanager.postRoutine(addNewRoutine)
			.then(() =>{
			}).then(this.handleClose)
  }
  // Update state whenever an input field is edited
  handleFieldChange = (evt) => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleClickOpen}>Open form dialog</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Edit Task</DialogTitle>
          <DialogContent>
            
            <TextField
              autoFocus
              margin="dense"
              id="Title"
              label="Title"
              type="text"
              onChange={this.handleFieldChange}
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="Destination"
              label="Destination"
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
            <TextField
                id="Arrival Time"
                label="Planned Arrival"
                type="time"
                onChange={this.handleFieldChange}
                defaultValue="08:00"
                //className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
                inputProps={{
                step: 300, // 5 min
                }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleSubmit} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
