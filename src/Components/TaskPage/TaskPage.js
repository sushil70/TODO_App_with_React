import React from "react";
import {taskData} from "../../Utils/TaskDummyData";
import classes from "./TaskPage.module.css"

class TaskPage extends React.Component{
    render() {
        return(
            <div className={classes.maincontainer}>
                <h1 className={classes.taskpageheading}>
                    Today's Task
                </h1>
                <div className={classes.buttoncontainer}>
                    <div className={classes.taskpagemainbuttion}>
                        <span className={classes.countdisplay}>10</span>
                        <button className={classes.bottonlable}>All</button>
                    </div>
                    <div className={classes.taskpagemainbuttion}>
                        <span className={classes.countdisplay}>10</span>
                        <button className={classes.bottonlable}>Important</button>
                    </div>
                    <div className={classes.taskpagemainbuttion}>
                        <span className={classes.countdisplay}>10</span>
                        <button className={classes.bottonlable}>Notes</button>
                    </div>
                    <div className={classes.taskpagemainbuttion}>
                        <span className={classes.countdisplay}>10</span>
                        <button className={classes.bottonlable}>Links</button>
                    </div>
                </div>
            {
                taskData.map(data => <div>
                    {data.Task_name}
                </div>)
            }
            </div>
        );
    }
}
export default TaskPage