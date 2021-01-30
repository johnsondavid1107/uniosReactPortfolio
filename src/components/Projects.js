import React from "react"
import "./portfolio.css"
import Burger from "./photos/eatDaBurger.png"
import EmployeeDirectory from "./photos/EmployeeDirectory.png"
import fitnessTracker from "./photos/fitnessTracker.png"
import noteTaker from "./photos/noteTaker.png"
import whoseScreen from "./photos/whoseScreen.png"
import weatherApp from "./photos/weatherApp.png"
import bookBook from "./photos/bookBook.png"

function Projects() {
    const styles = {
        imageTest: {
            padding: 0,
            marginBottom: 5,
            position: "relative"
        }, picture: {
            width: "100%"
        },
        box: {
            width: "300px",
            background: "white"

        },
        raiseRow: {
            marginTop: "300px",
            backgroundColor: "white"
        },
        middle: {
            position: "absolute",
            top: "50%",
            bottom: "50%",
            right: "25%",
            textAlign: "center",
            color: "red",
            display: "block",
            opacity: 1,

        }
    }

    return (
        <div className="container-fluid">
            <div style={styles.box}></div>
            <div className="row text-center tryThis" style={styles.raiseRow}>
                <div className="col-6 col-sm-6 col-md-4 col-xl-3" style={styles.imageTest}>
                    <img src={EmployeeDirectory} alt="test" className="pic" style={styles.picture}></img>
                    <h3 id="cack" style={styles.middle}>Employee Directory</h3>

                </div>
                <div className="col-6 col-sm-6 col-md-4 col-xl-3" style={styles.imageTest}>
                    <img src={Burger} alt="test" className="pic" style={styles.picture}></img>
                    <h3 style={styles.middle} >Eat-Da-Burga</h3>
                </div>
                <div className="col-6 col-sm-6 col-md-4 col-xl-3" style={styles.imageTest}>
                    <img src={EmployeeDirectory} alt="test" className="pic" style={styles.picture}></img>
                    <h3 style={styles.middle} >Employee Directory</h3>
                </div>
                <div className="col-6 col-md-4 col-xl-3" style={styles.imageTest}>
                    <img src={fitnessTracker} alt="test" className="pic" style={styles.picture}></img>
                    <h3 style={styles.middle} >Fitness Tracker</h3>
                </div>
                <div className="col-6 col-md-4 col-xl-3" style={styles.imageTest}>
                    <img src={noteTaker} alt="test" className="pic" style={styles.picture}></img>
                    <h3 style={styles.middle} >Note Taker</h3>
                </div>
                <div className="col-6 col-md-4 col-xl-3" style={styles.imageTest}>
                    <img src={whoseScreen} alt="test" className="pic" style={styles.picture}></img>
                    <h3 style={styles.middle} >Whose Screen Is It Anyway..</h3>
                </div>
                <div className="col-6 col-md-4 col-xl-3" style={styles.imageTest}>
                    <img src={weatherApp} alt="test" className="pic" style={styles.picture}></img>
                    <h3 style={styles.middle} >Weather App</h3>
                </div>
                <div className="col-6 col-md-4 col-xl-3" style={styles.imageTest}>
                    <img src={bookBook} alt="test" className="pic" style={styles.picture}></img>
                    <h3 style={styles.middle} >bookBook</h3>
                </div>



            </div>
        </div>

    )
}
export default Projects;