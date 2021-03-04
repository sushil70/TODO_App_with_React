import classes from "./LoginPage.module.css"


const Signuppage = () => {
    return(
        <div className={classes.loginpagemain}>
            <div className={classes.maincontainer}>
                <form action="#" className={classes.formmain}>
                    <input type="text" placeholder={"     USERNAME"} className={`${classes.formitem} ${classes.inputstyle}`}/>
                    <input type="password" placeholder={"     PASSWORD"} className={`${classes.formitem} ${classes.inputstyle}`}/>
                    <input type="password" placeholder={"     CONFORM PASSWORD"} className={`${classes.formitem} ${classes.inputstyle}`}/>
                    <button type="submit" className={`${classes.formitem} ${classes.submitbutton}`}>SIGNUP</button>
                </form>
            </div>
        </div>
    );
}
export default Signuppage