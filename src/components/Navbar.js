/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import { Link, useLocaiton, useLocation } from "react-router-dom"




function Navbar() {
    const location = useLocation()

    const styles = {
        navColor: {
            color: "gray"
        }
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 text-center">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <Link to="/portfolio" >
                                Portfolio
                       </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" style={styles.navColor}>Nothing</a>
                        </li>

                    </ul>




                </div>
            </div>
        </div>
    )
}
export default Navbar;