import classes from "./LoginPage.module.css"


const Loginpage = () => {
    return(
      <div className={classes.loginpagemain}>
          <div className={classes.maincontainer}>
              <form action="#" className={classes.formmain}>
                  <input type="text" placeholder={"     USERNAME"} className={`${classes.formitem} ${classes.inputstyle}`}/>
                  <input type="password" placeholder={"     PASSWORD"} className={`${classes.formitem} ${classes.inputstyle}`}/>
                  <button type="submit" className={`${classes.formitem} ${classes.submitbutton}`}>LOGIN</button>
              </form>
              <span className={classes.spanstyle}>
                  Not Registered <a href="#" className={classes.spanstyle}>Create an Account</a>
              </span>
          </div>
      </div>
    );
}
export default Loginpage