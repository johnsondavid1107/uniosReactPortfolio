/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect } from "react"
import "./portfolio.css"
import Burger from "./photos/hamburger.png"
import Aos from "aos";
import "aos/dist/aos.css"

function Projects() {
    useEffect(() => {
        Aos.init({ duration: 3000, delay: 200 })
    }, []);


    const arrayOfProjects = [
        {
            name: "Employee Directory",
            description: "The Employee Directory is a React based application that will populate your employee record database.  It is currently set to 50 persons and each login will render different people.  The list can be searched by either name number or email address. ",
            github: "https://github.com/johnsondavid1107/albusterEmployeeDirectory",
            link: "https://johnsondavid1107.github.io/albusterEmployeeDirectory/",
            imageLink: Burger
        },
        {
            name: "Eat-Da-Burga",
            description: "This applicaiton is a fun way to display baisc CRUD functionality.  Users can 'create' a burger which will be 'read' by the database on to the page.  Then, users can 'update' its state by devouring the burger.  Lastly the burger can be 'deleted' from database record.  The database is built with MYSQL",
            github: "https://github.com/johnsondavid1107/treadEatDaBurgerApp",
            link: "https://hidden-stream-16175.herokuapp.com/",
            imageLink: Burger
        },

        {
            name: "Day Planner",
            description: "The Day Planner promotes daily productivity by offering a way to schedule your day.  Click on the time slots to schedule.  The in-app time clock will change colors through the day to note the current hour.  This applicaiton uses Local Storage so it can be used on any browser",
            github: "",
            link: "",
            imageLink: ""
        },

        {
            name: "Fitness Tracker",
            description: "",
            github: "",
            link: "",
            imageLink: ""
        },

        {
            name: "Note Taker",
            description: "",
            github: "",
            link: "",
            imageLink: ""
        },

        {
            name: "Whose Screen Is It Anyway?!",
            description: "",
            github: "",
            link: "",
            imageLink: ""
        },

        {
            name: "Weather App",
            description: "",
            github: "",
            link: "",
            imageLink: ""
        },

        {
            name: "bookBook",
            description: "",
            github: "",
            link: "",
            imageLink: ""
        },

        {
            name: "Google Book Search",
            description: "",
            github: "",
            link: "",
            imageLink: ""
        },


    ]




    const styles = {
        imageTest: {
            padding: 0,
            marginBottom: 5,
            position: "relative"

        },
        raiseRow: {
            marginTop: "0px",
            backgroundColor: "white"
        },
        quoteColor: {
            paddingTop: "30px",
            paddingBottom: "30px",
            color: "white"
        },
        noPadding: {
            padding: 0
        },
        largeText: {
            fontSize: "50px"
        }
    }

    return (
        <div className="container-fluid">

            <div className="row text-center" style={styles.raiseRow}>
                <div className="col-12">

                    {arrayOfProjects.map(one =>
                        <div className="row d-flex justify-content-center">

                            <div className="col-10 d-flex justify-content-center" style={{
                                height: "400px",
                                border: "15px dashed black",
                                marginBottom: "50px",
                                paddingTop: "20px",
                                backgroundImage: `url(${one.imageLink})`,
                                backgroundSize: "100px 100px",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "left top 250px"


                            }}>

                                <div style={styles.largeText}>{one.name}</div>
                                <div>{one.description}</div>

                            </div>


                        </div>
                    )}



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