import stickMan from "../components/photos/stickMan.jpg"
import Footer from "../components/Footer"

function Home() {

    const styles = {
        imageProperty: {
            width: "75%"
        },
        navColor: {
            color: "gray"
        }

    }




    return (<div className="container-fluid">

        <div className="row">
            <div className="col-12 text-center">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" style={styles.navColor}>Portfolio</a>
                    </li>

                </ul>




            </div>
        </div>
        <div className="row">




            <div className="col-12">
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">                     <h1 className="display-4 text-center">Hello!  And.. Welcome</h1>
                        <p className="lead">Thank you for stopping by!  I am a Full-Stack We Developer from New York City who is a team player, professional debugger with a passion to create smooth websites for a fluid user expereince.  </p>
                    </div>
                </div>
            </div>

        </div>

        <div className="row">
            <div className="col-12 text-center">
                <img src={stickMan} alt="Stick Figure" style={styles.imageProperty}></img>
            </div>
        </div>


        <Footer />




    </div >
    )

}

export default Home;