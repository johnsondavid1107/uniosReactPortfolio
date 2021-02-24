/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react"
import stickMan from "../components/photos/stickGuy.svg"
import { AiOutlineMail } from "react-icons/ai"
import { CgFileDocument } from "react-icons/cg"
import Card from "@material-ui/core/Card"
import Typography from '@material-ui/core/Typography'
import { CardContent } from "@material-ui/core"
import Picture from "../components/photos/Picture1.jpg"
import Aos from "aos";
import "aos/dist/aos.css"


function Home() {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, []);

    const styles = {
        imageProperty: {
            width: "100%"
        },
        imgColor: {
            backgroundColor: "black"
        },
        jumbotron: {
            background: "black",
            color: "white",
            margin: 0
        },
        noPadding: {
            padding: 0,
            backgroundColor: "white"
        },
        parallax: {
            width: "100%",
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center top",
            backgroundImage: `url(${stickMan})`,
            height: "500px",


        },
        largeText: {
            fontSize: "100px"
        },
        moreMargin: {
            marginBottom: "110px",
        },
        styleCard: {
            border: "10px solid white",
            borderColor: "white",
            backgroundColor: "black",
            marginBottom: "50px"
        },
        curvePicture: {
            borderRadius: "200px",
            border: "5px solid white"
        },
        topSpace: {
            marginTop: "100px"
        }

    }


    return (<div className="container-fluid">


        <div className="row">
            <div className="col-12">
                <div className="jumbotron jumbotron-fluid" style={styles.jumbotron}>
                    <div className="container" style={styles.topSpace}>
                        <div className="row">
                            <div className="col-12">


                                <h1 className="display-4 text-center" data-aos="flip-right" ><strong style={styles.largeText}>Hello!  </strong></h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <h1 className="display-4 text-center" data-aos="flip-left">
                                    <strong style={styles.largeText}> And.. Welcome!</strong></h1>
                            </div>

                        </div>

                        <div className="row">
                            <div className="col-6 d-flex justify-content-end">
                                <h1 data-aos="fade-left"
                                    data-aos-duration="500">Full</h1>

                            </div>
                            <div className="col-6 d-flex justify-content-start">
                                <h1 data-aos="fade-right"
                                    data-aos-duration="1000">Stack</h1>

                            </div>
                        </div>
                        <div className="row" style={styles.moreMargin}>
                            <div className="col-6 d-flex justify-content-end">
                                <h1 data-aos="fade-left"
                                    data-aos-duration="1500">Web</h1>

                            </div>
                            <div className="col-6 d-flex justify-content-start">
                                <h1 data-aos="fade-right"
                                    data-aos-duration="2000">Developer</h1>

                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12 d-flex justify-content-center">

                                <img src={Picture} alt="profile" style={styles.curvePicture}></img>
                            </div>
                        </div>








                        <p className="lead text-center">Thank you for stopping by!  I am a Full-Stack Web Developer from New York City.  I am a team player and professional debugger with a passion to create a fluid user experience.  It's as simple as black and white!</p>

                    </div>
                </div>
            </div>

        </div>
        <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
                <Card style={styles.styleCard}>
                    <CardContent>
                        <Typography align={"center"}>
                            <AiOutlineMail /> <a href="mailto:johnsondavid1107@gmail.com">johnsondavid1107@gmail.com </a>
                            <AiOutlineMail />

                        </Typography>
                        <hr></hr>
                        <Typography align={"center"}>
                            <CgFileDocument /> <a href="https://docs.google.com/document/d/1xZhhXB2kmWr3OvmVnIfEepLH1sXaXpLU05UmW18sRLk/edit?usp=sharing" target="_blank">
                                Resume </a>
                            <CgFileDocument />
                        </Typography>

                    </CardContent>
                </Card>
            </div>
            <div className="col-2"></div>

        </div>
        <div className="row">
            <div className="col-12 text-center" style={styles.noPadding}>
                <div style={styles.parallax}></div>
            </div>
        </div>






    </div >
    )

}

export default Home;