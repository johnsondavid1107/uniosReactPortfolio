/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react"
import { AiOutlineMail } from "react-icons/ai"
import { CgFileDocument } from "react-icons/cg"
import Card from "@material-ui/core/Card"
import Typography from '@material-ui/core/Typography'
import { CardContent } from "@material-ui/core"
import Picture from "../components/photos/Picture1.jpg"
import Black from "../components/photos/black.mp4"
import { Link, useLocation } from "react-router-dom"
import Footer from "../components/Footer"
import Aos from "aos";
import "aos/dist/aos.css"
import "./style.css"
import "./video.scss"



function Home() {

    const location = useLocation()

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, []);


    const styles = {
        navColor: {
            color: "gray"
        },
        back: {
            backgroundColor: "black",
            color: "white"
        },
        noPadding: {
            padding: 0,

        },

    }



    return (

        <div >
            <div className="row">
                <div className="col-12">
                    <nav className="navbar fixed-top navbar-expand-sm navbar-dark area fontStyle">
                        <ul className="nav nav-tabs ml-auto" style={styles.back}>
                            <li className="nav-item">
                                <Link to="/uniosReactPortfolio/portfolio" className={location.pathname === "/uniosReactPortfolio/portfolio" ? "nav-link active" : "nav-link"} >
                                    Portfolio
                       </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/uniosReactPortfolio" className={location.pathname === "/uniosReactPortfolio" ? "nav-link active" : "nav-link"} >
                                    Home
                       </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            <video
                autostart="true" autoPlay playsInline muted loop src={Black} id="myVideo">
            </video>

            <header className="viewportHeader">
                <h1 className="title">
                    Hello...I am the
                    <div className="col-12 text-center">
                        <span>
                            Full Stack Web Developer
                    </span>
                    </div>

                </h1>

            </header>



            <main className="fontStyle">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <h1 className="about">About Me</h1>
                    </div>
                </div>

                <div className="row d-flex align-content-center">
                    <div className="picture">
                        <img src={Picture} alt="profile" className="profilePic"></img>
                    </div>
                </div>



                <p>
                    I am a Full-Stack Web Developer from New York City.  I enjoy coding very much!  I have learned the foundation of building websites and graduated from Rutgers Web Development Boot Camp in March 2021 which focused on today's demand for programming languages.  I am also currently learning Python 3 and working on a few Python projects.  I spend my time honing my skills solving HackerRank algorithims and data structure problems.
                        </p>
                <hr></hr>
                <p>
                    I am a family man with 2 beautiful kids, enjoy fitness and can't say no to a competititive video game! Please visit my
                    <a href="/uniosReactPortfolio/portfolio"> Portfolio </a> for examples of my work, click on my resume to list my experience and click on my email to connect!
                        </p>




                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-10">
                        <Card >
                            <CardContent>

                                <Typography align={"center"}>
                                    <AiOutlineMail />

                                    <a href="mailto:johnsondavid1107@gmail.com"><button type="button" className="btn btn-outline-dark fontStyle" >Email Me!</button> </a>




                                    <AiOutlineMail />

                                </Typography>

                                <hr></hr>
                                <Typography align={"center"}>
                                    <CgFileDocument /> <a href="https://docs.google.com/document/d/1qIK4fPq2yBOabwlhUGvM0SnthDIRg9AxTNg04DA77ew/edit" target="_blank">
                                        <button type="button" className="btn btn-outline-dark fontStyle" > Resume </button> </a>
                                    <CgFileDocument />
                                </Typography>

                            </CardContent>
                        </Card>
                    </div>
                    <div className="col-1"></div>

                </div>

                <Footer />


            </main>








        </div>
    )

}

export default Home;