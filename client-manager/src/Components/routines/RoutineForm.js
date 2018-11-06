import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class RoutineForm extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

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
              id="TaskTitle"
              label="Routine Title"
              type="text"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="Destination"
              label="Destination"
              type="text"
              fullWidth
            />
            <TextField
              id="AllotedTime"
              label="Alloted Time (minutes)"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              margin="dense"
              fullWidth
            />
            <TextField
                id="time"
                label="Alarm clock"
                type="time"
                defaultValue="07:30"
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
            <Button onClick={this.handleClose} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
