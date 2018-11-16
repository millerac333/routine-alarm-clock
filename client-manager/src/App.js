import React, { Component } from "react"
import NavTabs from "./Components/nav/NavTabs"
import AppViews from "./Components/AppViews"
import { CssBaseline } from "@material-ui/core";
// import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

class RoutineClock extends Component {
    render() {
        return (
            <React.Fragment>
                {/* <MuiThemeProvider > */}
                <CssBaseline />
                <NavTabs />
                <AppViews />
                {/* </MuiThemeProvider> */}
            </React.Fragment>
        )
    }
}
    
export default RoutineClock