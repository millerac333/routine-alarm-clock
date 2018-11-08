import React, { Fragment, Component } from "react"
//import FormGroup from '@material-ui/core/FormGroup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import APImanager from '../APImanager'
import {Redirect} from 'react-router-dom'

export default class AnimalEdit extends Component {
    // Set initial state
    state = {
        TaskTitle: "",
        Description: "",
        AllotedTime: 0,
        editedTask: [],
        renderList: this.props.renderList,
        redirect: false
    }
    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    handleChange = event => {
        this.setState({ [event.target.id]: event.target.value });
    };

    // handleSubmit = (evt) => {
    //     const editedTask= [this.state]
	// 	APImanager.putAppTask(editedTask)
	// 		.then(() =>{
	// 		}).then(this.props.renderList)
    //     }

    putEditAppTask = () => {
        let body = {
            "AppTaskId": this.props.match.params.id,
            "TaskTitle": this.state.TaskTitle,
            "Description": this.state.Description,
            "AllotedTime": this.state.AllotedTime,
            //"id": this.props.match.params.id
        }
         let id = this.props.match.params.id
        //let taskId = this.state.AppTaskId
        console.log("id", id)
        console.log("bodybeforeapi", body)
        APImanager.putAppTask(id, body)
        .then((tacco) => {
            console.log(tacco)
            this.setState({ redirect: true })})
            // .then((editedTask) => {
                // this.props.history.push("/AppTaskList")
            }
    
    componentDidMount() {
        console.log(this.props.match.params.id)
        APImanager.getOneAppTask(this.props.match.params.id)
            .then(AppTask => {
                console.log(AppTask);
                this.setState({
                    Description: AppTask.description,
                    TaskTitle: AppTask.taskTitle,
                    AllotedTime: AppTask.allotedTime
                })
            })
    }

    render () {
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to='/AppTaskList'/>;
          }
        return (
            <Fragment>
                <form>
                <TextField
                    autoFocus
                    margin="dense"
                    id="TaskTitle"
                    label="Task Title"
                    type="text"
                    onChange={this.handleFieldChange}
                    value={this.state.TaskTitle}
                    fullWidth
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="Description"
                    label="Description"
                    type="text"
                    onChange={this.handleFieldChange}
                    value={this.state.Description}
                    fullWidth
                />
                <TextField
                    id="AllotedTime"
                    label="Alloted Time (minutes)"
                    type="number"
                    onChange={this.handleFieldChange}
                    value={this.state.AllotedTime}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="dense"
                    fullWidth
                />
                <Button onClick={this.handleClose} color="primary">
                Cancel
                </Button>
                <Button color="primary" onClick={this.putEditAppTask} id={this.props.match.params.id}>
                Save
                </Button>
                </form>
            </Fragment>
        )}}