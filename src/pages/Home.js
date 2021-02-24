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
            backgroundPosition: "center top 16px",
            backgroundImage: `url(${stickMan})`,
            height: "500px",


        },
        largeText: {
            fontSize: "100px",
            padding: 0
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
            border: "5px solid white",
            margin: "20px"
        },
        topSpace: {
            marginTop: "100px"
        },
        removePadding: {
            padding: 0
        },
        white: {
            color: "white"
        }

    }


    return (<div className="container-fluid">


        <div className="row">
            <div className="col-12" style={styles.removePadding}>
                <div className="jumbotron jumbotron-fluid" style={styles.jumbotron}>
                    <div className="container" style={styles.topSpace}>
                        <div className="row">
                            <div className="col-12" style={styles.removePadding}>


                                <h1 className="display-4 text-center" data-aos="flip-right" ><strong style={styles.largeText}>Hello!  </strong></h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12" style={styles.removePadding}>
                                <h1 className="display-4 text-center" data-aos="flip-left">
                                    <strong style={styles.largeText}> And.. Welcome!</strong></h1>
                            </div>

                        </div>

                        <div className="row">
                            <div className="col-6 d-flex justify-content-end" style={styles.removePadding}>
                                <h1 data-aos="fade-left"
                                    data-aos-duration="1000">Full</h1>

                            </div>
                            <div className="col-6 d-flex justify-content-start">
                                <h1 data-aos="fade-right"
                                    data-aos-duration="1500">Stack</h1>

                            </div>
                        </div>
                        <div className="row" style={styles.moreMargin}>
                            <div className="col-6 d-flex justify-content-end" style={styles.removePadding}>
                                <h1 data-aos="fade-left"
                                    data-aos-duration="2000">Web</h1>

                            </div>
                            <div className="col-6 d-flex justify-content-start">
                                <h1 data-aos="fade-right"
                                    data-aos-duration="2500">Developer</h1>

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
                            <AiOutlineMail style={styles.white} /> <a href="mailto:johnsondavid1107@gmail.com"><button type="button" className="btn btn-outline-light" > johnsondavid1107@gmail.com </button> </a>
                            <AiOutlineMail style={styles.white} />

                        </Typography>
                        <hr></hr>
                        <Typography align={"center"}>
                            <CgFileDocument style={styles.white} /> <a href="https://docs.google.com/document/d/1xZhhXB2kmWr3OvmVnIfEepLH1sXaXpLU05UmW18sRLk/edit?usp=sharing" target="_blank">
                                <button type="button" className="btn btn-outline-light" > Resume </button> </a>
                            <CgFileDocument style={styles.white} />
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