/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect } from "react"
import "./portfolio.css"
import Burger from "./photos/eatDaBurger.png"
import EmployeeDirectory from "./photos/EmployeeDirectory.png"
import fitnessTracker from "./photos/fitnessTracker.png"
import noteTaker from "./photos/noteTaker.png"
import whoseScreen from "./photos/whoseScreen.png"
import weatherApp from "./photos/weatherApp.png"
import bookBook from "./photos/bookBook.png"
import dayPlanner from "./photos/dayPlanner.png"
import Google from "./photos/Google.png"
import Aos from "aos";
import "aos/dist/aos.css"

function Projects() {
    useEffect(() => {
        Aos.init({ duration: 3000, delay: 200 })
    }, []);
    const styles = {
        imageTest: {
            padding: 0,
            marginBottom: 5,
            position: "relative"

        }, picture: {
            width: "100%",
            border: "100px"
        },
        box: {
            width: "150px",
            background: "white"

        },
        raiseRow: {
            marginTop: "0px",
            backgroundColor: "white"
        },
        middle: {
            position: "absolute",
            top: "20%",
            padding: "30px",
            width: "100%",
            color: "black",
            display: "block",
            opacity: 0,

        },
        quoteColor: {
            paddingTop: "30px",
            paddingBottom: "30px",
            color: "white"
        },
        noPadding: {
            padding: 0
        }
    }

    return (
        <div className="container-fluid">
            <div style={styles.box}></div>
            <div className="row text-center" style={styles.raiseRow}>
                <div className="col-6 col-sm-6 col-md-4 col-xl-3" style={styles.imageTest}>
                    <a href="https://johnsondavid1107.github.io/albusterEmployeeDirectory/" target="_blank"><img src={EmployeeDirectory} alt="test" className="pic" data-aos="flip-left" style={styles.picture}></img></a>
                    <a href="https://johnsondavid1107.github.io/albusterEmployeeDirectory/" target="_blank"> <h5 className="makeAppear" style={styles.middle}>Employee Directory: React Application</h5></a>

                </div>
                <div className="col-6 col-sm-6 col-md-4 col-xl-3" style={styles.imageTest}>
                    <a href="https://hidden-stream-16175.herokuapp.com/" target="_blank"><img src={Burger} alt="test" className="pic" data-aos="flip-left" style={styles.picture}></img></a>
                    <a href="https://hidden-stream-16175.herokuapp.com/" target="_blank"><h5 className="makeAppear" style={styles.middle} >Eat-Da-Burger: Heroku</h5></a>
                </div>
                <div className="col-6 col-sm-6 col-md-4 col-xl-3" style={styles.imageTest}>
                    <a href="https://johnsondavid1107.github.io/EsprayDayPlanner/" target="_blank"><img src={dayPlanner} alt="test" className="pic" data-aos="flip-left" style={styles.picture}></img></a>
                    <a href="https://johnsondavid1107.github.io/EsprayDayPlanner/" target="_blank"><h5 className="makeAppear" style={styles.middle} >Day Planner: Local Storage</h5></a>
                </div>
                <div className="col-6 col-md-4 col-xl-3" style={styles.imageTest}>
                    <a href=" https://swinstream-fitness-tracker.herokuapp.com/" target="_blank"><img src={fitnessTracker} alt="test" className="pic" data-aos="flip-left" style={styles.picture}></img></a>
                    <a href=" https://swinstream-fitness-tracker.herokuapp.com/" target="_blank"><h5 className="makeAppear" style={styles.middle} >Fitness Tracker: MongoDB</h5></a>
                </div>
                <div className="col-6 col-md-4 col-xl-3" style={styles.imageTest}>
                    <a href="https://boiling-woodland-15894.herokuapp.com/" target="_blank"> <img src={noteTaker} alt="test" className="pic" data-aos="flip-left" style={styles.picture}></img></a>
                    <a href="https://boiling-woodland-15894.herokuapp.com/" target="_blank"> <h5 className="makeAppear" style={styles.middle} >Note Taker: CRUD</h5> </a>
                </div>
                <div className="col-6 col-md-4 col-xl-3" style={styles.imageTest}>
                    <a href="https://johnsondavid1107.github.io/WhoseScreenIsItAnyway/" target="_blank"><img src={whoseScreen} alt="test" className="pic" data-aos="flip-left" style={styles.picture}></img></a>
                    <a href="https://johnsondavid1107.github.io/WhoseScreenIsItAnyway/" target="_blank"> <h5 className="makeAppear" style={styles.middle} >Whose Screen Is It Anyway..:Local Storage</h5></a>
                </div>
                <div className="col-6 col-md-4 col-xl-3" style={styles.imageTest}>
                    <a href="https://johnsondavid1107.github.io/taperWeatherApp/" target="_blank"><img src={weatherApp} alt="test" className="pic" data-aos="flip-left" style={styles.picture}></img></a>
                    <a href="https://johnsondavid1107.github.io/taperWeatherApp/" target="_blank"><h5 className="makeAppear" style={styles.middle} >Weather App: API</h5></a>
                </div>
                <div className="col-6 col-md-4 col-xl-3" style={styles.imageTest}>
                    <a href="https://pacific-harbor-27397.herokuapp.com/login" target="_blank"><img src={bookBook} alt="test" className="pic" data-aos="flip-left" style={styles.picture}></img></a>
                    <a href="https://pacific-harbor-27397.herokuapp.com/login" target="_blank"> <h5 className="makeAppear" id="bookPadding" style={styles.middle} >bookBook:MYSQL</h5></a>
                </div>
                <div className="col-6 col-md-4 col-xl-3" style={styles.imageTest}>
                    <a href="https://desolate-castle-67258.herokuapp.com/" target="_blank"><img src={Google} alt="test" className="pic" data-aos="flip-left" style={styles.picture}></img></a>
                    <a href="https://desolate-castle-67258.herokuapp.com/" target="_blank"> <h5 className="makeAppear" id="bookPadding" style={styles.middle} >GoogleBookApp:React</h5></a>
                </div>




            </div>
            <div className="row">
                <div className="col-12 text-center" style={styles.noPadding}>
                    <h3 style={styles.quoteColor}>"In the city that never sleeps, Always Be Coding..." -Someone said somewhere at somepoint..</h3>
                </div>
            </div>
        </div >

    )
}
export default Projects;