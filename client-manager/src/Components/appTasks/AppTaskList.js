import React, { Component, Fragment } from 'react';
//import ReactDOM from 'react-dom';
//import Button from '@material-ui/core/Button';
import AppTaskCard from './AppTaskCard';
import AppTaskForm from './AppTaskForm';
import APImanager from '../APImanager'

class AppTaskList extends Component {

    state = {
        taskList: []
    }

     renderList= () => {
        APImanager.getAllAppTasks()
            .then(taskArray =>
				this.setState(() => {
                    return { taskList: taskArray }
                })
            )
        }
			
    componentDidMount() {
		APImanager.getAllAppTasks()
            .then(taskArray =>
				this.setState(() => {
                    return { taskList: taskArray }
				})
			)
    }
    
    deleteTask = (id) => {
		APImanager.deleteAppTask(id)
			.then(() => {
                APImanager.getAllAppTasks()
                .then(taskArray =>
                    this.setState(() => {
                        return { taskList: taskArray };
			    })
            )}
        )}

    render() {

        return ( 
            <Fragment>
                <AppTaskForm renderList={this.renderList}/>
                {this.state.taskList.map(AppTask => {
                    return <AppTaskCard key={AppTask.AppTaskId}
                    AppTask={AppTask} deleteTask={this.deleteTask}
                    renderList={this.renderList} /> })}
            </Fragment>
        );
    }
}

export default AppTaskList