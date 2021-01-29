import React from "react"
import HTML from "../components/photos/html.svg"
import picNode from "../components/photos/picNode.png"
import CSS3 from "../components/photos/css.png"
import JSpic from "../components/photos/js.png"
import NYC from "../components/NYC"
import Burger from "../components/photos/eatDaBurger.png"



function Portfolio() {

    const styles = {
        jumbotron: {
            background: "black",
            color: "white"
        },
        topContainer: {
            padding: 0

        },
        images: {
            background: "white",
            width: "100%"
        },
        techList: {
            display: "inline-block",

        }
    }
    return (
        <div className="container-fluid" style={styles.topContainer}>
            <div className="row">
                <div className="col-sm-12">
                    <div className="jumbotron jumbotron-fluid text-center" style={styles.jumbotron}>
                        <div className="container">
                            <h1 className="display-3"><strong>My Portfolio </strong> </h1>
                            <h4 className="display-4"><strong>Languages I speak...</strong> </h4>

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
                            <h1 className="display-4"><strong>Technologies I also use</strong></h1>
                            <ul>
                                <li style={styles.techList}> Node.JS |</li>
                                <li style={styles.techList}> Express.JS |</li>
                                <li style={styles.techList}> MongoDB |</li>
                                <li style={styles.techList}> Mongoose |</li>
                                <li style={styles.techList}> MySQL |</li>
                                <li style={styles.techList}> Heroku |</li>
                                <li style={styles.techList}> Git |</li>
                                <li style={styles.techList}> npm |</li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">

                <NYC />

            </div>


        </div>
    )



}
export default Portfolio