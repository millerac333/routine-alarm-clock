import React, { Component, Fragment } from 'react';
//import ReactDOM from 'react-dom';
//import Button from '@material-ui/core/Button';
import RoutineCard from './RoutineCard'
import RoutineForm from './RoutineForm'
import APImanager from '../APImanager'
class RoutineList extends Component {
    state = {
        routineList: []
    }

    renderList= () => {
        APImanager.getAllRoutines()
            .then(routineArray =>
				this.setState(() => {
                    return { routineList: routineArray }
                })
            )
        }

    componentDidMount() {
		APImanager.getAllRoutines()
            .then(routineArray =>
				this.setState(() => {
                    return { routineList: routineArray }
				})
			)
    }

    deleteOldRoutine = (id) => {
		APImanager.deleteRoutine(id)
			.then(() => {
                APImanager.getAllRoutines()
                .then(routineArray =>
                    this.setState(() => {
                        return { routineList: routineArray };
			    })
            )}
        )}

    render() {

        return ( 
            <Fragment>
                <RoutineForm renderList={this.renderList} />
                {this.state.routineList.map(Routine => {
                    return <RoutineCard key={Routine.RoutineId} 
                    Routine={Routine} deleteOldRoutine={this.deleteOldRoutine} /> })}
            </Fragment>
        );
    }
}

export default RoutineList