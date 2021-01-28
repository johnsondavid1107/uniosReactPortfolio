import React from "react"
import Container from "@material-ui/core/Container"
import picture from "./nyc.jpg"
import Grid from "@material-ui/core/Grid"
import { cover } from "polished"


function NYC() {
    const styles = {
        resize: {
            width: "100%",
            objectFit: "scale-down"
        }

    }

    return (
        <div className="container-fluid">

            <img src={picture} alt="NYC" style={styles.resize} />

        </div>
    )


}
export default NYC