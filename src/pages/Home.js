/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import stickMan from "../components/photos/stickMan.jpg"
import { AiOutlineMail } from "react-icons/ai"
import { CgFileDocument } from "react-icons/cg"


function Home() {

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
        }

    }


    return (<div className="container-fluid">


        <div className="row">
            <div className="col-12">
                <div className="jumbotron jumbotron-fluid" style={styles.jumbotron}>
                    <div className="container">                     <h1 className="display-4 text-center">Hello!  And.. Welcome!</h1>
                        <p className="lead">Thank you for stopping by!  I am a Full-Stack Web Developer from New York City.  I am a team player and professional debugger with a passion to create a fluid user experience.  It's as simple as black and white!</p>
                        <strong> <p>Looking forward to colaborate!</p> </strong>
                        <AiOutlineMail /> <a href="mailto:johnsondavid1107@gmail.com"><p>johnsondavid1107@gmail.com</p></a>
                        <hr></hr>
                        <CgFileDocument /> <a href="https://docs.google.com/document/d/1xZhhXB2kmWr3OvmVnIfEepLH1sXaXpLU05UmW18sRLk/edit?usp=sharing" target="_blank"><strong><p>Resume</p></strong></a>

                    </div>
                </div>
            </div>

        </div>

        <div className="row">
            <div className="col-12 text-center" style={styles.noPadding}>
                <img src={stickMan} alt="Stick Figure" style={styles.imageProperty}></img>
            </div>
        </div>




    </div >
    )

}

export default Home;