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
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <img src={picture} alt="NYC" style={styles.resize} />
                </Grid>


            </Grid>
        </div>
    )


}
export default NYC