import React from "react";
import SideBar from "../Components/SideBar/SideBar"
import classes from "./HomePage.module.css";
import TaskPage from "../Components/TaskPage/TaskPage"
import Meeting from "../Components/MeetingPage/MeatingPage"

class HomePage extends React.Component{
    // constructor() {
    //     super();
    //     this.status={}
    // }
    render(){
        return(
            <div className={classes.maincontainer}>
                <SideBar />
                <TaskPage />
                <Meeting />
            </div>
        )
    }
}
export default HomePage;