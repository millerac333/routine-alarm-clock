import { Route } from 'react-router-dom';
import React, { Component } from "react";
import Clock from './clock/Clock'
import UserLogin from './auth/LoginForm';
import AppTaskList from './appTasks/AppTaskList';
import RoutineList from './routines/RoutineList';
import EditAppTask from "./appTasks/EditAppTask"

export default class AppViews extends Component {
    
    isAuthenticated = () =>
        localStorage.getItem("RAC_token") !== null ||
        sessionStorage.getItem("RAC_token") !== null;

    state = {
     }
      
    render() {
        if (this.isAuthenticated()) {
        return (
                <React.Fragment>
                    <Route exact path="/Clock" component={Clock} />
                    <Route exact path="/AppTaskList" component={AppTaskList} />
                    <Route exact path="/RoutineList" component={RoutineList} />
                    <Route exact path="/AppTask/edit/:id" component={EditAppTask} />
                </React.Fragment>
                )
            } else {
                return (
                <React.Fragment>
                    <Route exact path="/" component={UserLogin} />
                    <Route path="/login" component={UserLogin} />
                </React.Fragment>
                )
            }
        }
    }
//             <React.Fragment>
//                 <Route exact path="/" render={props => {
//                         if (this.isAuthenticated()) {
//                             return <Clock />;
//                         } else {
//                             return <UserLogin />;
//                         }
//                     }} />
//                 {/* <Route path="/Register" component={Register} /> */}
//                 {/* <Route exact path="/Clock" render={(props) => {
//                     return <Clock Clock={this.state.Clock} /> */}
//                 {/* }} /> */}
//                 <Route exact path="/AppTaskList" render={(props) => {
//                     return <AppTasksList AppTasks={this.state.AppTasks} />
//                 }} />
//                 <Route exact path="/RoutinesList" render={(props) => {
//                     return <RoutinesList Routines={this.state.Routines} />
//                 }} />
//                 <Route exact path="/login" render={(props) => {
//                     return <UserLogin />
//                 }} />
//                 {/* <Route exact path="/create" render={(props) => {
//                     return <AddAppTask />
//                 }} /> */}
//             </React.Fragment>
//         )
//     }
// }
