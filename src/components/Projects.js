import React from "react"

import samplepic1 from "./photos/300.png"
import Burger from "./photos/eatDaBurger.png"
import EmployeeDirectory from "./photos/EmployeeDirectory.png"

function Projects() {
    const styles = {
        imageTest: {
            padding: 0,
            marginBottom: 5
        }, picture: {
            width: "100%"
        },
        box: {
            width: "300px",
            background: "white"

        }
    }

    return (
        <div className="container-fluid">
            <div style={styles.box}></div>
            <div className="row text-center ">
                <div className="col-6 col-sm-6 col-md-4 col-xl-3" style={styles.imageTest}>
                    <img src={samplepic1} alt="test" style={styles.picture}></img>
                </div>
                <div className="col-6 col-sm-6 col-md-4 col-xl-3" style={styles.imageTest}>
                    <img src={Burger} alt="test" style={styles.picture}></img>
                </div>
                <div className="col-6 col-sm-6 col-md-4 col-xl-3" style={styles.imageTest}>
                    <img src={EmployeeDirectory} alt="test" style={styles.picture}></img>
                </div>
                <div className="col-6 col-md-4 col-xl-3" style={styles.imageTest}>
                    <img src={samplepic1} alt="test" style={styles.picture}></img>
                </div>
                <div className="col-6 col-md-4 col-xl-3" style={styles.imageTest}>
                    <img src={samplepic1} alt="test" style={styles.picture}></img>
                </div>
                <div className="col-6 col-md-4 col-xl-3" style={styles.imageTest}>
                    <img src={samplepic1} alt="test" style={styles.picture}></img>
                </div>
                <div className="col-6 col-md-4 col-xl-3" style={styles.imageTest}>
                    <img src={samplepic1} alt="test" style={styles.picture}></img>
                </div>
                <div className="col-6 col-md-4 col-xl-3" style={styles.imageTest}>
                    <img src={samplepic1} alt="test" style={styles.picture}></img>
                </div>



            </div>
        </div>

    )
}
export default Projects;