import React from "react";
import {taskData} from "../../Utils/TaskDummyData";
import classes from "./TaskPage.module.css"

class TaskPage extends React.Component{
    dataDisplayer = (data) => {
        return(
        <div className={classes.tasks}>
            <div className={classes.taskdetails}>
                <div>
                    <input type="checkbox" className={classes.checkboxstyle}/>
                    <span className={classes.tasknamestyle}>{data.Task_name}</span>
                </div>
                <div className={classes.statusstyle}>
                    {data.Status}
                </div>
            </div>
        </div>
        )
    }
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
                <div className={classes.datacollection}>
                    {
                        taskData.map(data => <div>
                            {this.dataDisplayer(data)}
                        </div>)
                    }
                </div>
            </div>
        );
    }
}
export default TaskPage