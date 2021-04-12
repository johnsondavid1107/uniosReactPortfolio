/* eslint-disable react/jsx-no-target-blank */
import React from "react"
import "./portfolio.css"
import { SiGithub } from 'react-icons/si'
import { GrLinkedin } from 'react-icons/gr'
import { IconContext } from "react-icons";


class Footer extends React.Component {


    render() {

        return (
            <IconContext.Provider value={{ size: "3em" }}>
                < div className="row lowFoot" >
                    <div className="col-12 text-center" >

                        <a href="https://github.com/johnsondavid1107" target={"_blank"}><SiGithub className="gitHub" /></a>

                        <a href="https://linkedin.com/in/johnsondavid1107
" target={"_blank"}><GrLinkedin className="linkedIn" /></a>

                    </div>
                </div >
                <div className="row">
                    <div className="col-12 text-center centerWhite blackBack">
                        <small>© Copyright 2021 | Site by David Johnson</small>
                    </div>

                </div>

            </IconContext.Provider>
        )
    }
}
export default Footer

