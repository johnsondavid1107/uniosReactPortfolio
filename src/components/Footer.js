import github from "../components/photos/github.png"
import linkedIN from "../components/photos/linkedIN.png"


function Footer() {
    const styles = {
        footerImage: {
            width: "12%",
            padding: "10px",
            marginTop: "25px"
        }

    }

    return (
        < div className="row" >
            <div className="col-12 text-center">
                <img src={github} alt="github logo" style={styles.footerImage}></img>
                <img src={linkedIN} alt="github logo" style={styles.footerImage}></img>

            </div>
        </div >

    )

}
export default Footer

