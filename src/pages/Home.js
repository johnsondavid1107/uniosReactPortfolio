import React from "react"
import HTML from "../components/html.svg"
import picNode from "../components/picNode.png"
import CSS3 from "../components/css.png"
import JSpic from "../components/js.png"
import NYC from "../components/NYC"



function Home() {

    const styles = {
        jumbotron: {
            background: "black",
            color: "white"
        },
        topContainer: {

        },
        images: {
            background: "white",
            width: "100%"
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

                <div className="col-sm-3">
                    <img src={HTML} alt="logo" style={styles.images}></img>
                </div>
                <div className="col-sm-3">
                    <img src={picNode} alt="node" style={styles.images}></img>
                </div>
                <div className="col-sm-3">
                    <img src={CSS3} alt="css" style={styles.images}></img>
                </div>
                <div className="col-sm-3">
                    <img src={JSpic} alt="css" style={styles.images}></img>
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
            <div className="row">
                <div className="col-sm-12">
                    <NYC />
                </div>
            </div>


        </div>
    )



}
export default Home