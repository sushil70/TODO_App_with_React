import React from "react";
import classes from "./SideBar.module.css";



class  SideBar extends React.Component{
    render() {
        return (
            <div className={classes.maincontaner}>
                <div className={classes.container}>
                    <div className={classes.subcontainer}>
                        <i className="fa fa-inbox" aria-hidden="true"></i>
                        <span className={classes.labledesign}>Inbox</span>
                    </div>
                    <div className={classes.subcontainer}>
                        <i className="fa fa-star-half-o" aria-hidden="true"></i>
                        <span className={classes.labledesign}>Today</span>
                    </div>
                    <div className={classes.subcontainer}>
                        <i className="fa fa-calendar" aria-hidden="true"></i>
                        <span className={classes.labledesign}>Upcoming</span>
                    </div>
                    <div className={classes.subcontainer}>
                        <i className="fa fa-folder-o" aria-hidden="true"></i>
                        <span className={classes.labledesign}>Anytime</span>
                    </div>
                    <div className={classes.subcontainer}>
                        <i className="fa fa-list-alt" aria-hidden="true"></i>
                        <span className={classes.labledesign}>Someday</span>
                    </div>
                    <div className={classes.subcontainer}>
                        <i className="fa fa-trash" aria-hidden="true"></i>
                        <span className={classes.labledesign}>Trash</span>
                    </div>
                </div>


            </div>
        );
    }
}
export default SideBar;