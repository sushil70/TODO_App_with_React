import React from "react"
import HomePage from "./Contaner/HomePage"
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import Loginpage from "./Contaner/LoginPage";
import Signuppage from "./Contaner/SignupPage";

class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/">
                        <div>
                            <HomePage/>
                        </div>
                    </Route>
                    <Route path="/login">
                        <Loginpage />
                    </Route>
                    <Route path="/signup">
                        <Signuppage />
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default App