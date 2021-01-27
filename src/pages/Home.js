import React from "react"
import HTML from "../components/html.svg"



function Home() {

    const styles = {
        jumbotron: {
            background: "black",
            color: "white"
        },
        topContainer: {

        }
    }
    return (
        <div className="container" style={styles.topContainer}>
            <div className="row">
                <div className="col-sm-12">
                    <div className="jumbotron jumbotron-fluid text-center" style={styles.jumbotron}>
                        <div className="container">
                            <h1 className="display-4"><strong>Hello!... and Welcome! </strong> </h1>

                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">



                    <img src={HTML} alt="logo"></img>




                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <div className="jumbotron jumbotron-fluid text-center" style={styles.jumbotron}>
                        <div className="container">
                            <h1 className="display-4"><strong>I am David Johnson</strong></h1>
                            <p className="lead">Full-Stack Web Devloper, professional debugger, team-player and fun to be around!</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )



}
export default Home