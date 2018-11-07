import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class AppTaskForm extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  state = {
    TaskTitle: "",
    Description: "",
    AllotedTime: 0
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
        <Button onClick={this.handleClickOpen}>Create New Task</Button>
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
              onChange={this.props.handleFieldChange}
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="Description"
              label="Description"
              type="text"
              onChange={this.props.handleFieldChange}
              fullWidth
            />
            <TextField
              id="AllotedTime"
              label="Alloted Time (minutes)"
              type="number"
              onChange={this.props.handleFieldChange}
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
            <Button onClick={this.props.postAppTask} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
