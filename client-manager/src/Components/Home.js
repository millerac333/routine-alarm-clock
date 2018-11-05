import { Route } from 'react-router-dom'
import React, { Component } from "react"
import SongList from './appTasks/AppTasksList'
import Login from './auth/LoginForm';
import NewAppTask from './appTasks/AppTaskForm';


class AppViews extends Component {

    state = {
        AppTasks: []
    }

    componentDidMount () {
        fetch("http://localhost:5333/api/AppTasks")
            .then(res => res.json())
            .then(appTaskList => this.setState({
                AppTasks: appTaskList
            }));
    }


    render() {
        return (
            <React.Fragment>
                <Route exact path="/list" render={(props) => {
                    return <SongList AppTasks={this.state.AppTasks} />
                }} />
                <Route exact path="/login" render={(props) => {
                    return <Login />
                }} />
                <Route exact path="/create" render={(props) => {
                    return <NewAppTask />
                }} />
            </React.Fragment>
        )
    }
}

export default AppViews