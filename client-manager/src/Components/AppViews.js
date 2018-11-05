import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AppTasksList from './appTasks/AppTasksList'
import UserLogin from './auth/LoginForm';
import AddAppTask from './appTasks/AppTaskForm';


class AppViews extends Component {
    isAuthenticated = () =>
        localStorage.getItem("RAC_token") !== null ||
        sessionStorage.getItem("RAC_token") !== null;

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
                <Route exact path="/" render={props => {
                        if (this.isAuthenticated()) {
                            return <AppTasksList />;
                        } else {
                            return <UserLogin />;
                        }
                    }} />
                {/* <Route path="/Register" component={Register} /> */}
                {/* <Route path="/Login" component={Login} /> */}
                <Route exact path="/list" render={(props) => {
                    return <AppTasksList AppTasks={this.state.AppTasks} />
                }} />
                <Route exact path="/login" render={(props) => {
                    return <UserLogin />
                }} />
                <Route exact path="/create" render={(props) => {
                    return <AddAppTask />
                }} />
            </React.Fragment>
        )
    }
}

export default AppViews