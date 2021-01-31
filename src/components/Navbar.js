/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import { Link, useLocation } from "react-router-dom"




function Navbar() {
    const location = useLocation()

    const styles = {
        navColor: {
            color: "gray"
        },
        back: {
            backgroundColor: "black",
            color: "white"
        },
        noPadding: {
            padding: 0
        }
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 text-center" style={styles.noPadding}>
                    <ul className="nav nav-tabs" style={styles.back}>
                        <li className="nav-item">
                            <Link to="/portfolio" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"} >
                                Portfolio
                       </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"} >
                                Home
                       </Link>

                        </li>

                    </ul>




                </div>
            </div>
        </div>
    )
}
export default Navbar;