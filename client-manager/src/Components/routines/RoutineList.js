import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
//import RoutineCard from './RoutineCard'
class RoutineList extends Component {
    render() {

        return ( 
            <Button variant = "contained" color = "primary" >
            Create New Routine 
            </Button>
            // <RoutineCard/>
        );
    }
}

export default RoutineList