import React from "react"
import "./portfolio.css"
import { SiGithub } from 'react-icons/si'
import { GrLinkedin } from 'react-icons/gr'
import { IconContext } from "react-icons";


class Footer extends React.Component {


    render() {
        const styles = {
            footerBackground: {
                background: "white"
            },
            footerPadding: {
                padding: "10px"
            }

        }
        return (
            <IconContext.Provider value={{ size: "6em" }}>
                < div className="row" >
                    <div className="col-12 text-center" style={styles.footerBackground}>

                        <a href="https://github.com/johnsondavid1107"><SiGithub className="gitHub" style={styles.footerPadding} /></a>

                        <a href="www.linkedin.com/in/johnsondavid1107
"><GrLinkedin className="linkedIn" style={styles.footerPadding} /></a>

                    </div>
                </div >
            </IconContext.Provider>
        )
    }
}
export default Footer

