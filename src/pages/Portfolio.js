import React from "react"
import HTML from "../components/photos/html.svg"
import picNode from "../components/photos/picNode.png"
import CSS3 from "../components/photos/css.png"
import JSpic from "../components/photos/js.png"
import reactBW from "../components/photos/reactBW.png"
import MYSQL from '../components/photos/MYSQL.png'
import NYC from "../components/NYC"
import Projects from "../components/Projects"






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
            width: "50%"
        },
        techList: {
            display: "inline-block",

        },

    }
    return (
        <div>
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

                    <div className="col-4">
                        <img src={HTML} alt="logo" style={styles.images}></img>
                        <img src={reactBW} alt="logo" style={styles.images}></img>

                    </div>
                    <div className="col-4">
                        <img src={picNode} alt="node" style={styles.images}></img>
                        <img src={MYSQL} alt="node" style={styles.images}></img>

                    </div>
                    <div className="col-4">
                        <img src={CSS3} alt="css" style={styles.images}></img>
                        <img src={JSpic} alt="css" style={styles.images}></img>
                    </div>





                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="jumbotron jumbotron-fluid text-center" style={styles.jumbotron}>
                            <div className="container">
                                <h1 className="display-4"><strong>Technologies I also use</strong></h1>
                                <ul>
                                    <li style={styles.techList}> <strong>Express.JS | MongoDB | Mongoose | MySQL | Bootstrap 4 | Heroku | Git | npm | Sequelize | ORM </strong> </li>


                                </ul>
                                <h4>See below for some examples!</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">

                        <NYC />
                    </div>
                </div>



            </div>
            <Projects />
        </div>

    )



}
export default Portfolio