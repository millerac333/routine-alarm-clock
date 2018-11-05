import React, { Component } from "react"
import NavBar from "./components/nav/NavBar"
import AppViews from "./components/AppViews"

class RoutineClock extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <AppViews />
            </React.Fragment>
        )
    }
}
    
export default RoutineClock