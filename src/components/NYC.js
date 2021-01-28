import React from "react"

import picture from "./photos/nyc.jpg"



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