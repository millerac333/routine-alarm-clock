import React, { Component } from "react"
import NavTabs from "./Components/nav/NavTabs"
import AppViews from "./Components/AppViews"

class RoutineClock extends Component {
    render() {
        return (
            <React.Fragment>
                <NavTabs />
                <AppViews />
            </React.Fragment>
        )
    }
}
    
export default RoutineClock