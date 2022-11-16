/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect } from "react"
import "./portfolio.css"
import Burger from "./photos/hamburger.png"
import Google from "./photos/google.svg"
import Weather from "./photos/weather.svg"
import Question from "./photos/question.svg"
import Note from "./photos/note.svg"
import Fitness from "./photos/fitness.svg"
import Planner from "./photos/planner.svg"
import Directory from "./photos/directory.svg"
import Book from "./photos/book.svg"
import Food from "./photos/food.svg"
import QuestionMark from "./photos/question_mark.svg"

import Aos from "aos";
import "aos/dist/aos.css"

function Projects() {
    useEffect(() => {
        Aos.init({ duration: 1000, delay: 500 })
    }, []);


    const arrayOfProjects = [

        {
            name: "Sup?",
            description: "Social Media Platform build to encourage locals to meet/communicate with one another.  Sup uses your location to open up a chat room with those nearby.  Sup can be used for social networking, dating, peer recommendation, neighborhood alerts etc.  Try today!",
            github: "https://github.com/johnsondavid1107/sup",
            link: "https://supwitit.com/",
            imageLink: QuestionMark,
            color: "gold",
            flip: "fade-right"
        },

        {
            name: "Theres Food At Home",
            description: "Built with React, NoSQL and uses the Spoonacular Receipe API.  Log all of your fridge and pantry items to your digital pantry.  Log in per user to see visual cues of your foods current shelf life based on the expiration date you enter.  Find unique receipes to cook your food.  Because, There is Food At Home.",
            github: "https://github.com/johnsondavid1107/theresFoodAtHome",
            link: "https://theres-food-at-home.herokuapp.com/",
            imageLink: Food,
            color: "#61DBFB",
            flip: "fade-left"
        },
        {
            name: "Employee Directory",
            description: "The Employee Directory is a React based application that will populate your employee record database.  It is currently set to 50 persons and each login will render different people.  The list can be searched by either name number or email address. ",
            github: "https://github.com/johnsondavid1107/albusterEmployeeDirectory",
            link: "https://johnsondavid1107.github.io/albusterEmployeeDirectory/",
            imageLink: Directory,
            color: "#61DBFB",
            flip: "fade-right"
        },
        {
            name: "Eat-Da-Burga",
            description: "This applicaiton is a fun way to display baisc CRUD functionality.  Users can 'create' a burger which will be 'read' by the database on to the page.  Then, users can 'update' its state by devouring the burger.  Lastly the burger can be 'deleted' from database record.  The database is built with MYSQL",
            github: "https://github.com/johnsondavid1107/treadEatDaBurgerApp",
            link: "https://hidden-stream-16175.herokuapp.com/",
            imageLink: Burger,
            color: "#F29111",
            flip: "fade-left"
        },

        {
            name: "Day Planner",
            description: "The Day Planner promotes daily productivity by offering a way to schedule your day.  Click on the time slots to schedule.  The in-app time clock will change colors through the day to note the current hour.  This applicaiton uses Local Storage so it can be used on any browser built entirely in HTML",
            github: "https://github.com/johnsondavid1107/EsprayDayPlanner",
            link: "https://johnsondavid1107.github.io/EsprayDayPlanner/",
            imageLink: Planner,
            color: "#e34c26",
            flip: "fade-right"
        },

        {
            name: "Fitness Tracker",
            description: "This a unique app for the fitness-goers who need a fun way to measure productivity.   Fitness tracker show cases Mongoose and NOSQL functionality.  Desigined with Bootstrap, and visualize provided by Chart.js",
            github: "https://github.com/johnsondavid1107/swinstreamFitnessTracker",
            link: "https://swinstream-fitness-tracker.herokuapp.com/",
            imageLink: Fitness,
            color: "#4DB33D",
            flip: "fade-left"
        },

        {
            name: "Note Taker",
            description: "Take Notes!  Note Taker is built with an Express server to keep track of your notes.  It shows CRUD functionality by allowing you to create notes, read from notes, update your notes and delete the note. ",
            github: "https://github.com/johnsondavid1107/backboxNoteTaker",
            link: "https://boiling-woodland-15894.herokuapp.com/",
            imageLink: Note,
            color: "#F0DB4F",
            flip: "fade-right"
        },

        {
            name: "Whose Screen Is It Anyway?!",
            description: "Have fun with your friends deciding, whose turn is it to share screen.  Simple website built entierly of HTML.  Answeres the age old quesition of Whose Screen it is Anyway?",
            github: "https://github.com/johnsondavid1107/WhoseScreenIsItAnyway",
            link: "https://johnsondavid1107.github.io/WhoseScreenIsItAnyway/",
            imageLink: Question,
            color: "#e34c26",
            flip: "fade-left"
        },

        {
            name: "Weather App",
            description: "Check the weather in Paris, in New York City, anywhere in the world.  Uses OpenWeather API functionality.  Stores user data in Local Storage for multi user use.  Communicates with the OpenWeather API to return current, and 5 day weather data.",
            github: "https://github.com/johnsondavid1107/taperWeatherApp",
            link: "https://johnsondavid1107.github.io/taperWeatherApp/",
            imageLink: Weather,
            color: "#F0DB4F",
            flip: "fade-right"
        },

        {
            name: "bookBook",
            description: "This is an app, for book readers.  Log, collect, and share your reading material with a book reading community!  Built per user with Passport authentication, other technologies involved are Bcrypt, MYSQL, Express and Dotenv.  ",
            github: "https://github.com/johnsondavid1107/shingBookBook",
            link: "https://pacific-harbor-27397.herokuapp.com/home",
            imageLink: Book,
            color: "#F29111",
            flip: "fade-left"
        },

        {
            name: "Google Book Search",
            description: "React App in conjuction with Google Books API gives you the Google Book Search.  Search your favorite books, save them to the save page, click to view on Google Books. Database used Mongoose.",
            github: "https://github.com/johnsondavid1107/craffeeGBooks",
            link: "https://desolate-castle-67258.herokuapp.com/",
            imageLink: Google,
            color: "#61DBFB",
            flip: "fade-right"
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

            fontSize: "25px"
        },
        imageSize: {
            height: "50px",
            width: "50px",
            margin: "15px"
        },

    }

    return (
        <div className="container-fluid">

            <div className="row text-center" style={styles.raiseRow}>
                <div className="col-12">

                    {arrayOfProjects.map((one, index) =>
                        <div className="row d-flex justify-content-center" key={index} >

                            <div className="col-10"
                                style={{
                                    height: "",
                                    border: `15px dashed ${one.color}`,
                                    marginBottom: "50px",
                                    paddingTop: "20px",
                                    borderRadius: "30px"
                                    // backgroundImage: `url(${one.imageLink})`,
                                    // backgroundSize: "50px 50px",
                                    // backgroundRepeat: "no-repeat",
                                    // backgroundPosition: "left 175px top 310px"


                                }} data-aos={one.flip}
                            >
                                <div className="row something new headerPadding">
                                    <div className="col-12">
                                        {one.name}
                                    </div>
                                </div>
                                <div className="row  d-flex justify-content-end  ">
                                    <div className="col-12" style={styles.largeText}>

                                        {one.description}
                                    </div>
                                </div>


                                <div className="row">
                                    <div className="col-12">
                                        <a href={one.github} target="_blank"><button type="button" className="btn btn-outline-dark">GitHub</button></a>
                                        <img src={one.imageLink} style={styles.imageSize} alt="Github link"></img>
                                        <a href={one.link} target="_blank"><button type="button" className="btn btn-outline-dark">To App</button></a>
                                    </div>
                                </div>



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