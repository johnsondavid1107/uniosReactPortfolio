import React from "react"
import Grid from "@material-ui/core/Grid"

import samplepic1 from "./300.png"

function Projects() {
    const styles = {
        imageTest: {
            padding: 0,
            marginBottom: 5
        }, picture: {
            width: "100%"
        }
    }

    return (
        <div className="container-fluid">
            <div className="row text-center ">
                <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3" style={styles.imageTest}>
                    <img src={samplepic1} alt="test" style={styles.picture}></img>
                </div>
                <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3" style={styles.imageTest}>
                    <img src={samplepic1} alt="test" style={styles.picture}></img>
                </div>
                <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3" style={styles.imageTest}>
                    <img src={samplepic1} alt="test" style={styles.picture}></img>
                </div>
                <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3" style={styles.imageTest}>
                    <img src={samplepic1} alt="test" style={styles.picture}></img>
                </div>
                <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3" style={styles.imageTest}>
                    <img src={samplepic1} alt="test" style={styles.picture}></img>
                </div>
                <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3" style={styles.imageTest}>
                    <img src={samplepic1} alt="test" style={styles.picture}></img>
                </div>
                <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3" style={styles.imageTest}>
                    <img src={samplepic1} alt="test" style={styles.picture}></img>
                </div>
                <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3" style={styles.imageTest}>
                    <img src={samplepic1} alt="test" style={styles.picture}></img>
                </div>



            </div>
        </div>

    )
}
export default Projects;