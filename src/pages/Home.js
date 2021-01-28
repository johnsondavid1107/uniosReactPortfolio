import React from "react"
import HTML from "../components/html.svg"
import picNode from "../components/picNode.png"
import CSS3 from "../components/css.png"
import JSpic from "../components/js.png"
import NYC from "../components/NYC"



function Portfolio() {

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
        },
        techList: {
            display: "inline-block",

        }, nycImage: {
            padding: 0
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
                                <li style={styles.techList}> One</li>
                                <li style={styles.techList}> two</li>
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