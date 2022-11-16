import React from "react"
import HTML from "../components/photos/html.svg"
import picNode from "../components/photos/picNode.png"
import CSS3 from "../components/photos/css.png"
import JSpic from "../components/photos/js.png"
import reactBW from "../components/photos/reactBW.png"
import MYSQL from '../components/photos/MYSQL.png'
import NYC from "../components/NYC"
import Projects from "../components/Projects"
import { Link, useLocation } from "react-router-dom"
import "./style.css"
import Footer from "../components/Footer"






function Portfolio() {
    const location = useLocation()

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
            fontSize: "30px"

        },
        topBorder: {
            border: "none"
        }

    }
    return (
        <div className="fontStyle">
            <div className="container-fluid" style={styles.topContainer}>
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


                <div className="row back about">
                    <div className="col-sm-12">
                        <div className="jumbotron jumbotron-fluid text-center" style={styles.jumbotron}>

                            <h1 className="fontStyle"><strong>Languages<br /> I speak...</strong> </h1>


                        </div>
                    </div>
                </div>
                <div className="row back">

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
                                <h1 className="display-4"><strong>Also in the arsenal</strong></h1>
                                <ul>
                                    <li style={styles.techList}>
                                        <strong className="html5"> HTML 5 </strong> <strong>| </strong>
                                        <strong className="react">  React </strong>
                                        <strong> | Node.js | </strong>
                                        <strong>   My </strong>
                                        <strong className="sql">  SQL  </strong>
                                        <strong> | CSS 3 |</strong>
                                        <strong className="javascript">  Javascript </strong>
                                        <strong> | Express.JS | </strong>
                                        <strong className="mongo"> MongoDB </strong>
                                        <strong>  | Mongoose |
                                        Bootstrap 4 |
                                        Heroku |
                                        Git |
                                        npm |
                                        Sequelize
                                        | ORM
                                        | API
                                        | Local Storage
                                          | CRUD</strong> </li>


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
            <Footer />
        </div>

    )



}
export default Portfolio