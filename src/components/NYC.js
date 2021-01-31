import React from "react"

import picture from "./photos/nyc.jpg"



function NYC() {
    const styles = {
        resize: {
            width: "100%",
            objectFit: "scale-down"
        },
        noPadding: {
            padding: 0
        },
        addSpace: {
            paddingBottom: "150px",
            backgroundColor: "white"

        }

    }

    return (
        <div className="container-fluid" style={styles.noPadding}>

            <img src={picture} alt="NYC" style={styles.resize} />
            <div className="row">
                <div className="col-12" style={styles.addSpace}></div>
            </div>

        </div>
    )


}
export default NYC